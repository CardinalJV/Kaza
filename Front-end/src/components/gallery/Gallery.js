import React from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';
import logements from '../../data/logements.json';

const Gallery = () => {
  return (
    <div className='gallery'>
      <section>
        {logements.map((logement) => (
          <article key={logement.id}>
            <Link to={`/overview/${logement.id}`}>
              <img src={logement.cover} alt={logement.title} />
              <div>{logement.title}</div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Gallery;