import React from "react";

// Styles
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'


// Icons
import { MenuRounded } from '@material-ui/icons'

// Navbar Fix hide content
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
  }))

const Navbar = () => {
    
    // Navbar Fix hide content
    const classes = useStyles();

    return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" arial-label="icono del menu" >
            <MenuRounded />
          </IconButton>
          <Typography variant="h6">Binance Tracker</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default Navbar;
