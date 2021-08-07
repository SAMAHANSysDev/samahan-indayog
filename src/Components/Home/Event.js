import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
        image: {
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
            <Grid container spacing={1}>
                <Grid item xs={2} sm={6} md={4}>
                    <div className={classes.image} style={{ backgroundImage: `url(${img})` }} />
                </Grid>
                <Grid item xs={10} sm={6} md={8}>
                    <Grid className={classes.details} direction="column" container spacing={0} >
                        <Grid item>
                            <Typography variant="h5" style={name}>{alt}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" style={via}>{link}</Typography>
                        </Grid>
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
