import { Component } from 'react';

import { Card, CardHeader, Avatar } from '@mui/material';

class CardUser extends Component {
    render = () => {
        return (
            <Card sx={{ textAlign: "right" }}>
                <CardHeader title="Mattia Devigus" subheader="Free account" avatar={
                    <Avatar>M</Avatar>
                } />
            </Card>
        )
    }
}

export default CardUser;