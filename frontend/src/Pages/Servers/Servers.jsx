import { Component } from 'react';
import './Servers.css';

import { Box, Grid, Container, Typography } from '@mui/material';

import Search from './Search/Search';
import CardServer from './CardServer/CardServer';

class Servers extends Component {
    render = () => {
        return (
            <section className="servers">
                <Container>
                    <Search />
                    <Box marginTop="1rem">
                        <Grid container>
                            <Grid item xs={6} md={4}>
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