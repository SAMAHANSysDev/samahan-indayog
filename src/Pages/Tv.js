import React from 'react'
import Episode from '../Components/SamahanTv/Episode'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';
import WP from '../Utils/wordpress';

const useStyles = makeStyles((theme) => ({
    leftContainer: {
        minHeight: '120vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/SAMAHAN TV BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
    },
    rightContainer: {
        minHeight: '100vh',
        height: '100%',
        backgroundColor: '#DB6A96',
        padding: theme.spacing(4)
    },
    body: {
        color:"#FFFFFF",
        fontFamily: "Montserrat",
        fontWeight: 400
    },
    
}));

function Tv({ forwardedRef }) {
    const classes = useStyles();
    const [tvEpisodes, setTvEpisodes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        WP.samahanTv().perPage(100).then((data) => {
            setTvEpisodes(data.map((episode) => ({
                id: episode.id,
                title: episode.title.rendered,
                thumbnail: episode.acf.thumbnail,
                description: episode.acf.description,
                url: episode.acf.video_url
            })));
            setLoading(false);
        })
    }, []);

    React.useEffect(() => {
        console.log(tvEpisodes);
    }, [tvEpisodes]);
    
    return (
        <Grid container direction="row" innerRef={forwardedRef}>
            <Grid item xs={12} md={6}>
                <Grid className={classes.leftContainer} container direction="column" justifyContent="center" alignItems="center">
                    <img src="/assets/Logo/Samahan TV Logo@4x.png" style={{ width:"80%" }} alt="martin Hall" />
                    <Grid item>
                        <Paper style={{
                            background: 'rgba(0, 0, 0, 0.58)',
                            borderRadius: 26,
                            padding: '2rem',
                            width: '70%',
                            margin: 'auto'
                        }}>
                            <Typography className={classes.body} variant="h5">
                                <b>SAMAHAN TV</b> is an initiative for the upcoming 73rd Ateneo Fiesta for the purposes of information dissemination and to spark interest of Atenans to anticipate the biggest event in Ateneo. 
                                <br /><br />The Fiesta Segment will comprise of six (6) episodes highlighting different events and provide a general overview for the upcoming activities.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid className={classes.rightContainer} container direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" style={{ 
                            color: '#FFFF', 
                            fontFamily:'america', 
                            marginBottom: '2rem',
                            textShadow: '2px 2px #000000'
                        }}>Episode List</Typography>
                    </Grid>
                    <Grid item>
                        {loading ? (
                            <CircularProgress color="secondary" />
                        ) : (
                            <List>
                                {tvEpisodes.map((tv) => {
                                    return (
                                        <ListItem 
                                            button 
                                            onClick={() => {
                                                window.open(tv.url, '_blank')
                                            }} 
                                            key={tv.id}
                                            style={{
                                                borderRadius: 26
                                            }}
                                        >
                                            <Episode {...tv} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        // <div className='tv'>
        //     <div className="tv_left">
        //         <div className="tv_left_poster">
        //             {/* <img src={bg} alt="martin Hall" /> */}
        //         </div>
        //     </div>
        //     <div className="tv_right">
        //         <Typography variant="h2">SAMAHAN TV?</Typography>
        //         <Typography variant="h4">SAMAHAN TV DESCRIPTION</Typography>
        //         <div className="tv_right_episodes">
        //             {tvData.map((tv) => {
        //                 return (
        //                     // <Episode img={tv.img} alt={tv.alt} episode={tv.episode} description={tv.description} />
        //                     <Episode key={tv.id} embedId={tv.embedId} episode={tv.episode} description={tv.description} />
        //                 )
        //             })}

        //         </div>
        //     </div>
        // </div>
    )
}

export default handleViewport(Tv)
