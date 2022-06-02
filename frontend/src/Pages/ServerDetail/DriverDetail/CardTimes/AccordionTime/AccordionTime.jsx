import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <Typography typography="h1" textAlign="center">WIP</Typography>
            </AccordionDetails>
        </Accordion >
    );
}

export default AccordionTime;