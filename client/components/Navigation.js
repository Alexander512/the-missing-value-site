import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';

const Navigation = () => {
  return (
    <nav>
      <Link to='/' sx={{color: '#4D73FF', margin: '0 1.5vw 0 1.5vw', textDecoration: 'none'}} component={RouterLink}>
        ABOUT
      </Link>
      <Link to='/documentation' sx={{color: '#4D73FF', margin: '0 1.5vw 0 1.5vw', textDecoration: 'none'}} component={RouterLink}>
        DOCUMENTATION
      </Link>
    </nav>
  );
};

export default Navigation;
