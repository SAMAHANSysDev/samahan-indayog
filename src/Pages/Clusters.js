import { Button, Grid } from "@material-ui/core";
import React from "react";
import Cards from "../Components/Clusters/Cards";
import { clustersData } from "../Components/Clusters/ClustersData";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import handleViewport from "react-in-viewport";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles(theme => ({
    rootContainer: {
        minHeight: "101vh",
        padding: theme.spacing(2),
        backgroundImage: 'url("/assets/Backgrounds/Clusters BG.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    mymodal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        border: "1px solid #ccc",
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
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));

const moduloToMargin = modulo => {
    return 30 * modulo;
};

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

function Clusters({ forwardedRef }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [clickedCluster, setClickedCluster] = useState("");
    const [clusterEntries, setClusterEntries] = useState([]);

    const handleClickOpen = (title, entries) => {
        setClickedCluster(title);
        setClusterEntries(entries);
        setOpen(true);
    };

    const handleClose = () => {
        setClickedCluster("");
        setClusterEntries([]);
        setOpen(false);
    };

    return (
        <>
            <Grid
                innerRef={forwardedRef}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                className={classes.rootContainer}
            >
                <Grid item>
                    <Hidden mdDown>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            {clustersData.map((cluster, i) => {
                                return (
                                    <Button
                                        key={cluster.id}
                                        onClick={() =>
                                            handleClickOpen(
                                                cluster.alt,
                                                cluster.entries
                                            )
                                        }
                                    >
                                        <Grid item>
                                            <Cards
                                                img={cluster.img}
                                                alt={cluster.alt}
                                                title={cluster.title}
                                                id={cluster.id}
                                                style={{
                                                    marginTop: moduloToMargin(
                                                        i % 3
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Button>
                                );
                            })}
                        </Grid>
                    </Hidden>
                    <Hidden lgUp>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            {clustersData.map(cluster => {
                                return (
                                    <Button
                                        key={cluster.id}
                                        onClick={() =>
                                            handleClickOpen(
                                                cluster.alt,
                                                cluster.entries
                                            )
                                        }
                                    >
                                        <Grid item>
                                            <Cards
                                                img={cluster.img.replace(
                                                    ".png",
                                                    "mobile.png"
                                                )}
                                                alt={cluster.alt}
                                                title={cluster.title}
                                                id={cluster.id}
                                                mobile
                                            />
                                        </Grid>
                                    </Button>
                                );
                            })}
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography
                                variant="h1"
                                style={{ color: "#FFFFFF", marginTop: "30px" }}
                            >
                                INDAYOG 2021 CLUSTERS
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="h2"
                                style={{
                                    color: "#FCBD6E",
                                    fontFamily: "america",
                                }}
                            >
                                73rd Ateneo Fiesta
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography variant="h4">
                        {`${clickedCluster} Entries`}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <table style={{ margin: "auto" }}>
                        {clusterEntries.map(entries => (
                            <tr>
                                <td style={{ padding: 5 }}>
                                    <Typography variant="h6">
                                        {entries.event}
                                    </Typography>
                                </td>
                                <td style={{ padding: 5 }}>
                                    <Button
                                        color="secondary"
                                        onClick={() =>
                                            window.open(entries.link)
                                        }
                                    >
                                        <Typography variant="h6">
                                            Click Here
                                        </Typography>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default handleViewport(Clusters);
