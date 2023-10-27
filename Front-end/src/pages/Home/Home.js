import React, { useState } from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner.js';
import Gallery from '../../components/gallery/Gallery.js';
import Footer from '../../components/footer/Footer.js';
import Navigation from '../../components/navigation/Navigation.js';
import Slider from '../../components/slider/Slider.js';

const Home = () => {
    const [sliderVisible, setSliderVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const showSlider = (itemId) => {
        setSelectedItemId(itemId);
        setSliderVisible(true);
    };

    const returnToHome = () => {
        if (sliderVisible === true) {
            setSliderVisible(false);
        }
    };

    return (
        <div className='home-page'>
            <section className="header">
                <Navigation onClick={returnToHome} />
            </section>
            <section className="main">
                {sliderVisible ? (
                    <Slider itemId={selectedItemId} />
                ) : (
                    <>
                        <Banner />
                        <Gallery onClick={showSlider} />
                    </>
                )}
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
    );
};


export default Home;
