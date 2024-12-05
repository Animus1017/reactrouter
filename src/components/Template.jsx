import React from 'react'
import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc";
const Template = ({title,desc1,desc2,image,formType,setLoggedIn}) => {
  return (
    <div className='flex justify-between '>
        <div className='flex flex-col text-white gap-4 w-[45%]'>
            <h2 className='text-3xl font-bold text-richblack-5'>{title}</h2>
            <div className='flex flex-col'>
                <span>{desc1}</span>
                <span className='text-blue-100 italic'>{desc2}</span>
            </div>
            {formType==="signup"?<SignupForm setLoggedIn={setLoggedIn}/>:<LoginForm setLoggedIn={setLoggedIn}/>}
            <div className='flex items-center w-full justify-between'>
                <div className='bg-richblack-700 h-[1px] w-5/12 '></div>
                <p className='text-richblack-700 font-medium'>OR</p>
                <div className='bg-richblack-700 h-[1px] w-5/12 '></div>
            </div>
            <button className='flex items-center gap-2 border-richblack-700 border-2 py-2 w-full rounded-md justify-center text-richblack-100'><FcGoogle className='text-2xl'/>  Sign in with Google</button>
        </div>
      <div className='w-[40%] mt-5'>
        <div className='relative'>
          <img src={image} alt={formType} className='absolute bottom-4 right-4'/>
          <img src={frame} alt="frame" />
        </div>
      </div>
    </div>
  )
}

export default Template
