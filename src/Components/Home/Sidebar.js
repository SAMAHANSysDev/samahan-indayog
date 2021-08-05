import { Grid } from '@material-ui/core'
import React from 'react'
import Event from './Event'
import { eventDataNext } from './eventDataNext'
import { eventDataNow } from './eventDataNow'
import Tweets from './Tweets'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    now: {
        color:"#F78701",
        textAlign:"center",
        fontStyle: 'boldstrom',
        marginBottom:"20px",
    },
    next2: {
        color:"#545454",
        textAlign:"center",
        fontStyle: 'boldstrom',
        marginBottom:"20px",
    },
    bar: {
        // position: "absolute",
        width: "100%",
        textAlign:"center",
        border: "1px solid #CECECE",
        marginBottom:"11px",
        
    },
    cardContainer: {
        borderRadius: 26,
        backgroundColor: 'white',
        padding: theme.spacing(4)
    }
}));

function Sidebar({ maxHeight }) {
    const classes = useStyles();


    return (
        <>
        <Grid direction="column" container wrap="nowrap" spacing={2} >
            <Grid item>
                <Paper className={classes.cardContainer}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h4" className={classes.now}>Now Happening</Typography>
                            {eventDataNow.map((now) => {
                                return (
                                    <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
                                )
                            })}
                        </Grid>
                        <Grid item>
                            <hr className={classes.bar}/>
                            <Typography variant="h4" className={classes.next2}>Up Next</Typography>
                            {eventDataNext.map((next) => {
                                return (
                                    <Event img={next.img} key={next.id} alt={next.alt} link={next.link} />
                                )
                            })}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                {/* <h4>SAMAHAN Twitter Tweets</h4> */}
                <Paper className={classes.cardContainer}>
                    <Tweets />
                </Paper>
            </Grid>
        </Grid>
        </>

        // <div className='sidebar'>
        //     <div className="sidebar_top">
        //         <h3 id='#now'>Now Happening</h3>
        //         <div className="sidebar_eventNow">
        //             {eventDataNow.map((now) => {
        //                 return (
        //                     <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
        //                 )
        //             })}
        //         </div>
        //         <hr />
        //         <h3 id='#next'>Up Next</h3>
        //         <div className="sidebar_eventNext">
        //             {eventDataNext.map((next) => {
        //                 return (
        //                     <Event img={next.img} key={next.id} alt={next.alt} link={next.link} />
        //                 )
        //             })}
        //         </div>

                
        //     </div>
        //     <div className="sidebar_bottom">
        //         {/* SAMAHAN Twitter Tweets */}
        //         <h4>SAMAHAN Twitter Tweets</h4>
        //         <Tweets />
        //     </div>
        // </div>
    )
}

export default Sidebar
