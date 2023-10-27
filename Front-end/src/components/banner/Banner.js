import React, { useEffect, useState } from 'react';
import bannerDesktop from '../../images/banner-desktop.png';
import bannerBis from '../../images/banner-bis.png';
import './Banner.css';

const Banner = () => {
    const [img, setImg] = useState(<img src={bannerDesktop} alt="Falaises rocheuses" />);
    const [text, setText] = useState('Chez vous, partout et ailleurs');

    const switchImg = (newImg) => {
        setImg(newImg)
    };

    useEffect(() => {
        if(window.location.pathname === '/about') {
            switchImg(<img src={bannerBis} alt="Paysage montagneux" />);
            setText('');
        }
    }, []);

    return (
        <div className="banner">
            {img} 
            <div className="overlay">{text}</div>
        </div>
    );
};

export default Banner;



