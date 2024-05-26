import React from "react";
import { AppBar, Box, Card, Toolbar, Typography } from '@mui/material';


const Header = () =>{
    return (
        <AppBar position="static" sx={{ backgroundColor: '#2b2b2b' }}>
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
                Image Gallery
            </Typography>
        </Toolbar>
    </AppBar>
    );
};

export default Header;