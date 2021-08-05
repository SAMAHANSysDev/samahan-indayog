import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Buttons from '../Components/Buttons';
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '120vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/Schedule BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
}));

function Schedule({ forwardedRef }) {
    const classes = useStyles();

    return (
        <Grid innerRef={forwardedRef} className={classes.rootContainer}>
            
        </Grid>


        // <div className='schedule'>
        //     <div className="schedule_left">
        //         {/* character/element  */}
        //         <img src="https://venngage-wordpress-gallery.s3.amazonaws.com/uploads/2018/10/25.jpg" alt="element/character" />
        //     </div>
        //     <div className="schedule_right">
        //         <div className="schedule_right_top">
        //             {/* fb link */}
        //             <Typography variant="h3">live</Typography>
        //         </div>
        //         <div className="schedule_right_bottom">
        //             {/* sched day 123 */}
        //         </div>
        //     </div>
        // </div>
    )
}

export default handleViewport(Schedule)
