import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [loginError, setLoginError] = useState('')
    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.group(user)
                toast.success('successfully Loged In')
            })
            .catch(error => {
                console.log(error.message)
                // setLoginError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center my-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: "Email Address is required"
                            })} />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='password'
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 5, message: 'Password must 5 char or Longer.' }
                            })} />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn w-full mt-4 bg-green-600' value='LogIn' type="submit" />
                    <div>
                        {loginError && <p>{loginError}</p>}
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;