import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = ({ numItem, total }) => {
    return (
        <header className="header">
            <Link to="/">
                <div className="logo">Book store</div>
            </Link>
            <Link to="/cart">
                <div className="cart-button" href="/">
                    <i className="bi bi-cart-check"></i>
                    {numItem} items ({total})
                </div>
            </Link>
        </header>
    )
}

export default Header