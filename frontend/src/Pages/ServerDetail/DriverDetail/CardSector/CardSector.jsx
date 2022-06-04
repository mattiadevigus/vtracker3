import { Card, CardHeader, CardContent, Avatar, Grid, Typography } from "@mui/material";
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

import './CardSector.css';

const CardSector = () => {
    return (
        <Card>
            <CardHeader title="Your Sectors" avatar={
                <Avatar>
                    <StackedBarChartIcon color="primary" sx={{ transform: "scaleX(-1)", }} />
                </Avatar>} />
            <CardContent>
                <Grid container spacing={2} textAlign="center">
                    <Grid item xs={4}>
                        <Typography variant="span" color="secondary" >Sector One</Typography>
                        <Typography variant="h5" sx={{padding:"5px"}} className="best-sector">12.654</Typography>
                        <Typography variant="span" color="secondary" >-0.234</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="span" color="secondary" >Sector Two</Typography>
                        <Typography variant="h5" className="slow-sector">25.345</Typography>
                        <Typography variant="span" color="secondary" >+0.454</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="span" color="secondary" >Sector Tree</Typography>
                        <Typography variant="h5" className="personal-best-sector">10.345</Typography>
                        <Typography variant="span" color="secondary" >+0.123</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}

export default CardSector;