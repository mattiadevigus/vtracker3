import { Component } from 'react';
import './BottomNavbar.css';
import pages from './pages.json'
import { Link as RouterLink } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faUser, faArrowRightFromBracket);

class BottomNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: window.location.href.split("/")[5] != null ? window.location.href.split("/")[5] : "dashboard"
        }
    }

    componentDidMount = () => {
        console.log(window.location.href.split("/")[4])
    }

    handleLabel = (event, value) => {
        this.setState({ active: value });
    }

    render = () => {
        return (
            <BottomNavigation
                className="bottomnavbar"
                value={this.state.active}
                onChange={this.handleLabel}
            >
                {pages.map((page) => (
                    <BottomNavigationAction component={RouterLink} to={page.link} label={page.label} value={page.label} icon={<FontAwesomeIcon icon={page.icon} />} />
                ))}

                <BottomNavigationAction component={RouterLink} to="/private/logout" label="Logout" value="logout" icon={<FontAwesomeIcon icon={"fa-arrow-right-from-bracket"}  />} />
            </BottomNavigation>
        )
    }
}

export default BottomNavbar;