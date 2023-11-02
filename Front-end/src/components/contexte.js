// LogementsContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const LogementsContext = createContext();

export const useLogements = () => {
  return useContext(LogementsContext);
};

export const LogementsProvider = ({ children }) => {
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

  return (
    <LogementsContext.Provider value={logements}>
      {children}
    </LogementsContext.Provider>
  );
};
