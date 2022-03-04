import { Component } from 'react';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class ServerList extends Component {
    render = () => {
        return (
            <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.09)", textAlign: "left" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>SERVER 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Test
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }
}

export default ServerList;