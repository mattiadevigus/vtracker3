import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, CardHeader, CardContent, CardActions, Grid, Collapse, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardServer = (props) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card>
            <CardHeader title="Server di Test" className="remove-subheader" subheader="#8666" action={
                <Typography variant="h5" color="primary">{props.pro ? <StarHalfIcon fontSize="large" /> : ""}</Typography>
            } />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                <Button component={RouterLink} to="/servers/82" variant="contained">Open</Button>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon color="secondary" style={{ textAlign: "right" }} />
                </ExpandMore>
            </CardActions>
        </Card>
    );
};

export default CardServer;