import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="navlink">
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    );
};

export default Error404;