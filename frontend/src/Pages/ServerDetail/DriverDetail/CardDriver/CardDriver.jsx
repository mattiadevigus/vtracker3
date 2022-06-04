import { useState } from "react";
import { Card, CardHeader, CardContent, Avatar, Grid, Typography } from "@mui/material";
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
/* import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksTreeIcon from '@mui/icons-material/Looks3';
 */
const CardDriver = () => {

    const [gap] = useState(1234);

    return (
        <Card>
            <CardHeader title="Mattia Devigus" subheader="Ferrari" avatar={
                <Avatar>
                    <SportsMotorsportsIcon color="primary" sx={{ transform: "scaleX(-1)", }} />
                </Avatar>
            } action={
                <img className="img-2" src="/img/cars/ferrari.png" alt="vt_logo" />
            } />
            <CardContent>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <Typography color="secondary" variant="h5">YOUR TIME:</Typography>
                        <Typography variant="h4" className="best-time">1:24:323</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color="secondary" variant="h5" textAlign="right">GAP</Typography>
                        <Typography variant="h4" className="red-time" textAlign="right">{"+" + gap/1000}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CardDriver;