import React from 'react';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation.js';
import Slider from '../../components/slider/Slider';
import './Overview.css';
import { useParams } from 'react-router-dom';


const Overview = () => {
    const { id } = useParams();
    return (
        <div className='overview'>
            <div className="header">
            <Navigation />
            </div>
            <div className="body">
                <Slider id={id}/>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Overview;