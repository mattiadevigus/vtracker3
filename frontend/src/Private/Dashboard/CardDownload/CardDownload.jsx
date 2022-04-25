import React, { Component } from 'react';

import { Card, CardHeader, CardContent, Button } from '@mui/material';

class CardDownload extends Component {
    render = () => {
        return (
            <Card sx={{ textAlign: "center" }}>
                <CardHeader title="Download Server Tracker" />
                <CardContent>
                    <Button variant="contained">Download</Button>
                </CardContent>
            </Card>
        )
    }
}

export default CardDownload;