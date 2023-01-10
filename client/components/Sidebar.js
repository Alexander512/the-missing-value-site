import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Sidebar = () => {
  return (
    <>
      <nav id='sidebar'>
        <Typography variant='h5' sx={{marginBlockStart: '1.5vh'}} component='h1'>FUNCTION</Typography>
        <hr />
        <Link to='/documentation/count' sx={{color: '#4D73FF', textDecoration: 'none'}} component={RouterLink}>
          COUNT
        </Link>
        <hr />
        <Link to='/documentation/minimum' sx={{color: '#4D73FF', textDecoration: 'none'}} component={RouterLink}>
          MINIMUM
        </Link>
        <hr />
        <Link to='/documentation/maximum' sx={{color: '#4D73FF', textDecoration: 'none'}} component={RouterLink}>
          MAXIMUM
        </Link>
        <hr />
        <Link to='/documentation/mean' sx={{color: '#4D73FF', textDecoration: 'none'}} component={RouterLink}>
          MEAN
        </Link>
        <hr />
        <Link to='/documentation/stDev' sx={{color: '#4D73FF', textDecoration: 'none'}} component={RouterLink}>
          ST DEV
        </Link>
        <hr />
        <Link to='/documentation/sum' sx={{color: '#4D73FF', textDecoration: 'none'}}  component={RouterLink}>
          SUM
        </Link> 
        <hr />
      </nav>
    </>
  );
};

export default Sidebar;
