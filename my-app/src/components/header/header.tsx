import React from 'react';

const Header = () => {
    return (
        <header className="header container d-flex">
            <div className="logo">
                <a className="logo_link" href="#">Media</a>
            </div>

            <ul className="menu">
                <li className="menu_item"><a href="#" className="menu_link active_link">HOME</a></li>
                <li className="menu_item"><a href="#require" className="menu_link">ABOUT</a></li>
                <li className="menu_item"><a href="#require" className="menu_link">CONTACT</a></li>
                <li className="menu_item"><a href="#" className="menu_link">PAGE</a></li>
            </ul>
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;