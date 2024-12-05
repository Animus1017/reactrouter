import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

const SignupForm = ({setLoggedIn}) => {
  const[formData,setformData] =useState({firstName: '', lastName: '',email: '', password: '',confirmPassword: ''});
  const[showPassword, setShowPassword]=useState(false);
  const[showConfirmPassword, setShowConfirmPassword]=useState(false);
  const[accountType, setAccountType]=useState('student');
  const navigate=useNavigate();
  function changeHandler(event){
    setformData({...formData,[event.target.name]:event.target.value});
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.password!==formData.confirmPassword){
      toast.error("Passwords do not match");
      return;
    }
    setLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard")
  }
  function typeHandler(event){
    event.preventDefault();
    setAccountType(event.target.innerText.toLowerCase());
  }
  return (
    <form onSubmit={submitHandler} className='w-full flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
        <div className='bg-richblack-800 rounded-3xl p-1 w-fit border-b-2 border-richblack-700'>
          <button onClick={typeHandler} className={`${accountType === "student" ? "bg-black text-richblack-5" : "bg-richblack-800 text-richblack-200"} transition-all duration-200 px-5 py-2 rounded-3xl`}>Student</button>
          <button onClick={typeHandler} className={`${accountType === "instructor" ? "bg-black text-richblack-5" : "bg-richblack-800 text-richblack-200"} transition-all duration-200 px-5 py-2 rounded-3xl`}>Instructor</button>
        </div>
        <div className='flex justify-between'>
          <label className='flex flex-col w-[48%]'>
            <p className='text-sm'>First Name<sup className='text-red-500'>*</sup></p>
            <input className='outline-none bg-richblack-800 placeholder:text-richblack-100 py-2 px-3 rounded-md placeholder:text-sm border-b-2 border-richblack-700' required type="text" placeholder='Enter first name' name="firstName" value={formData.firstName} onChange={changeHandler}/>
          </label>
          <label className='flex flex-col w-[48%]'>
            <p className='text-sm'>Last Name<sup className='text-red-500'>*</sup></p>
            <input className='outline-none bg-richblack-800 placeholder:text-richblack-100 py-2 px-3 rounded-md placeholder:text-sm border-b-2 border-richblack-700' required type="text" placeholder='Enter last name' name="lastName" value={formData.lastName} onChange={changeHandler}/>
          </label>
        </div>
        <label className='flex flex-col'>
          <p className='text-sm'>Email Address<sup className='text-red-500'>*</sup></p>
          <input className='outline-none bg-richblack-800 placeholder:text-richblack-100 py-2 px-3 rounded-md placeholder:text-sm border-b-2 border-richblack-700'  required type="email" placeholder='Enter email address' name="email" value={formData.email} onChange={changeHandler}/>
        </label>
        <div className='flex justify-between'>
          <label className='flex flex-col relative w-[48%]'>
              <p className='text-sm'>Create Password<sup className='text-red-500'>*</sup></p>
              <input className='outline-none bg-richblack-800 placeholder:text-richblack-100 py-2 px-3 rounded-md placeholder:text-sm border-b-2 border-richblack-700' required type={showPassword?"text":"password"} placeholder='Enter Password' name="password" value={formData.password} onChange={changeHandler}/>
              <span className='absolute text-2xl bottom-2 right-2 cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</span>
          </label>
          <label className='flex flex-col relative w-[48%]'>
              <p className='text-sm'>Confirm Password<sup className='text-red-500'>*</sup></p>
              <input className='outline-none bg-richblack-800 placeholder:text-richblack-100 py-2 px-3 rounded-md placeholder:text-sm border-b-2 border-richblack-700' required type={showConfirmPassword?"text":"password"} placeholder='Confirm Password' name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler}/>
              <span className='absolute text-2xl bottom-2 right-2 cursor-pointer' onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword?<AiOutlineEye />:<AiOutlineEyeInvisible />}</span>
          </label>  
        </div>
      </div>
      <button className='bg-yellow-50 rounded-md py-2 text-black w-full'>Create Account</button>
    </form>
  )
}

export default SignupForm
