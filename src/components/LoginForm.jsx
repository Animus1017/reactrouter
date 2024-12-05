import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

const LoginForm = ({setLoggedIn}) => {
    const[formData,setformData] =useState({email:"",password:""});
    const[showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate();
    function changeHandler(event){
        setformData({...formData,[event.target.name]:event.target.value});
    }
    function submitHandler(event){
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-10'>
        <div className='flex flex-col gap-3'>
            <label className='flex flex-col'>
                <p className='text-sm'>Email Address <sup className='text-red-500'>*</sup></p>
                <input className='outline-none bg-richblack-800 placeholder:text-richblack-100 py-2 px-3 rounded-md placeholder:text-sm border-b-2 border-richblack-700' required type="email" placeholder='Enter email address' name="email" value={formData.email} onChange={changeHandler}/>
            </label>
            <label className='flex flex-col relative'>
                <p className='text-sm'>Password<sup className='text-red-500'>*</sup></p>
                <input className='outline-none bg-richblack-800 placeholder:text-richblack-100 py-2 px-3 rounded-md placeholder:text-sm border-b-2 border-richblack-700' required type={showPassword?"text":"password"} placeholder='Enter Password' name="password" value={formData.password} onChange={changeHandler}/>
                <span className='absolute bottom-6 right-2 cursor-pointer text-2xl' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</span>
                <Link to="#" className='text-xs text-blue-100 self-end'>Forgot Password</Link>
            </label>
        </div>
        <button className='bg-yellow-50 rounded-md py-2 text-black w-full'>Sign In</button>
    </form>
  )
}

export default LoginForm
