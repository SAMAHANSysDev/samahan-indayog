import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
        image: {
            width: 58,
            height: 58,
            borderRadius: 10,
        },
        details:{
            paddingLeft: 15,
            alignContent:"center",
        }
    });


const via = {
    color:"#AAAAAA",
    fontWeight: "700",
    fontFamily: "Montserrat",
};
const name = {
    fontWeight: 800,
    fontFamily: "Montserrat",
};



function Event({img, alt, link}) {
    const classes = useStyles();
    return (
        <div className='event'>
            <Grid container wrap="nowrap" spacing={1}>
                <Grid item>
                    <img className={classes.image} src={img} alt={alt}/>
                </Grid>
                <Grid item xs>
                    <Grid className={classes.details} direction="column" container wrap="nowrap" spacing={0} >
                        <Typography variant="h5" style={name}>{alt}</Typography>
                        <Typography variant="h6" style={via}>{link}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>

        // <div className='event'>
        //     <img src={img} alt={alt}/>
        //     <div className="event_details">
        //         <h4>{alt}</h4>
        //         <h5>{link}</h5>
        //     </div>
        // </div>
    )
}

export default Event
