import React from 'react';
import logo from '../../images/logo-mobile.png';
import './Footer.css';

const Footer = () => {
    
    return (
        <div className='footer'>
            <img src={logo} alt="Logo de Kaza" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;