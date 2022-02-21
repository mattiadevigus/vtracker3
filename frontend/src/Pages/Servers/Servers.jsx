import { Component } from 'react';
import './Servers.css';

import { Container, Typography } from '@mui/material';

import Search from './Search/Search';
import List from './List/List';

class Servers extends Component {
    render = () => {
        return (
            <section className="servers">
                <Container>
                    <div className="servers-header">
                        <img className="logo-1" src="/img/vt_logo.png" alt='vt_logo' />
                        <Typography variant="h6">Server List</Typography>
                        <Search />
                    </div>

                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </Container>
            </section>
        )
    }
}

export default Servers