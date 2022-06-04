import { Card, CardHeader, CardContent, Typography } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import InfoIcon from '@mui/icons-material/Info';

const CardDetail = (props) => {
    return (
        <Card>
            <CardHeader color="primary" title={props.title} sx={{ paddingBottom: 0 }} action={
                props.title === "Drivers" ? <PeopleIcon /> : (props.title === "Average Time" ? <WaterfallChartIcon /> : <InfoIcon />)
            } />
            <CardContent>
                <Typography variant="h5" color="secondary">{props.value}</Typography>
            </CardContent>
        </Card>
    );
};


export default CardDetail;