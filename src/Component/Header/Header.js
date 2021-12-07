import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

     

    return (
        <div className='header'>
            <div className='header__left'>
                {/* <img src={logo2} alt="" className="header_logo"/> */}
                <Link to='/'>
                    Om Executive
                </Link>
            </div>
            <div className="header__right">
                <div className='header__icons'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to='/' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to='/Gallery' onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                        <Link to='/BookNow' onClick={closeMobileMenu}>
                             Book Now
                        </Link>
                        <Link to='/Tourism' onClick={closeMobileMenu}>
                            Tourism
                        </Link>
                        <Link to='/Account' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>

                    </ul>
                    <div className='menu_icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;