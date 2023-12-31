import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Collapse.css';

const Collapse = (props) => {
    const { title, text } = props;
    const [isTextVisible, setIsTextVisible] = useState(false);

    // Gère l'affichage du contenu caché des collapse 
    const toggleText = () => {
        setIsTextVisible(!isTextVisible);
    };

    return (
        
            <div className='dropdown' onClick={toggleText}>
                <div id="content-show">
                <h2>
                    {title}
                </h2>
                <span>
                    <FontAwesomeIcon icon={faChevronDown} className={isTextVisible ? 'to-top' : 'to-bottom'}  />
                </span>
                </div>

            <div id='content-hidden' className={isTextVisible ? 'show' : 'ofshow'}>
                <p>
                   {text}
                </p>
            </div>
        </div>
        
    );
};

export default Collapse;

