import React from 'react';
import Banner from '../components/banner/Banner.js';
import Gallery from '../components/gallery/Gallery.js';
import Footer from '../components/footer/Footer.js';
import Navigation from '../components/navigation/Navigation.js';

const Home = () => {
    return (

        <div>
            <Navigation />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;