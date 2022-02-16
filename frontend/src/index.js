import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Componenti
import Navbar from './Partials/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);