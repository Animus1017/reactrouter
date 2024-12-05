import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
const Navbar = (props) => {
  return (
    <div className='flex justify-between items-center text-richblack-100 py-4'>
      <Link to="/"><img src={Logo} alt="study notion" className='w-[160px] h-[32px]'/></Link>
      <nav>
        <ul className='flex gap-6 font-semibold'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>
      <div className='flex gap-4'>
        {
          !props.isLoggedIn &&
          <Link to="/login">
            <button className='bg-richblack-700 rounded-lg py-2 px-3'>Log In</button>
          </Link>
        }
        {
          !props.isLoggedIn &&
          <Link to="/signup">
            <button className='bg-richblack-700 rounded-lg py-2 px-3'>SignUp</button>
          </Link>
        }
        {
          props.isLoggedIn &&
          <Link to="/">
            <button onClick={
              () => {
                props.setLoggedIn(false)
                toast.success("Logged Out")
              }
            }
            className='bg-richblack-700 rounded-lg py-2 px-3'>LogOut</button>
          </Link>
        }
        {
          props.isLoggedIn &&
          <Link to="/dashboard">
            <button className='bg-richblack-700 rounded-lg py-2 px-3'>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
