import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ToolBar from '@mui/material/ToolBar';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Navigation = () => {

  const [ open, setOpen ] = useState(false);

  const handleDrawerOpenClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position='fixed' 
          sx={{backgroundColor: '#0D0D0D', zIndex: (theme) => theme.zIndex.drawer + 1}}
        >
          <ToolBar>
            <IconButton 
              edge='start' 
              onClick={handleDrawerOpenClose} 
              sx={{color: '#C0C0C0'}}
            >
              <MenuIcon />
            </IconButton>
          </ToolBar>
        </AppBar>
      </Box>
      <Drawer 
        variant='persistent' 
        open={open} 
        PaperProps={{sx:{backgroundColor: '#0D0D0D'}}}
      >
        <ToolBar />
        <Box sx={{backgroundColor: '#0D0D0D', color: '#C0C0C0', padding: '0 1.5vw 0 1.5vw'}}>
          <Link 
            to='/'
            component={RouterLink} 
            sx={{color: '#4D73FF', display: 'block', margin: '1.5vh 1.5vw 1.5vh 0', textDecoration: 'none'}}
          >
            ABOUT
          </Link>
          <Typography 
            variant='body1' 
            sx={{marginBlockStart: '1.5vh', marginBlockEnd: '1.5vh'}}
          >
            FUNCTIONS
          </Typography>
          <Link 
            to='/documentation/count' 
            component={RouterLink} 
            sx={{color: '#4D73FF', display: 'block', margin: '0 1.5vw 1.5vh 1.5vw', textDecoration: 'none'}}
          >
            COUNT
          </Link>
          <Link 
            to='/documentation/minimum' 
            component={RouterLink}
            sx={{color: '#4D73FF', display: 'block', margin: '0 1.5vw 1.5vh 1.5vw', textDecoration: 'none'}}
          >
            MINIMUM
          </Link>
          <Link 
            to='/documentation/maximum' 
            component={RouterLink} 
            sx={{color: '#4D73FF', display: 'block', margin: '0 1.5vw 1.5vh 1.5vw', textDecoration: 'none'}}
          >
            MAXIMUM
          </Link>
          <Link 
            to='/documentation/mean' 
            component={RouterLink} 
            sx={{color: '#4D73FF', display: 'block', margin: '0 1.5vw 1.5vh 1.5vw', textDecoration: 'none'}}
          >
            MEAN
          </Link>
          <Link 
            to='/documentation/stDev' 
            component={RouterLink} 
            sx={{color: '#4D73FF', display: 'block', margin: '0 1.5vw 1.5vh 1.5vw', textDecoration: 'none'}}
          >
            ST DEV
          </Link>
          <Link 
            to='/documentation/sum' 
            component={RouterLink} 
            sx={{color: '#4D73FF', display: 'block', margin: '0 1.5vw 1.5vh 1.5vw', textDecoration: 'none'}}
          >
            SUM
          </Link> 
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
