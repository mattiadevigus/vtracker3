import { Component } from 'react';

import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

class CardDetail extends Component {
    render = () => {
        return (
            <Card>
                <CardHeader color="primary" title="Total Drivers" sx={{ paddingBottom: 0 }} action={
                    <PeopleIcon />
                } />
                <CardContent>
                    <Typography variant="h5">20</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default CardDetail