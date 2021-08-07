import React from 'react'
import Youtube from './Youtube'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Episode({ embedId, episode, description }) {
    return (
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={12} lg>
                <Youtube embedId={embedId} />
            </Grid>
            <Grid item xs={12} lg>
                <Grid container direction="column" style={{ color: 'white' }}>
                    <Grid item>
                        <Typography variant="h5" style={{ fontWeight: 700 }}>{episode}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">{description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Episode
