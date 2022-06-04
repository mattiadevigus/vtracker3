import { Container, Grid } from "@mui/material";
import CardDriver from "./CardDriver/CardDriver";
import CardTimes from "./CardTimes/CardTimes";
import CardSector from "./CardSector/CardSector";
import CardLine from "./CardLine/CardLine";
import { useEffect } from "react";

const DriverDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <CardDriver />
                            </Grid>
                            <Grid item xs={12}>
                                <CardSector />
                            </Grid>
                            <Grid item xs={12}>
                                <CardLine />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid item xs={12}>
                            <CardTimes />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default DriverDetail;