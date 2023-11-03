import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
    const navigate = useNavigate();

    // Redirection vers la page d'accueil
    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <span onClick={handleNavigate} className='to-home'>Retourner sur la page d'accueil</span>
        </div>
    );
};

export default Error404;