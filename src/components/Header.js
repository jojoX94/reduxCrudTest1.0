import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="logo192.png" alt="" />
                <h3>React Native</h3>
            </div>
            <div className="header__right">
                <div className="list__link">
                    <a href="">Acceuil</a>
                    <a href="">List</a>
                    <a href="">Image</a>
                    <a href="">Contact</a>
                    <a href="">A propos</a>
                </div>
            </div>
        </div>
    )
}

export default Header
