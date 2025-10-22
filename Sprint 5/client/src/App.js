import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
