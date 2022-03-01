import { Component } from 'react';
import './BottomNavbar.css';
import pages from './pages.json'

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faServer, faUsers, faAddressCard } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faServer, faUsers, faAddressCard);

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
                    <BottomNavigationAction label={page.label} value={page.label} icon={page.icon} />
                ))}
            </BottomNavigation>
        )
    }
}

export default BottomNavbar;