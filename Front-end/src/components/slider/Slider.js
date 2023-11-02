import React, { useState, useEffect } from 'react';
import Collapse from '../collapse/Collapse.js';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import logements from '../../data/logements.json';
import { useNavigate } from 'react-router-dom';

const Slider = ({ id }) => {
    const navigate = useNavigate();
    const [indexPictures, setIndexPictures] = useState(0);

    const logement = logements.find((item) => item.id === id);

    useEffect(() => {
        if (!logement) {
          navigate("*");
        }
      }, [id, navigate, logement]);
    
      if (!logement) {
        return null; 
      };

        const renderTags = (tags) => {
            return tags.map((tag, index) => (
                <li className='tags-item' key={index}>{tag}</li>
            ));
        };

        const renderEquipments = (equipments) => {
            return equipments.map((equipment, index) => (
                <li key={index} style={{ listStyleType: 'none' }}>
                    {equipment}
                </li>
            ));
        };

        const renderStars = (logement) => {
            const starIcons = Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={index < logement.rating ? 'star-active' : 'star-off'}
                />
            ));
            return (
                <div>
                    {starIcons}
                </div>
            );
        };

        const nextImg = () => {
            if (logement.pictures.length - 1 <= indexPictures) {
                setIndexPictures(0)
            } else {
                setIndexPictures(indexPictures + 1)
            }
        };

        const prevImg = () => {
            if (indexPictures < 0) {
                setIndexPictures(logement.pictures.length - 1)
            } else {
                setIndexPictures(indexPictures - 1)
            }
        };

        const arrowShowed = () => {
            if (logement.pictures.length - 1 > 1) {
                return <span className='arrow'>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={prevImg} className='to-left' />
                    <FontAwesomeIcon icon={faChevronRight} onClick={nextImg} className='to-right' />
                </span>
            }
        };

        return (
            <div className='slider'>
                <div className="img-container">
                    <img src={logement.pictures[indexPictures]} alt={logement.title} />
                    {arrowShowed()}
                </div>

                <div className="about">
                    <h2>
                        {logement.title}
                    </h2>
                    <p className='location'>{logement.location}</p>
                </div>

                <div className="host">
                    <img src={logement.host.picture} alt={logement.host.name}></img>
                    <p>{logement.host.name}</p>
                </div>

                <div className='tags'>
                    {renderTags(logement.tags)}
                </div>

                <div className="ratings">
                    {renderStars(logement)}
                </div>

                <div className="collapse">
                    <span>
                        <Collapse title='Équipements' text={renderEquipments(logement.equipments)} />
                    </span>
                    <span >
                        <Collapse title='Description' text={logement.description} />
                    </span>
                </div>
            </div>
        );
    };

export default Slider;



