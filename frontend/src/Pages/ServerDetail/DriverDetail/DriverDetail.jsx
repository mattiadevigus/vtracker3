import { Container, Grid } from "@mui/material";
import CardDriver from "./CardDriver/CardDriver";
import CardTimes from "./CardTimes/CardTimes";
import CardSector from "./CardSector/CardSector";

const DriverDetail = () => {
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