import { Component } from 'react';
import './HomePage.css';

//Mui
import { Button, Typography } from '@mui/material';

//FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

class HomePage extends Component {
    render = () => {
        return (
            <div>
                <div className="background-animation"></div>
                <div className="background-animation bg2"></div>
                <div className="background-animation bg3"></div>
                <section className="homepage">

                    <img src="/img/vt_logo.png" alt='vt_logo' />
                    <Typography variant="span">"Frase che cambia ogni secondo"</Typography>

                    <Button variant="contained" size="large">
                        <FontAwesomeIcon icon={faCirclePlay} />  Avvia
                    </Button>
                </section>
            </div>
        )
    }
}

export default HomePage;