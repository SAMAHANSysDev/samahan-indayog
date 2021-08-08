// https://www.npmjs.com/package/react-apexcharts
import React from "react";
import Sidebar from "../Components/Home/Sidebar";
import Carousel from "react-material-ui-carousel";
import { ImgGal } from "../Components/Home/ImgGal";
import Card from "@material-ui/core/Card";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import Typography from "@material-ui/core/Typography";
import Standing from "../Components/Home/Standing";

import { useSpring, animated as a } from "react-spring";
import useWindowDimensions from "../Utils/useWindowDimensions";
import Fab from '@material-ui/core/Fab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useDimensions from "react-cool-dimensions";

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
        <Card style={{ borderRadius: 26, height: '100%' }}>
            <div style={{ 
                background: `url("${props.item.original}")`, 
                width: '100%', 
                height: props.height || 400,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} />
        </Card>
    );
}

function Home({ forwardedRef, firebaseLoading }) {
    const classes = useStyles();

    const { width } = useWindowDimensions();

    const [greetingStatus, displayGreeting] = React.useState(false);

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    
    const { observe, height: sidebarHeight } = useDimensions();
    const { observe: observeMobile, height: mobileHeight } = useDimensions();

    const contentProps = useSpring({
        left: greetingStatus ? 32 : width - (smDown ? 130 : 140),
    });

    return (
        <div className={classes.rootContainer} ref={forwardedRef}>
            <Grid container>
                <Grid item xs={10} md={11} innerRef={observeMobile}>
                    <Grid
                        style={{ width: "100%", margin: 0, position: 'relative' }}
                        container
                        spacing={4}
                        justifyContent="space-around"
                    >
                        { !mdDown ? (
                            <Grid item xs={3}>
                                <div ref={observe}>
                                    <Sidebar />
                                </div>
                            </Grid>
                        ) : null }
                        <Grid item xs={12} lg={9}>
                            <Carousel autoPlay={false} animation="slide" style={{ height: '100%' }}>
                                {ImgGal.map((img, i) => (
                                    <Image item={img} key={i} height={sidebarHeight} />
                                ))}
                            </Carousel>
                        </Grid>
                        <Hidden lgUp>
                            <Grid item xs={12}>
                                <Sidebar />
                            </Grid>
                        </Hidden>

                        <a.div style={{ position: 'absolute', width: 'calc(100vw - 8rem)', height: sidebarHeight || mobileHeight, ...contentProps }}>
                            <Paper elevation={2} className={classes.box}>
                                <Grid container wrap="nowrap" style={{ height: '100%' }}>
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
                                        <Standing firebaseLoading={firebaseLoading} />
                                    </Grid>
                                </Grid>
                            </Paper>
                            <img 
                                src='/assets/Buttons/Artboard 1@4x.png' 
                                alt="FiestaYarn" 
                                width={smDown ? "100" : "150"} 
                                style={{ 
                                    position: 'absolute',
                                    bottom: smDown ? -40 : -60,
                                    left: smDown ? -40 : -60
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
                </Grid>
                <Grid item xs={2} md={1} />
            </Grid>
        </div>
    );
}

export default handleViewport(Home);
