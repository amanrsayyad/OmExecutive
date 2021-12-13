import React from 'react';
import './Styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className="footer">
        <div className="footerLinks">
            <h1 className='headFooter'>Hotel <br/>Om Executive</h1>
            <p className='paraFoot'>The Complete Family & Business Class Hotel</p>
        </div>
        <div className="footerLinks">
            <h1 className='head'>Contact Us</h1>
            <Link to='/' className='linkFoot'>Contact</Link>
            <Link to='/' className='linkFoot'>Support</Link>
        </div>
        <div className="footerLinks">
        <h1 className='head'>Enquiry</h1>
            <Link to='/' className='linkFoot'>Customer Care</Link>
            <Link to='/' className='linkFoot'>Feedback</Link>
            <Link to='/' className='linkFoot'>Rate Us</Link>
        </div>
        <div className="footerLinks">
        <h1 className='head'>Social Media</h1>
            <Link to='/' className='linkFoot'>Facebook</Link>
            <Link to='/' className='linkFoot'>Whatsapp</Link>
            <Link to='/' className='linkFoot'>Instagram</Link>
        </div>
    </div>
    )
}

export default Footer;
