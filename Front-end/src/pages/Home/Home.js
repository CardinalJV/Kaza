import React from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner.js';
import Gallery from '../../components/gallery/Gallery.js';
import Footer from '../../components/footer/Footer.js';
import Navigation from '../../components/navigation/Navigation.js';

const Home = () => {

    return (
        <div className='home-page'>
            <section className="header">
                <Navigation />
            </section>
            <section className="main">
                <Banner />
                <Gallery />
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
    );
};

export default Home;