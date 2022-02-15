import { Component } from 'react';
import './HomePage.css';

//Mui
import { Button, Typography, Fade } from '@mui/material';

class HomePage extends Component {
    render = () => {
        return (
            <section className="homepage">
                <Fade in={true}>
                    <Typography variant="h3">LOGO GOES HERE</Typography>
                </Fade>

                <Button variant="contained" size="large">
                    Start
                </Button>
            </section>
        )
    }
}

export default HomePage;