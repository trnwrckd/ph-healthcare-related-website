import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import {useHistory , useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Login = () => {
    const history = useHistory();

    const { handleSubmit, register, formState: { errors } } = useForm();
    const { googleSignin , emailSignIn , error} = useAuth();
    const location = useLocation();

    const redirectURL = location.state?.from || '/';

    const onSubmit = (data) => {
        const { email, password } = data;
        emailSignIn(email, password, redirectURL, history);
    }
    
    const handleGoogleSignin = () => {
        googleSignin(redirectURL , history);
    }

    const redirectToRegister = () => {
        history.push('/register');
    }
    return (
        <div className="login-bg py-5 mt-nav">
            <div className="container d-flex flex-column flex-md-row justify-content-around align-items-center">
                <div className="d-flex flex-column justify-content-center login px-3 py-4">
                    <h1>Login</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" type="email" placeholder="Email" id="email" {...register("email", { required: "Email is required" })} />
                                <label htmlFor="email">Email</label>
                                {errors.email && <p className="text-danger fw-bold m-0">{errors.email.message}</p>}
                            </div>
                            <div className="form-floating mb-2">
                                <input className="form-control px-5" type="password" placeholder="Password" id="email" {...register("password", { required: "Password is required" , minLength:{value:6 , message:"Password must be atleast 6 characters"}})} />
                                <label htmlFor="email">Password</label>
                                {errors.password && <p className="text-danger fw-bold m-0"> {errors.password.message}</p>}
                            </div>
                            {error && !errors.password && !errors.email && <p className="text-danger fw-bold">{error}</p>}
                            <div><button className="btn-generic  btn-blue">
                                    Login
                                    <i className="fas fa-sign-in-alt ms-1"></i>
                                </button>
                            </div>
                        </form>
                        <div className="mt-3">
                            <button className="btn-generic btn-red" onClick={handleGoogleSignin}>
                                <i className="fab fa-google me-1"></i>
                                Login with Google  
                            </button>
                        </div>
                    </div>
                    <p className="redirect pt-3" onClick={redirectToRegister}>Don't have an account?</p>
                </div>

                <div>
                    <img src="./images/login.png" alt="" className="img-fluid" height="400px" width="400px" />
                </div>

            </div>

        </div>
    );
};

export default Login;