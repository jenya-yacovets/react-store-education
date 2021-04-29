import React from 'react'

import './header.css'

const Header = ({ numItem, total }) => {
    return (
        <header className="header">
            <a href="/" className="logo">Book store</a>
            <a className="cart-button" href="/">
                <i className="bi bi-cart-check"></i>
                {numItem} items ({total})
            </a>
        </header>
    )
}

export default Header