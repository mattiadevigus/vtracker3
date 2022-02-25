import { Component } from 'react';

import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

class CardServer extends Component {
    render = () => {
        return (
            <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.09)" }}>
                <CardHeader title="Server di Test" subheader="25/02/2022" />
                <CardMedia sx={{ width: "10rem", padding: "1rem", margin: "0 auto" }} component="img" image="https://img.guildedcdn.com/asset/GameIcons/ACCompetizione-lg.png" />
                <CardContent>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        )
    }
}

export default CardServer;