import "./Servers.css";
import { Box, Grid, Container, Card } from "@mui/material";
import Search from "./Search/Search";
import CardServer from "./CardServer/CardServer";
import CardEvidenceServer from "./CardEvidenceServer/CardEvidenceServer";

const Servers = () => {
    return (
        <section className="servers">
            <Container>
                <Search />
                <Box>
                    <Grid container spacing={{ xs: 0, md: 1 }}>
                        <Grid item xs={12} md={12}>
                            <CardEvidenceServer />
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