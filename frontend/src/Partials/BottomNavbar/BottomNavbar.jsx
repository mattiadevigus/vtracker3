import { Component } from 'react';
import './BottomNavbar.css';
import pages from './pages.json'

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
            active: "Profile"
        }
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
                    <BottomNavigationAction label={page.label} value={page.label} icon={<FontAwesomeIcon icon={page.icon} />} />
                ))}

                <BottomNavigationAction label="Logout" value="logout" icon={<FontAwesomeIcon icon={"fa-arrow-right-from-bracket"} />} />

            </BottomNavigation>
        )
    }
}

export default BottomNavbar;