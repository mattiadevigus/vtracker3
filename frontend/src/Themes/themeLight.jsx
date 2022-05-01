const themeLight = {
    palette: {
        primary: {
            main: "#7a1212"
        },
        secondary: {
            main: "#7a1212"
        },
        background: {
            default: "#efefef"
        },
        text: {
            primary: "#000000",
            secondary: "#7a7a7a"
        }
    },
    components: {
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    background: "#fff",
                    "&:hover": {
                        backgroundColor: "#fff !important",
                    },
                    "&.Mui-focused": {
                        backgroundColor: "#fff !important",
                    }
                },
            }
        }
    }
}

export default themeLight;