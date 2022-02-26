import { Component } from 'react';
import { Paper, Container, Grid, TableContainer, Typography } from '@mui/material';

import TimeTable from './TimeTable/TimeTable';

import CardDetail from './CardDetail/CardDetail';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

class ServerDetail extends Component {
    render = () => {
        return (
            <section>
                <Container>
                    <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
                        <Grid item xs={6} md={4}>
                            <CardDetail />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <CardDetail />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardDetail />
                        </Grid>
                    </Grid>

                    <Typography variant="h4" textAlign="center" sx={{ marginBottom: "1rem" }}><FormatListNumberedIcon /> Timetable</Typography>

                    <TableContainer component={Paper}>
                        <TimeTable />
                    </TableContainer>

                </Container>
            </section>
        )
    }
}

export default ServerDetail;