import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'

const Navbar = () => {

    return (
        <div className='navbar'>
            {/* <img className='logo' src={assets.logo} alt='' /> */}
            <p className='website-name'>RUPENDRA Food's <br /> <span>Admin Panel</span></p>
            <img className='profile' src={assets.Admin_Profile} alt='' />
        </div>
    )
}

export default Navbar
