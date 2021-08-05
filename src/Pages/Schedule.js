import React from 'react'
// import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
// import Buttons from '../Components/Buttons';
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';
import Paper from '@material-ui/core/Paper';

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

function Schedule({ forwardedRef }) {
    const classes = useStyles();

    return (
        <>
        <Grid container direction="row" justifyContent="flex-end" innerRef={forwardedRef} className={classes.container} spacing={2}>
            <Grid direction="column" justifyContent="center">
                <Grid >
                    <Button className={classes.buttonStyle} style={{marginTop:"150%"}}>
                        LIVE NOW
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Paper elevation={2} className={classes.box}>
                    
                </Paper>
            </Grid>
        </Grid>

        <Grid container direction="row" innerRef={forwardedRef} className={classes.rootContainer}>
            <Grid item>
                <img 
                        src='/assets/Avatars/Atenean.png' 
                        alt="Atenean" 
                        width="550" 
                />
            </Grid>

            <Grid item direction="column">
                {/* <Grid direction="row" justifyContent="center" > */}

                <Grid spacing={3} container direction="row" justifyContent="flex-start" alignItems="center" > 
                    <Button className={classes.buttonStyle}>
                        SCHEDULE
                    </Button>
                    <Button className={classes.buttonStyle}>
                        Day 1
                    </Button>
                    <Button className={classes.buttonStyle}>
                        Day 2
                    </Button>
                    <Button className={classes.buttonStyle}>
                        Day 3
                    </Button>
                </Grid>
                
                {/* <Paper elevation={2} className={classes.box}> */}
                <Grid spacing={3} container direction="row" justifyContent="flex-start" alignItems="center">
                    <img 
                        src='/assets/Schedules/1.png' 
                        alt="sched1" 
                        width="900" 
                    />
                </Grid>
                    
                {/* </Paper> */}
                
            </Grid>
            
        </Grid>
        </>
        
    )
}

export default handleViewport(Schedule)
