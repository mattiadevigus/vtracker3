import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, SpeedDial } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

// Components
import Navbar from "../Partials/Navbar/Navbar";
import HomePage from "../Pages/HomePage/HomePage";
import Servers from "../Pages/Servers/Servers";
import ServersDetail from "../Pages/ServerDetail/ServerDetail";
import DriverDetail from "../Pages/ServerDetail/DriverDetail/DriverDetail";
import Pricing from "../Pages/Pricing/Pricing";

// Private components
import BottomNavbar from "../Partials/BottomNavbar/BottomNavbar";
import Dashboard from "../Private/Dashboard/Dashboard";

// Themes
import styleLight from "../Themes/themeLight";
import styleDark from "../Themes/themeDark";

const themeLight = createTheme(styleLight);
const themeDark = createTheme(styleDark);

const App = () => {
  const [light, setLight] = useState(
    Boolean(localStorage.getItem("light")) == null ?
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? false : true) :
      JSON.parse(localStorage.getItem("light"))
  );

  // Hide navbar on private area
  const [hideNavbar, setHideNavBar] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("/private/")) setHideNavBar(true);
  }, []);

  // Theme change on button click
  const handleTheme = () => { setLight(!light); }
  useEffect(() => {
    localStorage.setItem("light", light);
  }, [light]);

  const location = useLocation();

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <SpeedDial
        ariaLabel="Theme"
        sx={{ display: { xs: "none", md: "block" }, position: "fixed", bottom: 16, right: 16 }}
        icon={<Brightness4Icon />}
        onClick={handleTheme}
      />
      {!hideNavbar ? <Navbar /> : <BottomNavbar />}
      <CssBaseline>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/servers" element={<Servers />} />
              <Route path="/servers/:tag" element={<ServersDetail />} />
              <Route path="/servers/:tag/:drivertag" element={<DriverDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/private/dashboard" element={<Dashboard />} />
            </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;