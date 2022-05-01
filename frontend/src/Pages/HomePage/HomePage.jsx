import { Link as RouterLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div>
            <div className="background-animation"></div>
            <div className="background-animation bg2"></div>
            <div className="background-animation bg3"></div>
            <section className="homepage">
                <img className="logo-2" src="/img/vt_logo.png" alt="vt_logo" />
                <Typography variant="span"></Typography>
                <Button component={RouterLink} variant="contained" size="large" to="/servers">
                    <FontAwesomeIcon icon={faCirclePlay} />  Avvia
                </Button>
            </section>
        </div>
    );
};

export default HomePage;