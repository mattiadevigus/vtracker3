import { Card, CardHeader, CardContent, Button } from "@mui/material";

const CardDownload = () => {
    return (
        <Card sx={{ textAlign: "center" }}>
            <CardHeader title="Download Server Tracker" />
            <CardContent>
                <Button variant="contained">Download</Button>
            </CardContent>
        </Card>
    );
};

export default CardDownload;