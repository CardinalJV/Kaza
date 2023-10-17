import React from 'react';
import Error404 from '../../components/error404/Error404';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <Navigation />
            <Error404 />
            <Footer />
        </div>
    );
};

export default NotFound;