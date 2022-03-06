import { Component } from 'react';

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
                        variant="filled"
                        type="tel"
                        fullWidth
                        label="Search Server's Tag"
                        value={this.state.value}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    #
                                </InputAdornment>
                            )
                        }}
                    />
                    <FormHelperText sx={{ textAlign: "right", marginBottom: "1rem" }}>
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