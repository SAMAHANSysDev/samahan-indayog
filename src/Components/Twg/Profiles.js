import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

function Profiles({img, alt, name,position}) {

    const useStyles = makeStyles((theme) =>({
        root: {
            maxWidth: 345,
        },

        theme: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
    }));

    const card = {
        // height:235.77,
        // width:235.77,
        borderRadius: 26,
    };

    const classes = useStyles();
    
    return (
        <div className={classes.theme}>
            {/* <Paper className={classes.paper}> */}
                <Grid direction="column" container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <CardMedia 
                            style={card}
                            component="img"
                            alt={alt}
                            height="345"
                            image={img}
                            title={name}
                        />
                    </Grid>

                    <Grid item xs style={{ textAlign: 'center', color: 'white' }}>
                        <Typography variant="h5" style={{ fontStyle: "montserrat", fontWeight: 700 }}>{name}</Typography>
                        <Typography variant="h6" style={{ fontStyle: "montserrat" }}>{position}</Typography>
                    </Grid>
                </Grid>
            {/* </Paper> */}
        </div>

    )
}

export default Profiles
