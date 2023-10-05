import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import logoDesktop from '../../images/logo-desktop.png';
import logoMobile from '../../images/logo-mobile.png';

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <img srcSet={`${logoMobile} 145w, ${logoDesktop} 211w`}
          sizes="(max-width: 768px) 145px, 211px"
          src={logoDesktop}
          alt="Logo de Kaza" />
      </div>
      <ul>
        <NavLink to="/" className="navlink" >
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className="navlink">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;