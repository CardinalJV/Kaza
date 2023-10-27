import React, { useEffect, useState } from 'react';
import './Gallery.css';

export function useLogements() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        const fetchLogements = async () => {
            try {
                const response = await fetch('./logements.json');
                if (!response.ok) {
                    throw new Error(`Erreur de réseau : ${response.status}`);
                }
                const data = await response.json();
                setLogements(data);
            } catch (error) {
                console.error('Une erreur s\'est produite :', error.message);
            }
        };
        fetchLogements();
    }, []);

    return logements;
}

const GalleryItem = ({ logement, onClick }) => (
    <article key={logement.id} onClick={() => onClick(logement.id)}>
        <img src={logement.cover} alt="" />
        <div>{logement.title}</div>
    </article>
);

const Gallery = (props) => {
    const logements = useLogements();
    const { onClick } = props;

    return (
        <div className='gallery'>
            <section>
                {logements.map((logement) => (
                    <GalleryItem key={logement.id} logement={logement} onClick={onClick} />
                ))}
            </section>
        </div>
    );
};


export default Gallery;
