import "./Servers.css";
import { Box, Grid, Container } from "@mui/material";
import Search from "./Search/Search";
import CardServer from "./CardServer/CardServer";

const Servers = () => {
    return (
        <section className="servers">
            <Container>
                <Search />
                <Box>
                    <Grid container spacing={{ xs: 0, md: 1 }}>
                        <Grid item xs={12} md={12}>
                            <CardServer />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardServer pro={true} />
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
                        <Grid item xs={12} md={4}>
                            <CardServer pro="Pro" />
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
                        <Grid item xs={12} md={4}>
                            <CardServer pro="Pro" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardServer pro="Pro" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Servers;