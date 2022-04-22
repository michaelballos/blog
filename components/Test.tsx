import React, { useRef, useEffect } from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size='large'
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;