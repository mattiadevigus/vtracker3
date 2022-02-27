import { Component } from 'react';
import { Paper, Container, Grid, TableContainer, Typography } from '@mui/material';

import TimeTable from './TimeTable/TimeTable';
import Bar from './Stats/Bar';

import CardDetail from './CardDetail/CardDetail';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import BarChartIcon from '@mui/icons-material/BarChart';

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
                </Container>

                <Container>
                    <Typography variant="h4" textAlign="center" sx={{ marginBottom: "1rem" }}><FormatListNumberedIcon /> Timetable</Typography>

                    <TableContainer component={Paper} sx={{ marginBottom: "1rem" }}>
                        <TimeTable />
                    </TableContainer>
                </Container>


                <Container>
                    <Typography variant="h4" textAlign="center" sx={{ marginBottom: "1rem" }}><BarChartIcon /> Stats</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Bar />
                        </Grid>
                    </Grid>

                </Container>
            </section >
        )
    }
}

export default ServerDetail;