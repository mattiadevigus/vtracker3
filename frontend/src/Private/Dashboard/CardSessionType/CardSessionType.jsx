import { Component } from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';

import ChartDoughnut from './ChartDoughnut/ChartDoughnut';

class CardSessionType extends Component {
    render = () => {
        return(
            <Card>
                <CardHeader title="Sessions Type"/>
                <CardContent>
                <ChartDoughnut />
                </CardContent>
            </Card>
        )
    }
}

export default CardSessionType