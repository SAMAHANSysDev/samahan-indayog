import { Button, Grid } from '@material-ui/core'
import React from 'react'
import Cards from '../Components/Clusters/Cards'
import { clustersData } from '../Components/Clusters/ClustersData'
import Typography from '@material-ui/core/Typography';
import {withStyles, makeStyles } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import handleViewport from 'react-in-viewport';
import { useState } from 'react';
import Modal from "react-modal";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(cluster,event,link) {
    return { cluster,event,link };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
];


const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '101vh',
        padding: theme.spacing(2),
        backgroundImage: 'url("/assets/Backgrounds/Clusters BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    mymodal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        border: '1px solid #ccc',
        background: "#fff",
        overflow: "auto",
        borderRadius: "4px",
        outline: "none",
        padding: "20px",
    },
    myoverlay: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    table: {
        minWidth: 700,
    },
}));

const moduloToMargin = (modulo) => {
    return (30*modulo);
}

function Clusters({ forwardedRef }) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    
    function toggleModal() {
        setIsOpen(!isOpen);
        
    }

    return (
        <>
        <Grid innerRef={forwardedRef} container direction="column" justifyContent="center" alignItems="center" spacing={1} className={classes.rootContainer}>
            <Grid item>
                <Hidden mdDown>
                    <Grid container justifyContent="center" alignItems="center" spacing={3}>
                        {clustersData.map((cluster, i) => {
                            return (
                                <Button onClick={toggleModal}>
                                    <Grid item key={cluster.id}>
                                        <Cards img={cluster.img} alt={cluster.alt} title={cluster.title} id={cluster.id} style={{ marginTop: moduloToMargin(i % 3) }}/>
                                    </Grid>
                                </Button>

                            )
                        })}
                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
                        {clustersData.map((cluster) => {
                            return (
                                <Button onClick={toggleModal}>
                                    <Grid item key={cluster.id}>
                                        <Cards img={cluster.img.replace('.png', 'mobile.png')} alt={cluster.alt} title={cluster.title} id={cluster.id} mobile />
                                    </Grid>
                                </Button>
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
        
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className={classes.mymodal}
            overlayClassName={classes.myoverlay}
            closeTimeoutMS={500}
        >
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Cluster</StyledTableCell>
                        <StyledTableCell align="right">Event</StyledTableCell>
                        <StyledTableCell align="right">Link</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.cluster}>
                        <StyledTableCell component="th" scope="row">
                            {row.cluster}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.event}</StyledTableCell>
                        <StyledTableCell align="right">{row.link}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Modal>

        </>
    )
}

export default handleViewport(Clusters)
