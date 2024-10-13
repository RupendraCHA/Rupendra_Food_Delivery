import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets"
import { Link, useNavigate } from "react-router-dom"
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home")
    const [cartCount, setCartCount] = useState(0)

    const navigate = useNavigate()


    const { cartItems, getCartTotalAmount, token, setToken, setUsername, username } = useContext(StoreContext)

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setToken("")
        setUsername("")
        navigate("/")
    }
    useEffect(() => {
        let no_of_items = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                no_of_items += 1
            }
        }
        setCartCount(no_of_items)
    }, [cartItems])

    // console.log(cartCount)

    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt='' className="logo" /></Link>
            <ul className='navbar-menu'>
                <Link to="/" href='#' onClick={() => setMenu("home")} className={menu === "home" ? 'active' : ''}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? 'active' : ''}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? 'active' : ''}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? 'active' : ''}>contact us</a>
                <a href='https://myportfolio1r.ccbp.tech/' target='_blank' onClick={() => setMenu("author")} className={menu === "author" ? 'active' : ''}>Rupendra(Author)</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='' />
                <div className='navbar-search-icon'>
                    <Link to="/cart"><img src={assets.basket_icon} alt='' /></Link>
                    <div className={getCartTotalAmount() === 0 ? "" : "dot"}>{getCartTotalAmount() !== 0 ? cartCount : ""}</div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>sign in</button> :
                    <div className='navbar-profile'>
                        <div className='profile-user'>
                            <img src={assets.profile_icon} alt='' />
                            <p>{username}</p>
                        </div>
                        <ul className='nav-profile-dropdown'>
                            <li><img src={assets.bag_icon} alt='' /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt='' /><p>Logout</p></li>
                        </ul>
                    </div>
                }
            </div>

        </div>
    )
}

export default Navbar
