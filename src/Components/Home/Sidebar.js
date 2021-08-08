import { Grid, CircularProgress } from '@material-ui/core'
import React from 'react'
import Event from './Event'
import Tweets from './Tweets'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import { getCalendar } from '../../Utils/google';
import isWithinInterval from 'date-fns/isWithinInterval';

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

const Sidebar = React.forwardRef((props, ref) => {
    const classes = useStyles();

    const [events, setEvents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        getCalendar().then((res) => {
            setLoading(false);
            setEvents(res.items.map((item) => ({
                id: item.id,
                start: new Date(item.start.date ?? item.start.dateTime),
                end: new Date(item.end.date ?? item.end.dateTime),
                name: item.summary,
                location: item.location
            })));
        });
    }, []);

    return (
        <div ref={ref}>
            <Grid direction="column" container spacing={2}>
                <Grid item>
                    <Paper className={classes.cardContainer}>
                        <Grid container direction="column" alignItems={loading ? 'center' : ''} justifyContent={loading ? 'center' : ''} spacing={2}>
                            { loading ? (
                                <CircularProgress color="primary" />
                            ) : (
                                <>
                                    <Grid item>
                                        <Typography variant="h4" className={classes.now}>Now Happening</Typography>
                                        {events.filter((event) => isWithinInterval(
                                            new Date(),
                                            { start: event.start, end: event.end }
                                        )).map((now) => {
                                            return (
                                                <Event data={now} />
                                            )
                                        })}
                                    </Grid>
                                    <Grid item>
                                        <hr className={classes.bar}/>
                                        <Typography variant="h4" className={classes.next2}>Up Next</Typography>
                                        {events.filter((event) => !isWithinInterval(
                                            new Date(),
                                            { start: event.start, end: event.end }
                                        )).slice(0, 5).map((now) => {
                                            return (
                                                <Event data={now} />
                                            )
                                        })}
                                    </Grid>
                                </>
                            ) }
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
        </div>                        
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
});

export default Sidebar
