import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./BottomNavbar.css";
import pages from "./pages.json";

library.add(faHome, faUser, faArrowRightFromBracket);

const BottomNavbar = () => {
    const [active, setActive] = useState(window.location.href.split("/")[5] != null ? window.location.href.split("/")[5] : "dashboard")
    const handleLabel = (event, value) => {
        setActive(value);
    }

    return (
        <BottomNavigation
            className="bottomnavbar"
            value={active}
            onChange={handleLabel}
        >
            {pages.map((page) => (
                <BottomNavigationAction component={RouterLink} to={page.link} label={page.label} value={page.label} icon={<FontAwesomeIcon icon={page.icon} />} />
            ))}
            <BottomNavigationAction component={RouterLink} to="/private/logout" label="Logout" value="logout" icon={<FontAwesomeIcon icon={"fa-arrow-right-from-bracket"} />} />
        </BottomNavigation>
    )
}

export default BottomNavbar;