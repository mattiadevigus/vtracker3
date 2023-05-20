import { useEffect, useState } from "react";
import axios from 'axios';
import { Box, Grid, Container } from "@mui/material";
import Search from "./Search/Search";
import CardServer from "./CardServer/CardServer";
/* import CardEvidenceServer from "./CardEvidenceServer/CardEvidenceServer"; */

import "./Servers.css";

const Servers = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Get all servers
        axios.get("http://localhost:9000/servers")
            .then(res => {
                const servers = res.data;
                let temp = [];
                for (let server of servers) {
                    temp.push(server);
                }

                setRows(temp);
                console.log(temp);
            });
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section id="servers">
            <Container>
                <Search />
                <Box>
                    <Grid container alignItems="stretch" spacing={{ xs: 0, md: 1 }}>
                        {rows.map(row => (
                            <Grid item xs={12} md={4} style={{display: 'flex'}}>
                                <CardServer 
                                    title={row.serverName} 
                                    tag={row.serverId} 
                                    sessionType={row.sessionType}
                                    trackName={row.trackName}
                                    image={row.image}
                                    driversCount={row.driversCount}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Servers;