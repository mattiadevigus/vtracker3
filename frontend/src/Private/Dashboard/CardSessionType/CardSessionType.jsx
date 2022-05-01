import { Card, CardHeader, CardContent } from "@mui/material";
import ChartDoughnut from "./ChartDoughnut/ChartDoughnut";

const CardSessionType = () => {
    return (
        <Card>
            <CardHeader title="Sessions Type" />
            <CardContent>
                <ChartDoughnut />
            </CardContent>
        </Card>
    );
};

export default CardSessionType;