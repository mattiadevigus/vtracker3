import { Paper, Container, Grid, TableContainer, Typography } from "@mui/material";
import TimeTable from "./TimeTable/TimeTable";
import Bar from "./Stats/Bar";
import CardDetail from "./CardDetail/CardDetail";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from "@mui/icons-material/BarChart";

const ServerDetail = () => {
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

                <TableContainer component={Paper} sx={{ marginBottom: "2rem" }}>
                    <TimeTable />
                </TableContainer>
            </Container>
            <Container>
                <Typography variant="h4" textAlign="center" sx={{ marginBottom: "1rem" }}><BarChartIcon /> Gap between first</Typography>
                <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
                    <Grid item xs={12} md={5} alignSelf="center" textAlign="center">
                        <Typography variant="h5">Mattia Devigus</Typography>
                        <Typography variant="h5" color="primary">1:23:345</Typography>
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