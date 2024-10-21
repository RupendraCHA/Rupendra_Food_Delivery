import React, { useContext } from 'react'
import "./Header.css"
import { StoreContext } from '../../context/StoreContext'

const Header = () => {

    const {token} = useContext(StoreContext)

    return (
        <div className='header'>
            {token ? "" : (
                <div className='user'>
                    <p>Login Id: user123@gmail.com</p>
                    <p>Password: 123456789</p>
                </div>
            )}
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
