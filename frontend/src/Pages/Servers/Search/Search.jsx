import { Component } from 'react';
import './Search.css';

import { TextField, InputAdornment, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

class Search extends Component {
    render = () => {
        return (
            <TextField
                label="Search..."
                variant="standard"
                InputProps={{
                    style: {
                        color: "white",
                        borderColor: "white"
                    },
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        )
    }
}

export default Search;