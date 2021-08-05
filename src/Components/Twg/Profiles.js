import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

function Profiles({img, alt, name,position}) {

    const useStyles = makeStyles((theme) =>({
        root: {
            maxWidth: 345,
        },

        theme: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
    }));

    const card = {
        // height:235.77,
        // width:235.77,
        borderRadius:"20px",
    };

    const classes = useStyles();
    
    return (
        <div className={classes.theme}>
            {/* <Paper className={classes.paper}> */}
                <Grid direction="column" container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <CardActionArea>
                            <CardMedia 
                                style={card}
                                component="img"
                                alt={alt}
                                height="345"
                                image={img}
                                title={name}
                            />
                        </CardActionArea>
                    </Grid>

                    <Grid item xs style={{ textAlign: 'center', color: 'white' }}>
                        <Typography variant="h5" style={{ fontStyle: "montserrat", fontWeight: 700 }}>{name}</Typography>
                        <Typography variant="h6" style={{ fontStyle: "montserrat" }}>{position}</Typography>
                    </Grid>
                </Grid>
            {/* </Paper> */}
        </div>

        // <div className='profiles'>
        //     <Card className={classes.root} id='card'>
        //         <CardActionArea>
        //             <CardMedia
        //             component="img"
        //             alt={alt}
        //             height="345"
        //             image={img}
        //             title={name}
        //             />
        //         </CardActionArea>
                
        //     </Card>
            
        //     <div className="profiles_dets">
        //         <h4>{name}</h4>
        //         <h4>{position}</h4>
        //     </div>

        // </div>
    )
}

export default Profiles
