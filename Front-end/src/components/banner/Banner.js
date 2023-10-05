import React from 'react';
import bannerDesktop from '../../images/banner2-desktop.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerDesktop} alt="Falaises rocheuses" />
            <div className="overlay">Chez vous, partout et ailleurs</div>
        </div>
    );
};

export default Banner;