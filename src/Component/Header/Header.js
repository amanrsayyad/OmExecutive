import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import omexe from '../../Assets/icons/omexe.png';


const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div className='header'>
            <div className='header__left'>
                {/* <img src={logo2} alt="" className="header_logo"/> */}
                <Link to='/'>
                <img src={omexe} alt="" className="header_logo"/> 
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
                        <Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className="btn_toggle btn-warning">
                                    Book Now
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='btn_menu'>
                                <Link to='/Rooms' className="drop_link" onClick={closeMobileMenu}>Rooms</Link>
                                <Link to='/Resto' className="drop_link" onClick={closeMobileMenu}>Restaurant</Link>
                                <Link to='/Hall' className="drop_link" onClick={closeMobileMenu}>Multipurpose Hall</Link>
                                <Link to='/Lawn' className="drop_link" onClick={closeMobileMenu}>Lawns</Link>
                                </Dropdown.Menu>
                            </Dropdown>
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
        </div >
    )
}

export default Header;