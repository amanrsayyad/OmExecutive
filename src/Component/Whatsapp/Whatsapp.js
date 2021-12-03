import React from 'react';
import './Whatsapp.css';
import whatsapp3 from '../../Assets/icons/whatsapp3.png';
import { Link } from 'react-router-dom';

const Whatsapp = () => {
    return (
        <div className="whatsapp_main">
            <a href="https://wa.me/" target="_blank">
            <img src={whatsapp3} alt="" />
            </a>
        </div>
    )
}

export default Whatsapp;
