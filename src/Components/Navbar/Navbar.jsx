import React from 'react'
import Logo from '../../Assests/logo.png'
import { UserRound } from 'lucide-react';
import './style.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div className="navbar-logo">
  <img src={Logo} alt="" />
    </div>
    <div className="nav-link">
     <ul>
        <li><a href="£"> Home</a></li>
        <li><a href="$">Vehicle Listing</a></li>
        <li><a href="$">Contact Us</a></li>
     </ul>
    </div>
    <div className="user">
        <div className="user-icon">
        <UserRound color="#ffffff" />
        </div>
        <span>Sign in</span>
    </div>
    </div>
  )
}

export default Navbar