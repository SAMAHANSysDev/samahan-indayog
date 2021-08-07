import React from "react";

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to right, #2A5CB5, #D51E49)',
    padding: 20,
    width: '100%'
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: 'center',
    fontFamily: 'Montserrat'
  }
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
        Copyright {(new Date()).getFullYear()} SAMAHAN | Developed by SAMAHAN Creative Team and SAMAHAN System Development
      </Typography>
      <Typography variant="caption" color="textSecondary" component="p" className={classes.text}>
        Web Design and Development by Stephanie Ignas and Marco Dabon
      </Typography>
    </div>
  );
}

// Connect the Header component to get access to the `state` in it's `props`
export default SearchAppBar;
