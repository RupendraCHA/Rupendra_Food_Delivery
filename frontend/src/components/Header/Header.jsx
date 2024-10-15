import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Choose the most delicious items from Rupendra Foods</h2>
                <p>Choose from a diverse menu featuring a delectable
                    array of dishes crafted with the finest ingredients and
                    culinary expertise. Our mission is to satisfy your cravings
                    and elevate your dining experience, on delicious meal at a time.
                </p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
