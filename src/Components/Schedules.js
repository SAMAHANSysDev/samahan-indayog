import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '120vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/Schedule BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    container:{
        minHeight: '75vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/Live Now BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    box: {
        backgroundColor: "white",
        borderRadius: 26,
        height: "100%",
        padding: theme.spacing(6),
    },
    buttonStyle: {
        borderRadius: 26,
        backgroundColor: 'white',
        padding: theme.spacing(2),
        marginRight:"2%",
        marginBottom:"3%"
    }
}));
function Schedules({time,data}) {
    const classes = useStyles();

    return (
        <Grid spacing={8} container direction="row" justifyContent="space-between" alignItems="center" >
        {/* <Paper elevation={2} className={classes.box}> */}
            <Grid item xs={2} sm={6}>
                <Typography variant="h5">
                    {time}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Typography variant="h5">
                    <b>{data}</b>
                </Typography>
            </Grid>
            
            
        
        {/* </Paper> */}
        </Grid>
    )
}

export default Schedules
