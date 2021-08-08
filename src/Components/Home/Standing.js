import { Grid, Typography, CircularProgress } from "@material-ui/core";
import React from "react";
import Charts from "./Charts";
import Update from "./Update";
import firebase from '../../Utils/firebaseInstance';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useDimensions from "react-cool-dimensions";

function Standing({ firebaseLoading }) {
    const judging = {
        color: "#661693",
        fontFamily: "boldstrom",
        marginBottom: '2rem'
    };

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const [judgingData, setJudgingData] = React.useState([]);
    const { observe, height } = useDimensions();

    React.useEffect(() => {
        const updatesRef = firebase.database().ref('updates');
        updatesRef.orderByChild('timestamp').limitToLast(5).on('value', (snapshot) => {
            const updates = snapshot.val();
            setJudgingData(Object.keys(updates).map((id) => ({
                id,
                alt: updates[id].name,
                link: 'has been judged!'
            })).reverse());
        });

        return () => {
            updatesRef.off();
        }
    }, []);

    return (
        <Grid container spacing={4} style={{ height: '100%' }} justifyContent="center" alignItems="center">
            { firebaseLoading ? (
                <Grid item>
                    <CircularProgress color="primary" />
                </Grid>
            ) : (
                <>
                    <Grid item style={{ height: smDown ? '50%' : '100%' }} sm={12} md innerRef={observe}>
                        <Charts height={height} />
                    </Grid>
                    <Grid item sm={12} md>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant="h4" style={judging}>
                                    Judging Updates
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" spacing={2}>
                                    {judgingData.map((now) => {
                                        return (
                                            <Grid item key={now.id}>
                                                <Update img={now.img} alt={now.alt} link={now.link} />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            ) }
        </Grid>

        // <div className="home_chart">
        //     {/* <Button onClick={() => displayGreeting(a => !a)}> */}
        //     {/* <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography> */}
        //     {/* </Button> */}
        //     <Charts />
        //     <hr  style={{ transform: "rotate(270deg)" }} />

        //     <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
        //         <Typography variant="h2" style={judging}>
        //             Judging Updates
        //         </Typography>
        //         {judgingData.map((now) => {
        //             return (
        //                 <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
        //             )
        //         })}
        //     </Grid>
        // </div>
    );
}

export default Standing;
