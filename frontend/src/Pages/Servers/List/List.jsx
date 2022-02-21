import { Component } from 'react';
import './List.css';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class List extends Component {
    render = () => {
        return (
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className="listtitle">Servername</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lel</Typography>
                </AccordionDetails>
            </Accordion>
        )
    }
}

export default List;