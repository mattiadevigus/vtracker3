import { Component } from 'react';

import { Card, CardHeader, CardContent, CardActions, Collapse, Typography, Button, IconButton } from '@mui/material';
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
            <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.09)" }}>
                <CardHeader title="Server di Test" subheader="#8666" action={
                    <Typography variant="h6" color="primary">{this.props.pro}</Typography>
                } />
                <CardActions disableSpacing>
                    <Button href="/servers/98" variant="contained">Open</Button>
                    <ExpandMore
                        expand={this.state.expanded}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon style={{ textAlign: "right", color: "white" }} />
                    </ExpandMore>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>Track: Spa</Typography>
                        <Typography color="purple">BestTime: 1:21:293 (Drivername)</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

export default CardServer;