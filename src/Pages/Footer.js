import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: "linear-gradient(to right, #2A5CB5, #D51E49)",
        padding: 20,
        width: "100%",
    },
    text: {
        textAlign: "center",
        fontFamily: "Montserrat",
        color: "white",
    },
}));

function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="body2" component="p" className={classes.text}>
                Copyright {new Date().getFullYear()} SAMAHAN | Developed by
                SAMAHAN Creative Team and SAMAHAN System Development
            </Typography>
            <Typography
                variant="caption"
                component="p"
                className={classes.text}
            >
                Web Design and Development by Stephanie Ignas, Marco Dabon, and
                Janna Wong
            </Typography>
        </div>
    );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
