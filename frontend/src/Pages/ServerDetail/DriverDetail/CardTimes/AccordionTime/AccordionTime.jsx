import { Grid, Accordion, AccordionSummary, AccordionDetails, Button, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpeedIcon from '@mui/icons-material/Speed';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';

import './AccordionTime.css';

const AccordionTime = (props) => {
    return (
        <Accordion className={props.type === "best" ? "best-lap" : (props.type === "slow" ? "red-lap" : "")}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
            >
                <Typography sx={{ width: '50%', flexShrink: 0 }}>
                    Lap *
                </Typography>
                <Typography color="secondary">1:32:355</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        {props.type === "best" ? <Typography className="best-time"><AccessTimeIcon /> This is your best lap</Typography> : (props.type === "slow") ? <Typography className="red-time"><AccessTimeIcon /> This lap isn't valid</Typography> : <Typography><AccessTimeIcon /> This lap is ... slower than you best</Typography>}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography><SpeedIcon /> Your average speed in this lap: 124 Km/h</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography><Filter1Icon /> 31.345</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="center">
                        <Typography><Filter2Icon /> 31.345</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                        <Typography><Filter3Icon /> 31.345</Typography>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion >
    );
}

export default AccordionTime;