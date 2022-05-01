import { Box, TextField, InputAdornment, FormHelperText, Link } from "@mui/material";
import { useState } from "react";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <Box>
            <TextField
                variant="filled"
                type="tel"
                fullWidth
                label="Search Tag"
                value={searchText}
                onChange={handleSearch}
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
        </Box>
    )
}

export default Search;