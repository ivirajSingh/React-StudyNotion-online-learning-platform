import React from "react";
import {useState} from "react"
import {FaEye, FaEyeSlash } from "react-icons/fa";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setisLoggedIn}) => {


    const navigate = useNavigate();
    const [formData, setformData] = useState({firstName:"", lastName: "", email: "", password: "", confirmPassword: ""});
    const [showPass, setShowPassword] = useState(false);
    const [showconfirmPass, setShowconfirmPassword] = useState(false);
    const [AccType, setAccType] = useState("student");


    function ChangeHandler(event){
        setformData((prevData) => (
            {
                ...prevData, 
                [event.target.name]:event.target.value
            }
        ))
    };

    function SubmitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setisLoggedIn(true);
        toast.success("Account Created");
        const accountData ={
            ...formData
        };

        const finalData = {
            ...accountData,
            AccType
        }
        console.log(finalData);
        navigate("/dashboard");
    }

    return(
        <div>
            <div className="bg-richblack-700 flex rounded-full w-50 justify-center py-[2px] gap-1 mt-5">
                <button
                 onClick={()=> setAccType("student") } 
                 className={`${AccType === "student" ? "text-white bg-richblack-900" : "text-richblack-200 bg-transparent"} rounded-full text-[17px] px-[15px] py-[8px] transition-all duration-200`}>

                    Student
                </button>
                <button onClick={() => setAccType("instructor")} className={`${AccType === "instructor" ? "text-white bg-richblack-900" : "text-richblack-200 bg-transparent"} rounded-full text-[17px] px-[15px] py-[8px] transition-all duration-200`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={SubmitHandler}>
                {/* first Name and lastName */}
                <div className="flex mt-4 w-full gap-9">
                    <label>
                        <p className="text-richblack-5 text-[1rem] mb-1 leading-[1.375rem]">First Name<sup className="text-red-500">*</sup></p>
                        <input className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                ' required type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={ChangeHandler}/>
                    </label>

                    <label>
                        <p className="text-richblack-5 text-[1rem] mb-1 leading-[1.375rem]">Last Name<sup className="text-red-500">*</sup></p>
                        <input className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                ' required type="text" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={ChangeHandler}/>
                    </label>
                </div>

                {/* Email Address */}
                <div className="w-full mt-4">
                    <label>
                        <p className="text-richblack-5 text-[1rem] mb-1 leading-[1.375rem]">Email Address<sup className="text-red-500">*</sup></p>
                        <input className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                    ' required type="email" name="email" placeholder="Enter E-mail Address" value={formData.email} onChange={ChangeHandler}/>
                    </label>
                </div>

                {/* Create Password confirm password */}
                <div className="flex mt-4 w-full gap-9 ">
                    <label className="w-full relative">
                        <p className="text-richblack-5 text-[1rem] mb-1 leading-[1.375rem]">Create Password<sup className="text-red-500">*</sup></p>
                        <input className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                ' required type={showPass ? ("text") : ("password")}  name="password" placeholder="Create Password" value={formData.password} onChange={ChangeHandler}/>
                        <span className='absolute right-3 top-[42px] text-richblack-100 cursor-pointer'onClick={() => setShowPassword((prev) => !prev)}>
                            {showPass ? (<FaEye fontSize={22} fill='#AFB2BF' />) : (<FaEyeSlash fontSize={22} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className="w-full relative">
                        <p className="text-richblack-5 text-[1rem] mb-1 leading-[1.375rem]">Confirm Password<sup className="text-red-500">*</sup></p>
                        <input className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                ' required type={showconfirmPass ? ("text") : ("password")}  name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={ChangeHandler}/>
                        <span className='absolute right-3 top-[42px] text-richblack-100 cursor-pointer' onClick={() => setShowconfirmPassword((prev) => !prev)}>
                            {showconfirmPass ? (<FaEye fontSize={22} fill='#AFB2BF' />) : (<FaEyeSlash fontSize={22} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>
                <button className='w-full text-richblack-900 bg-yellow-50 px-[12px] py-[8px] rounded-md mt-10'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm;