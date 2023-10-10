import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        const fetchLogements = async () => {
            try {
                const response = await fetch('./logements.json');
                if (!response.ok) {
                    throw new Error(`Erreur de réseau : ${response.status}`);
                }
                const data = await response.json();
                console.log('Données récupérées avec succès :', data);
                setLogements(data);  // Mettez à jour l'état avec les données du JSON
            } catch (error) {
                console.error('Une erreur s\'est produite :', error.message);
            }
        };
        fetchLogements();
    }, []);

    return (
        <div className='gallery'>
            <section>
            {logements.map((logement) => (
                    <article key={logement.id}>
                        <img src={logement.pictures[0]} alt="" />
                        <div>{logement.title}</div>
                    </article>
                ))}
            </section>
        </div>
    );
};



export default Gallery;
