import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setisLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full '>
            <p className='text-richblack-5 text-[1rem] mb-1 leading-[1.375rem] 
            '>
                Email Address<sup className='text-red-500'>*</sup>
            </p>
            <input  
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                '
            />
        </label>

        <label className='w-full relative'>
            <p className='text-richblack-5 text-[1rem] mb-1 leading[1.375rem]'>
                Password<sup className='text-red-500'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                hover:border border-blue-400'
            />

            <span className='absolute right-3 top-[44px] text-richblack-100 cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-blue-100 text-sm text-right mt-1 mr-2'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='w-full text-richblack-900 bg-yellow-50 px-[12px] py-[8px] rounded-md mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm;
