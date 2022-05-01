import { Container, Grid } from "@mui/material";
import CardDriver from "./CardDriver/CardDriver";

const DriverDetail = () => {
    return (
        <section>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CardDriver />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default DriverDetail;