const themeDark = {
    palette: {
        primary: {
            main: "#7a1212"
        },
        secondary: {
            main: "#7a7a7a"
        },
        background: {
            default: "#17171d",
            paper: "#26262e"
        },
        text: {
            primary: "#dedede",
            secondary: "#7a7a7a"
        }
    },
    components: {
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    background: "#26262e",
                    "&:hover": {
                        backgroundColor: "#26262e !important",
                    },
                    "&.Mui-focused": {
                        backgroundColor: "#26262e !important",
                    }
                },
            }
        }
    }
}

export default themeDark;