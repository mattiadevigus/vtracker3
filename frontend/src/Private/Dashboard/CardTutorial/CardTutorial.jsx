import { Card, CardHeader, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

const CardTutorial = () => {
    return (
        <Card >
            <CardHeader title="Connect to your ACC server" />
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemAvatar><Avatar>1</Avatar></ListItemAvatar>
                        <ListItemText primary="Download Server Tracker"></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar><Avatar>2</Avatar></ListItemAvatar>
                        <ListItemText primary="Install and configure the Tracker"></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar><Avatar>3</Avatar></ListItemAvatar>
                        <ListItemText primary="Record times on the server"></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar><Avatar>4</Avatar></ListItemAvatar>
                        <ListItemText primary="Show the results in Vtracker Website"></ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default CardTutorial;