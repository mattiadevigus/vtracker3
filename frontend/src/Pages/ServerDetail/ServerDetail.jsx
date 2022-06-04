import { Paper, Container, Grid, TableContainer, Typography } from "@mui/material";
import TimeTable from "./TimeTable/TimeTable";
import Bar from "./Stats/Bar";
import CardDetail from "./CardDetail/CardDetail";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useEffect } from "react";

const ServerDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <Container sx={{ marginBottom: "2rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <CardDetail title="Drivers" value="32"/>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CardDetail title="Average Time" value="1:32:345"/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardDetail title="Type" value="Race"/>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ marginBottom: "4rem" }}>
                <Typography variant="h4" textAlign="center" sx={{ marginBottom: "1rem" }}><FormatListNumberedIcon /> Timetable</Typography>
                <TableContainer component={Paper} sx={{ marginBottom: "2rem" }}>
                    <TimeTable />
                </TableContainer>
            </Container>
            <Container sx={{ marginBottom: "2rem" }}>
                <Typography variant="h4" textAlign="center" sx={{ marginBottom: "1rem" }}><BarChartIcon /> Gap between first</Typography>
                <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
                    <Grid item xs={12} md={5} alignSelf="center">
                        <Grid container textAlign="center">
                            <Grid item xs={6} md={12}>
                                <Typography variant="h5">Mattia Devigus</Typography>
                            </Grid>
                            <Grid item xs={6} md={12}>
                                <Typography variant="h5" color="primary">1:23:345</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} alignSelf="center" textAlign="center">
                        <AddIcon color="primary" fontSize="large" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Bar />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default ServerDetail;