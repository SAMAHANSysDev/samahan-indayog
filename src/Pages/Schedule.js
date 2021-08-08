import React from 'react'
// import Typography from '@material-ui/core/Typography';
import { Button, Grid, Typography, CircularProgress } from '@material-ui/core';
// import Buttons from '../Components/Buttons';
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';
import Paper from '@material-ui/core/Paper';
import Schedules from '../Components/Schedules';

import isWithinInterval from 'date-fns/isWithinInterval';
import isToday from 'date-fns/isToday';
import format from 'date-fns/format';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '100vh',
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

function Schedule({ forwardedRef, events, eventsLoading }) {
    const classes = useStyles();

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const [currentDay, setCurrentDay] = React.useState(1);

    const isFirstDay = (date) => isWithinInterval(
        new Date(date),
        { start: new Date('Aug 12, 2021'), end: new Date('Aug 13, 2021') }
    )
    const isSecondDay = (date) => isWithinInterval(
        new Date(date),
        { start: new Date('Aug 13, 2021'), end: new Date('Aug 14, 2021') }
    )
    const isThirdDay = (date) => isWithinInterval(
        new Date(date),
        { start: new Date('Aug 14, 2021'), end: new Date('Aug 15, 2021') }
    )

    const changeDay = (day) => {
        setCurrentDay(day);
    }

    const dayEvents = React.useMemo(() => {
        switch (currentDay) {
            case 1:
                return events.filter((event) => isFirstDay(event.start));
            case 2:
                return events.filter((event) => isSecondDay(event.start));
            case 3:
                return events.filter((event) => isThirdDay(event.start));
            default:
                return [];
        }
    }, [events, currentDay]);

    const liveToday = React.useMemo(() => {
        return events.filter((event) => isToday(event.start) && event.url?.trim());
    }, [events]);

    return (
        <div ref={forwardedRef}>
        {/* live */}
        <Grid container direction="row" justifyContent={smDown ? "center" : "flex-end"} alignItems="center" className={classes.container} spacing={2}>
            <Grid item>
                <Paper className={classes.buttonStyle} elevation={0}>
                    <Typography variant="h5" style={{color:"#D51E49"}}>
                        LIVE NOW
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={2} className={classes.box} >
                    <Grid container>
                        {liveToday.length > 0 ? liveToday.map((live) => {
                            return (
                                <Grid key={live.id} item xs={12} justifyContent="center" alignItems="center" >
                                    <Typography variant="h5" >
                                        <a href={live.url}>{live.name}: {live.url}</a>
                                        <ul/>
                                    </Typography>
                                </Grid>
                            )
                        }) : (
                            <Grid item xs={12} justifyContent="center" alignItems="center" >
                                <Typography variant="h5" >
                                    No live events for today.
                                </Typography>
                            </Grid>
                        )}
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
                        <Grid spacing={4} container direction="row" justifyContent={smDown ? "center" : "flex-start"} alignItems="center" > 
                            <Grid item xs={12} md style={{ textAlign: smDown ? 'center' : '' }}>
                                <Paper className={classes.buttonStyle} elevation={0}>
                                    <Typography variant="h5" style={{color:"#D51E49"}}>
                                        SCHEDULE
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Button className={classes.buttonStyle} onClick={() => changeDay(1)}>
                                    <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                                        Day 1
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.buttonStyle} onClick={() => changeDay(2)}>
                                    <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                                        Day 2
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.buttonStyle} onClick={() => changeDay(3)}>
                                    <Typography variant="h6" style={{color:"#D51E49",fontFamily:"America"}}>
                                        Day 3
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {eventsLoading ? (
                            <CircularProgress color="secondary" />
                        ) : (
                            <Paper elevation={2} className={classes.box}>
                                <Typography variant="h4" style={{ paddingBottom: "2%", marginBottom: '2rem' }}>
                                    Day {currentDay}
                                </Typography>
                                <Grid spacing={1} container direction="column">
                                    {dayEvents.map((sched) => {
                                        return (
                                            <Grid key={sched.id} item>
                                                <Schedules time={format(sched.start, 'h:mm aaa')} data={sched.name} />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Paper>
                        )}
                    </Grid>
                </Grid>
                {/* <Schedules /> */}
                
            </Grid>
            
        </Grid>
        </div>
        
    )
}

export default handleViewport(Schedule)
