import React from 'react'
import Profiles from '../Components/Twg/Profiles'
import { TwgData } from '../Components/Twg/TwgData'
import Typography from '@material-ui/core/Typography';
import { Paper, Grid } from '@material-ui/core';
import Gradient from 'rgt'
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '120vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/TWG BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    buttonStyle: {
        borderRadius: 26,
        backgroundColor: 'white',
        padding: theme.spacing(2)
    }
}));

function TWG({ forwardedRef }) {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems="center" className={classes.rootContainer} innerRef={forwardedRef} spacing={8}>
            <Grid item>
                <Grid container wrap="nowrap" spacing={4} alignItems="center">
                    <Grid item>
                        <Typography variant="h2" style={{ fontFamily:'america', color:'white', marginTop: 25 }}>
                            Meet the Team Behind
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.buttonStyle} elevation={0}>
                            <Typography 
                                variant="h4" 
                                style={{ 
                                    fontFamily: 'boldstrom',
                                    background: "-webkit-linear-gradient(left, #CC2552, #661693)",
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                Indayog 2021
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                    {TwgData.map((twg) => {
                        return (
                            <Grid key={twg.id} item xs={2}>
                                <Profiles img={twg.img} alt={twg.alt} name={twg.name} position={twg.position} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default handleViewport(TWG)
