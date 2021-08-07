import { Grid } from '@material-ui/core'
import React from 'react'
import Cards from '../Components/Clusters/Cards'
import { clustersData } from '../Components/Clusters/ClustersData'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import handleViewport from 'react-in-viewport';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        // minHeight: '120vh',
        // padding: theme.spacing(4),
        // paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/Clusters BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
}));

const moduloToMargin = (modulo) => {
    return (30*modulo);
}

function Clusters({ forwardedRef }) {
    const classes = useStyles();

    return (
        <Grid innerRef={forwardedRef} container direction="column" justifyContent="center" alignItems="center" spacing={1} className={classes.rootContainer}>
            <Grid item>
                <Hidden mdDown>
                    <Grid container justifyContent="center" alignItems="center" spacing={1}>
                        {clustersData.map((cluster, i) => {
                            return (
                                <Grid item key={cluster.id}>
                                    <Cards img={cluster.img} alt={cluster.alt} title={cluster.title} id={cluster.id} style={{ marginTop: moduloToMargin(i % 3) }} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
                        {clustersData.map((cluster) => {
                            return (
                                <Grid item key={cluster.id}>
                                    <Cards img={cluster.img.replace('.png', 'mobile.png')} alt={cluster.alt} title={cluster.title} id={cluster.id} mobile />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h1" style={{ color: '#FFFFFF', marginTop:"30px" }}>INDAYOG 2021 CLUSTERS</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{ color: '#FCBD6E', fontFamily:'america' }}>73rd Ateneo Fiesta</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default handleViewport(Clusters)
