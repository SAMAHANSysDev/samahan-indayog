import { Grid, Typography } from '@material-ui/core'
import React from 'react'

function Schedules({time,data}) {
    return (
        <Grid spacing={8} container direction="row" justifyContent="space-between" alignItems="center" >
        {/* <Paper elevation={2} className={classes.box}> */}
            <Grid item xs={6} sm={4}>
                <Typography variant="h5">
                    {time}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={8}>
                <Typography variant="h5">
                    <b>{data}</b>
                </Typography>
            </Grid>
            
            
        
        {/* </Paper> */}
        </Grid>
    )
}

export default Schedules
