import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { links } from '../data';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: 'linear-gradient(to right, #2A5CB5, #D51E49)',
        height: 133,
    },
    menuButton: {
        position: 'absolute',
        top: 40,
        left: 'clamp(2rem, 4vw, 4rem)'
    },
    list: {
        width: 250,
        minHeight: '100vh',
        backgroundColor: 'white'
    },
}));

const Navbar = ({ tabValue, setTabValue }) => {
    const classes = useStyles();
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpenDrawer(open);
    };
    
    const list = () => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            { links.map((link, i) => (
                <ListItem button key={`link-mobile-${i}`} onClick={() => handleClickLink(i)}>
                    <ListItemText primary={
                        <Typography variant="h5" style={{ fontStyle: 'Montserrat', fontWeight: 700, textTransform: 'none' }}>{link.text}</Typography>
                    } />
                </ListItem>
            )) }
          </List>
        </div>
      );

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
        <>
            <AppBar className={classes.root} position="sticky" elevation={0}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
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
                    { !mdDown ? (
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
                    ) : null }
                </Grid>
            </AppBar>
            <Drawer anchor='left' open={openDrawer} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </>
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
