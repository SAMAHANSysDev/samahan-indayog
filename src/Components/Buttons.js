import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'

function Buttons({text}) {
    return (
        <Grid direction="row" container wrap="nowrap" spacing={2}>
            <Button style={{ background:"#FFFFF",borderRadius:"60px" }}>
                <Typography variant="h4">{text}</Typography>
            </Button>
        </Grid>
        
    )
}

export default Buttons
