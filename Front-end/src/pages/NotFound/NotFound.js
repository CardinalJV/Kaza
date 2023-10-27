import React from 'react';
import Error404 from '../../components/error404/Error404';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <section className="header">
                <Navigation />
            </section>
            <section className="main">
                <Error404 />
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
    );
};

export default NotFound;