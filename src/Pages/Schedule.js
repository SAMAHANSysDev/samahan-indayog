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
        {/* live */}
        <Grid container direction="row" justifyContent="flex-end" innerRef={forwardedRef} className={classes.container} spacing={2}>
            <Grid direction="column" justifyContent="center">
                <Grid >
                    <Button className={classes.buttonStyle} style={{marginTop:"100%",width:"25vh",height:"6.9vh"}}>
                        <Typography variant="h5" style={{color:"#D51E49"}}>
                            LIVE NOW
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} justifyContent="center" alignItems="center">
                <Paper elevation={2} className={classes.box} >
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
                </Paper>
            </Grid>
        </Grid>
        {/* sched */}
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
                        <Typography variant="h5" style={{color:"#D51E49"}}>
                            SCHEDULE
                        </Typography>
                    </Button>

                    <Button className={classes.buttonStyle}>
                        <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                            Day 1
                        </Typography>
                    </Button>

                    <Button className={classes.buttonStyle}>
                        <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                            Day 2
                        </Typography>
                    </Button>

                    <Button className={classes.buttonStyle}>
                        <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                            Day 3
                        </Typography>
                    </Button>

                </Grid>
                <Grid spacing={3} container direction="row" justifyContent="flex-start" alignItems="center">
                    
                    <Paper elevation={2} className={classes.box}>
                        <Typography variant="h4" style={{ paddingBottom:"2%" }}>
                            Day 1
                        </Typography>
                        {schedData.map((sched) => {
                            return (
                                <Grid key={sched.id} item xs={12} >
                                    <Schedules time={sched.time} data={sched.description} />
                                    
                                </Grid>
                            )
                        })}
                    </Paper>
                    {/* <Schedules /> */}
                </Grid>
                
                
            </Grid>
            
        </Grid>
        </>
        
    )
}

export default handleViewport(Schedule)
