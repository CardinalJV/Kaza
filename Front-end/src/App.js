import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Overview from './pages/Overwiew/Overview';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Kaza" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/overview/:id" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
