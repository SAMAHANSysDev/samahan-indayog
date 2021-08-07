import React from 'react'
// import Typography from '@material-ui/core/Typography';
import { Button, Grid, Typography } from '@material-ui/core';
// import Buttons from '../Components/Buttons';
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';
import Paper from '@material-ui/core/Paper';
import Schedules from '../Components/Schedules';
import { schedData } from '../Components/schedData';
import { liveData } from '../Components/liveData';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
    }
}));

function Schedule({ forwardedRef }) {
    const classes = useStyles();

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div ref={forwardedRef}>
        {/* live */}
        <Grid container direction="row" justifyContent={smDown ? "center" : "flex-end"} alignItems="center" className={classes.container} spacing={2}>
            <Grid item>
                <Button className={classes.buttonStyle}>
                    <Typography variant="h5" style={{color:"#D51E49"}}>
                        LIVE NOW
                    </Typography>
                </Button>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={2} className={classes.box} >
                    <Grid container>
                        {liveData.map((live) => {
                            return (
                                <Grid key={live.id} item xs={12} justifyContent="center" alignItems="center" >
                                    <Typography variant="h5" >
                                        <a href={live.link}>{live.event}: {live.link}</a>
                                        <ul/>
                                    </Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        {/* sched */}
        <Grid container direction="row" alignItems="center" className={classes.rootContainer}>
            <Grid item xs={12} md={4}>
                <center>
                <img 
                    src='/assets/Avatars/Atenean.png' 
                    alt="Atenean"
                    style={{ maxHeight: 600 }}
                />
                </center>
            </Grid>
            <Grid item xs={12} md={8}>
                {/* <Grid direction="row" justifyContent="center" > */}
                <Grid container direction="column" spacing={4}>
                    <Grid item>
                        <Grid spacing={4} container direction="row" justifyContent="flex-start" alignItems="center" > 
                            <Grid item>
                                <Button className={classes.buttonStyle}>
                                    <Typography variant="h5" style={{color:"#D51E49"}}>
                                        SCHEDULE
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.buttonStyle}>
                                    <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                                        Day 1
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.buttonStyle}>
                                    <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                                        Day 2
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.buttonStyle}>
                                    <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                                        Day 3
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Paper elevation={2} className={classes.box}>
                            <Typography variant="h4" style={{ paddingBottom:"2%" }}>
                                Day 1
                            </Typography>
                            <Grid spacing={3} container direction="row" justifyContent="flex-start" alignItems="center">
                                {schedData.map((sched) => {
                                    return (
                                        <Grid key={sched.id} item xs={12}>
                                            <Schedules time={sched.time} data={sched.description} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Schedules /> */}
                
            </Grid>
            
        </Grid>
        </div>
        
    )
}

export default handleViewport(Schedule)
