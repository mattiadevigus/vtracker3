import "./Dashboard.css";

import { Box, Grid, Card, CardHeader, CardContent, Typography, LinearProgress, ListItem, ListItemText, Switch } from "@mui/material";

import CardUser from "./CardUser/CardUser";
import CardDownload from "./CardDownload/CardDownload";
import CardTutorial from "./CardTutorial/CardTutorial";
import CardSessionType from "./CardSessionType/CardSessionType";
import CardHistory from "./CardHistory/CardHistory";

const Dashboard = () => {
    return (
        <Box>
            <Grid container spacing={2} sx={{ padding: "3rem" }}>
                <Grid item xs={12} md={4} lg={3}>
                    <CardUser />
                    <CardTutorial />
                    <CardDownload />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Card>
                        <CardHeader title="Session used" />
                        <CardContent>
                            <LinearProgress variant="determinate" value={73} />
                            <br />
                            <Typography variant="h6">73/200</Typography>
                        </CardContent>
                    </Card>
                    <CardSessionType />
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Card>
                        <CardHeader title="Server used" />
                        <CardContent>
                            <LinearProgress variant="determinate" value={40} />
                            <br />
                            <Typography variant="h6" textAlign="right">2/5</Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader title="Show Server Vtracker App" />
                        <CardContent>
                            <ListItem>
                                <ListItemText primary="Server 1" />
                                <Switch />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Server 1" />
                                <Switch />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Server 1" />
                                <Switch />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Server 1" />
                                <Switch />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Server 1" />
                                <Switch />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Server 1" />
                                <Switch />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Server 1" />
                                <Switch />
                            </ListItem>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Card sx={{ textAlign: "center" }}>
                        <CardHeader title="Latest Activities" />
                        <CardContent>
                            <CardHistory />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;