import { Component } from 'react';

import { Card, CardHeader, CardContent, CardActions, Grid, Collapse, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

class CardServer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    handleExpandClick = (e) => {
        this.setState({ expanded: !this.state.expanded })
    }

    render = () => {
        return (
            <Card>
                <CardHeader title="Server di Test" subheader="#8666" action={
                    <Typography variant="h6" color="primary">{this.props.pro}</Typography>
                } />
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={4}>
                                <img style={{ width: "4rem" }} src="/img/tracks/spa.png" alt="SPA" />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography>Track: Spa</Typography>
                                <Typography color="purple">BestTime: 1:21:293</Typography>
                                <Typography>Driver: 32</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
                <CardActions disableSpacing>
                    <Button href="/servers/98" variant="contained">Open</Button>
                    <ExpandMore
                        expand={this.state.expanded}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon color="secondary" style={{ textAlign: "right" }} />
                    </ExpandMore>
                </CardActions>

            </Card>
        )
    }
}

export default CardServer;