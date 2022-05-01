import {Link as RouterLink} from "react-router-dom";
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./TimeTable.css";

const TimeTable = () => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Driver</TableCell>
                    <TableCell>S1</TableCell>
                    <TableCell>S2</TableCell>
                    <TableCell>S3</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Gap</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Mattia Devigus</TableCell>
                    <TableCell>18.234</TableCell>
                    <TableCell>18.234</TableCell>
                    <TableCell>18.234</TableCell>
                    <TableCell>1:23,234</TableCell>
                    <TableCell>+0.7878</TableCell>
                    <TableCell><Button color="secondary" size="small" component={RouterLink} to="/servers/7878/1"><AssignmentIcon /></Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableBody>
            
        </Table>
    );
};

export default TimeTable;