import React from 'react';
import './Whatsapp.css';
import wa from '../../Assets/icons/wa.png';
import { Link } from 'react-router-dom';

const Whatsapp = () => {
    return (
        <div className="whatsapp_main">
            <a href="https://wa.me/919325423557" target="_blank">
            <img src={wa} alt="" />
            </a>
        </div>
    )
}

export default Whatsapp;
