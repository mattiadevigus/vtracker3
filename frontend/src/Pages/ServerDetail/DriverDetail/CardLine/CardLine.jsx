import { Card, CardHeader, CardContent, Avatar, Grid } from "@mui/material";
import Line from "./Stats/Line";
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

const CardLine = () => {
    return (
        <Card sx={{maxHeight: "500px"}}>
            <CardHeader title="Sector comparison" subheader="Driver 1 vs Driver 2" avatar={
                <Avatar>
                    <SportsMotorsportsIcon color="primary" sx={{ transform: "scaleX(-1)", }} />
                </Avatar>
            } />
            <CardContent>
                <Grid container alignItems="center">
                    <Grid item xs={12}>
                        <Line />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CardLine