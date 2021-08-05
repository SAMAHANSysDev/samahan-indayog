import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { links } from '../data';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: 'linear-gradient(to right, #2A5CB5, #D51E49)',
        height: 133,
    },
}));

const Navbar = ({ tabValue, setTabValue }) => {
    const classes = useStyles();

    const handleClick = e => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const location = document.querySelector(target).offsetTop;
        // const location = document.querySelector(target)
        // console.log(location);

        window.scrollTo({
            left: 0,
            top: location - 80,
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuint",
        });
    };

    const handleClickLink = i => {
        const location = document.querySelector(links[i].url).offsetTop;
        // const location = document.querySelector(target)
        console.log(location);

        window.scrollTo({
            left: 0,
            top: location - 80,
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuint",
        });
        setTabValue(i);
    };

    return (
        <AppBar className={classes.root} position="sticky" elevation={0}>
            <Grid container justify="space-around" alignItems="center" wrap="nowrap">
                <Grid item>
                    <img
                        href="#home"
                        alt="home"
                        key="1"
                        onClick={handleClick}
                        src="/assets/Logo/logo.png"
                        width="100%"
                        style={{ maxHeight: 133 }}
                    />
                </Grid>
                <Grid item>
                    <Tabs 
                        value={tabValue} 
                        onChange={(event, newValue) => {
                            setTabValue(newValue);
                        }} 
                        aria-label="simple tabs example"
                        indicatorColor="secondary"
                    >
                        { links.map((link, i) => (
                            <Tab key={`link-${i}`} label={
                                <Typography variant="h5" style={{ fontStyle: 'Montserrat', fontWeight: 700, textTransform: 'none' }}>{link.text}</Typography>
                            } onClick={() => handleClickLink(i)} />
                        )) }
                    </Tabs>
                </Grid>
            </Grid>
        </AppBar>
    );

    /* return (
        <nav className="navbar sticky">
            <div className="nav-center">
                <div className="header_left">
                    <img
                        href="#home"
                        alt="home"
                        key="1"
                        onClick={handleClick}
                        src="/assets/Logo/logo.png"
                    />
                </div>
                <div className="header_right">
                    {links.map(link => {
                        return (
                            // <a href={link.url} key={link.id} onClick={handleClick}>
                            //     {link.text}
                            // </a>
                            <Link
                                to={link.url}
                                href={link.url}
                                key={link.id}
                                onClick={handleClick}
                                smooth={true}
                            >
                                {link.text}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    ); */
};

export default Navbar;
