// https://www.npmjs.com/package/react-apexcharts
import React from "react";
import Sidebar from "../Components/Home/Sidebar";
import Carousel from "react-material-ui-carousel";
import { ImgGal } from "../Components/Home/ImgGal";
import Card from "@material-ui/core/Card";
import Paper from '@material-ui/core/Paper';
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Standing from "../Components/Home/Standing";

import { useSpring, animated as a } from "react-spring";
import useWindowDimensions from "../Utils/useWindowDimensions";
import Fab from '@material-ui/core/Fab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '120vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/Home BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    box: {
        backgroundColor: "white",
        borderRadius: 26,
        height: "100%",
        padding: theme.spacing(6),
    },
    standing: {
        color: "#D51E49",
        fontFamily: "boldstrom",
        writingMode: 'vertical-rl',
        textOrientation: 'sideways',
        transform: 'rotate(180deg)'
    }
}));

function Image(props) {
    return (
        <Card style={{ borderRadius: 20, height: '100%' }}>
            <CardMedia
                component="img"
                alt={`image_${props.key}`}
                height="100%"
                width="100%"
                image={props.item.original}
                title={`image_${props.key}`}
            />
        </Card>
    );
}

function Home({ forwardedRef }) {
    const classes = useStyles();

    const { width } = useWindowDimensions();

    const [greetingStatus, displayGreeting] = React.useState(false);
    const clusterStandingRef = React.useRef(null);
    const [clusterStandingWidth, setClusterStandingWidth] = React.useState(0);

    React.useEffect(() => {
        setClusterStandingWidth(clusterStandingRef.current ? clusterStandingRef.current.offsetWidth : 0);
    }, [clusterStandingRef]);

    const contentProps = useSpring({
        //opacity: greetingStatus ? 1 : 0,
        // marginTop: greetingStatus ? 0 : -500
        // left: greetingStatus ? 200 : width - 200,
        left: greetingStatus ? width - clusterStandingWidth - 100 : width - 150,
    });

    return (
        <div className={classes.rootContainer} ref={forwardedRef}>
            <Grid
                style={{ width: "100%", margin: 0, position: 'relative' }}
                container
                spacing={2}
                justifyContent="space-around"
            >
                <Grid item xs={4} md={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={4} md={9}>
                    <Carousel autoPlay style={{ height: '100%' }}>
                        {ImgGal.map((img, i) => (
                            <Image item={img} key={i} />
                        ))}
                    </Carousel>
                </Grid>
                <Grid item xs={4} md={1} />

                <a.div style={{ position: 'absolute', ...contentProps }}>
                    <Paper elevation={2} className={classes.box} ref={clusterStandingRef}>
                        <Grid container wrap="nowrap">
                            <Grid item>
                                <div 
                                    style={{
                                        height: '100%', 
                                        paddingRight: '2rem',
                                        borderRadius: "26px 0 0 26px"
                                    }}
                                >
                                    <Grid container justify="center" alignItems="center" style={{ height: '100%' }}>
                                        <Grid item>
                                            <Typography variant="h4" className={classes.standing}>
                                                Indayog 2021 Cluster Standing
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs>
                                <Standing />
                            </Grid>
                        </Grid>
                    </Paper>
                    <img 
                        src='/assets/Buttons/Artboard 1@4x.png' 
                        alt="FiestaYarn" 
                        width="150" 
                        style={{ 
                            position: 'absolute',
                            bottom: -60,
                            left: -60
                        }}
                    />
                    <div style={{ 
                        position: 'absolute',
                        top: '50%',
                        left: -30,
                        transform: 'translateY(-50%)'
                    }}>
                        <Fab color="secondary" onClick={() => displayGreeting(a => !a)} >
                            { greetingStatus ? (
                                <ArrowForwardIosIcon />
                            ) : (
                                <ArrowBackIosIcon />
                            ) }
                        </Fab>
                    </div>
                </a.div>

                {/* <Grid item md={12}> */}
                {/* <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography> */}
                {/* <div className="home_chart"> */}
                {/* <Charts /> */}
                {/* judging updates */}
                {/* <Typography variant="h2">Judging Updates</Typography> */}
                {/* </div> */}
                {/* </Grid> */}
            </Grid>
        </div>
    );
}

export default handleViewport(Home);
