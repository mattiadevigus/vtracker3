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

const CardEvidenceServer = (props) => {
    const [expanded, setExpanded] = useState(true);
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
                    <Grid container paddingLeft="5rem" paddingRight="5rem">
                        <Grid item xs={12} md={4} alignSelf="center">
                            <Typography variant="h5">Track: Spa</Typography>
                            <Typography variant="h5">BestTime: 1:21:293</Typography>
                            <Typography variant="h5">Driver: 32</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} alignSelf="center" textAlign="center">
                            <Typography variant="h1">R</Typography>
                            <Typography variant="h5" color="secondary">Race</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} alignSelf="center" textAlign="right">
                            <img style={{ width: "6rem" }} src="/img/tracks/spa.png" alt="SPA" />
                            <Typography variant="h4">SPA</Typography>
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

export default CardEvidenceServer;