import { Component } from 'react';

import { Box, Container, Grid, Card, CardHeader, CardContent, Typography } from '@mui/material';

import History from './History/History';
import ServerList from './ServerList/ServerList';

class Dashboard extends Component {
    render = () => {
        return (
            <Box>
                <Grid container spacing={2} sx={{ padding: "1rem", textAlign: "center" }}>
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardHeader title="Welcome Back Mattia" />
                            <CardContent>
                                <ServerList />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardHeader title="Latest Activities" />
                            <CardContent>
                                <History />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Dashboard;