import { useEffect, useState } from "react";
import authInit from "../Firebase/firebase-init";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword , updateProfile} from "firebase/auth";

// initiate authentication
authInit();

const useFireBase = () => {
    
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    
    // sign in w google
    const googleSignin = (redirectURL, history) => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).then(() => {
                history.push(redirectURL)
            }).finally(() => setIsLoading(false));
    }

    // register with email and pass
    const emailRegister = (name, email, password, redirectURL, history) => {
        const update = updateProfile();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            update.displayName = name;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        }).finally(() => {
            history.push(redirectURL);
            setIsLoading(false)
        });
    }
    
    // sign in w email and pass
    const emailSignIn = (email, password, redirectURL, history) => {
        setIsLoading(true);
        
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            
        }).finally(() => {
            history.push(redirectURL);
            setIsLoading(false)
        });
    }
    
    // logout
    const logOut = () => {
        signOut(auth).then(
            () => {
                setUser({});
            }
        )
    }

    // set user state
    useEffect(() => {
        const userState = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return userState;
    },[auth])
    

    return {
        user, googleSignin , emailSignIn, emailRegister,  isLoading , logOut
    }
}

export default useFireBase;