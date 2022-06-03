import { useState } from "react";
import { Card, CardHeader, CardContent, Avatar, Grid, } from "@mui/material";
import AccordionTime from "./AccordionTime/AccordionTime";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const CardTimes = () => {
    return (
        <Card>
            <CardHeader title="Your Laps" avatar={
                <Avatar>
                    <FormatListNumberedIcon color="primary" sx={{ transform: "scaleX(-1)", }} />
                </Avatar>} />
            <CardContent sx={{maxHeight: "762px", overflowY: "auto"}}>
                <AccordionTime type="best"/>
                <AccordionTime type="personal"/>
                <AccordionTime/>
                <AccordionTime/>
                <AccordionTime type="slow"/>
                <AccordionTime/>
                <AccordionTime/>
                <AccordionTime type="slow"/>
                <AccordionTime/>
                <AccordionTime/>
                <AccordionTime/>
                <AccordionTime/>
                <AccordionTime/>
                <AccordionTime type="slow"/>
                <AccordionTime/>
                <AccordionTime/>
                <AccordionTime/>
            </CardContent>
        </Card>
    )
}

export default CardTimes;