import { Component } from 'react';
import './Search.css';

import { Box, FormControl, TextField, InputAdornment, FormHelperText, Link } from '@mui/material';


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: "#"
        }
    }

    render = () => {
        return (
            <Box component="form">
                <FormControl fullWidth>
                    <TextField
                        className="search"
                        variant="filled"
                        type="tel"
                        fullWidth
                        label="Search Server's Tag"
                        color='primary'
                        value={this.state.value}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    #
                                </InputAdornment>
                            )
                        }}
                    />
                    <FormHelperText sx={{ textAlign: "right" }}>
                        <Link underline="none" href="/help">
                            Need help?
                        </Link>
                    </FormHelperText>
                </FormControl>
            </Box>
        )
    }
}

export default Search;