import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Mui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, SpeedDial } from "@mui/material";

import Brightness4Icon from '@mui/icons-material/Brightness4';

// Import Componenti
import Navbar from './Partials/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Servers from './Pages/Servers/Servers';
import ServersDetail from './Pages/ServerDetail/ServerDetail';

// Import Componenti Privati
import BottomNavbar from './Partials/BottomNavbar/BottomNavbar';
import Dashboard from './Private/Dashboard/Dashboard';

// Temi
import styleLight from './Themes/themeLight';
import styleDark from './Themes/themeDark';

const themeLight = createTheme(styleLight);
const themeDark = createTheme(styleDark);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      light: Boolean(localStorage.getItem("light")) == null ?
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? false : true) :
        JSON.parse(localStorage.getItem("light")),
      hideNavbar: false
    }
  }

  componentDidMount = () => {
    if (window.location.href.includes("/private/")) this.setState({ hideNavbar: true })
  }

  handleTheme = () => {
    this.setState({ light: !this.state.light }, () => {
      localStorage.setItem("light", this.state.light);
    });
  }

  render = () => {
    return (
      <ThemeProvider theme={this.state.light ? themeLight : themeDark}>
        <SpeedDial
          ariaLabel="Theme"
          sx={{ display: { xs: "none", md: "block" }, position: 'fixed', bottom: 16, right: 16 }}
          icon={<Brightness4Icon />}
          onClick={this.handleTheme}
        />
        <CssBaseline>
          <Router>
            {!this.state.hideNavbar ? <Navbar /> : <BottomNavbar />}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servers" element={<Servers />} />
              <Route path="/servers/:tag" element={<ServersDetail />} />
              <Route path="/private/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
