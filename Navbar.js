import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1080px] py-4 mx-auto'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-200'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-200'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-200' onClick={() => {
                        setisLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-200'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar;
