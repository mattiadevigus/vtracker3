import { Component } from 'react';
import './Servers.css';

import { Box, Grid, Container } from '@mui/material';

import Search from './Search/Search';
import CardServer from './CardServer/CardServer';

class Servers extends Component {
    
    render = () => {
        return (
            <section className="servers">
                <Container>
                    <Search />
                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <CardServer pro="Pro"/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardServer />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardServer />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardServer />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardServer />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
        )
    }
}

export default Servers