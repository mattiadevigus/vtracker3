import { Component } from 'react';
import './HomePage.css';

//Mui
import { Button, Typography, Fade } from '@mui/material';

//FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

class HomePage extends Component {
    render = () => {
        return (
            <section className="homepage">
                <Fade in={true}>
                    <Typography variant="h3">LOGO GOES HERE</Typography>
                </Fade>

                <Button variant="contained" size="large">
                    <FontAwesomeIcon icon={faCirclePlay}/>  Avvia
                </Button>
            </section>
        )
    }
}

export default HomePage;