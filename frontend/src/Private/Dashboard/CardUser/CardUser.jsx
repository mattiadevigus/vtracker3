import { Card, CardHeader, Avatar } from "@mui/material";

const CardUser = () => {
    return (
        <Card sx={{ textAlign: "right" }}>
            <CardHeader title="Mattia Devigus" subheader="Free account" avatar={
                <Avatar>M</Avatar>
            } />
        </Card>
    );
};

export default CardUser;