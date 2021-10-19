import './Register.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useAuth } from '../../../hooks/useAuth';

const Register = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const redirectURL = '/';

    const history = useHistory();
    const { googleSignin , emailRegister , error} = useAuth();
    
    const onSubmit = (data) => {
        const { name, email, password } = data;
        emailRegister(name, email , password , redirectURL , history)
    }
    
    const redirectToLogin = () => {
        history.push('/login');
    }
    return (
        <div className="register-bg py-5 mt-nav">
            <div className="container d-flex flex-column flex-md-row justify-content-around align-items-center">

                <div><img src="./images/register.png" alt="" className="img-fluid" height="400px" width="400px"/></div>

                <div className="d-flex flex-column bg-light px-3 py-4 rounded">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                        <div className="form-floating mb-2">
                            <input className="form-control px-5" type="text" placeholder="Name" id="name" {...register("name", { required: "This is required" })} />
                            <label htmlFor="name">Name</label>
                            {errors.name && <p class="text-danger fw-bold m-0">{errors.name.message}</p>}
                        </div>
                        <div className="form-floating mb-2">
                            <input className="form-control px-5" type="email" placeholder="Email" id="email" {...register("email", { required: "This is required" })} />
                            <label htmlFor="email">Email</label>
                            {errors.email && <p class="text-danger fw-bold m-0">{errors.email.message}</p>}
                        </div>
                        <div className="form-floating mb-2">
                            <input className="form-control px-5" type="password" placeholder="Password" id="email" {...register("password", { required: "This is required" , minLength:{value:6 , message:"Password must be atleast 6 characters"}})} />
                            <label htmlFor="email">Password</label>
                            {errors.password && <p class="text-danger fw-bold m-0">{errors.password.message}</p>}
                        </div>
                        {error && <p className="text-danger fw-bold">{error}</p>}
                        <div><button className="btn btn-success">Register</button></div>
                    </form>
                    <div className="mt-3">
                        <button className="btn btn-danger" onClick={googleSignin}>Register using Google</button>
                    </div>

                    <p className="redirect pt-3" onClick={redirectToLogin}>Already have an account?</p>

                </div>
            </div>
            

        </div>
    );
};

export default Register;