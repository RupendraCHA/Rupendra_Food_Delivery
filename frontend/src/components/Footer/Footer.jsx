import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    {/* <img src={assets.logo} alt='' /> */}
                    <p className='website-name'>RUPENDRA Food's</p>
                    <p>The food delivery industry has boomed in recent years, fueled by the
                        convenience it offers busy consumers. With a few taps on a
                        smartphone app, a delicious meal arrives at your doorstep,
                        eliminating the need for cooking or venturing out.
                        However, even the most streamlined operations can experience hiccups.
                    </p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt='' />
                        <img src={assets.linkedin_icon} alt='' />
                        <img src={assets.twitter_icon} alt='' />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>RUPENDRA's Food Delivery</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                        <li>Rupendra(Author Info)</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 1234562624</li>
                        <li>chandaluri.rupendra@gmail.com, contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyright @ 2024 © Tomato.com - All rights reserved by Rupendra Chandaluri.
            </p>
        </div>
    )
}

export default Footer
