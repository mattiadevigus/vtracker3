import { Card, CardHeader, CardContent, Avatar, Typography } from "@mui/material";

import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const CardPricing = () => {
    return (
        <Card>
            <CardHeader title="Free" avatar={
                <Avatar>
                    <SportsMotorsportsIcon sx={{ transform: "scaleX(-1)", }} />
                </Avatar>} />
            <CardContent>
                <Typography><CheckIcon className="personal-best-time" />1 Server</Typography>
                <Typography><CheckIcon className="personal-best-time" />25 Sessions/Server</Typography>
                <Typography sx={{ marginBottom: "1rem" }}><CloseIcon className="red-time" />Backup of your times</Typography>
                <Typography variant="h4" color="secondary" textAlign="right">23.45 €/Month</Typography>
            </CardContent>
        </Card>
    )
}

export default CardPricing;