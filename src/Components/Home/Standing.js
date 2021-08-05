import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Charts from "./Charts";
import Event from "./Event";
import { judgingData } from './judgingData.js'

function Standing() {
    const judging = {
        color: "#661693",
        fontFamily: "boldstrom",
        marginBottom: '2rem'
    };

    return (
        <Grid container spacing={4} wrap="nowrap">
            <Grid item xs>
                <Charts />
            </Grid>
            <Grid item>
              <div style={{ 
                  backgroundColor: '#AAAAAA',
                  width: 1,
                  height: '100%'
               }} />
            </Grid>
            <Grid item xs>
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
                                        <Event img={now.img} alt={now.alt} link={now.link} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
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
