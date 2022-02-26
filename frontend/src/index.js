import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Mui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

// Import Componenti
import Navbar from './Partials/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Servers from './Pages/Servers/Servers';
import ServersDetail from './Pages/ServerDetail/ServerDetail';

// Temi
import styleLight from './Themes/themeLight.json';
import styleDark from './Themes/themeDark.json';

const themeLight = createTheme(styleLight);
const themeDark = createTheme(styleDark);

const light = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? false : true;

ReactDOM.render(
  <ThemeProvider theme={light ? themeLight : themeDark}>
    <Navbar />
    <CssBaseline>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/servers/:tag" element={<ServersDetail />} />
        </Routes>
      </Router>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
