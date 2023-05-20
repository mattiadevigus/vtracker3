import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, CardHeader, CardContent, CardActions, Grid, Collapse, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <Card style={{display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'column'}}>
            <CardHeader title={props.title} className="remove-subheader" subheader={"#" + props.tag} action={
                <Typography variant="h5" color="secondary">{props.sessionType}</Typography>
            } />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4} alignSelf="center">
                            <img style={{ width: "4rem" }} src={props.image} alt={props.track} />
                        </Grid>
                        <Grid item xs={8} alignSelf="center">
                            <Typography>Track: {props.trackName}</Typography>
                            <Typography>BestTime: {props.time}</Typography>
                            <Typography>Driver: {props.driversCount}</Typography>
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