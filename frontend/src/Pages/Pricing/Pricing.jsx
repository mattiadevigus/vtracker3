import { Box, Grid, Container } from "@mui/material";
import CardPricing from "./CardPricing/CardPricing";

const Pricing = () => {
    return (
        <Box display="flex" alignItems="center" minHeight="100vh" className="fix-mobile">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <CardPricing />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CardPricing />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <CardPricing />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Pricing;