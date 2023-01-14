import React from 'react';

import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <main>
      <Typography 
        variant='h1' 
        component='h1' 
        sx={{fontSize: 'clamp(1.25em, 1.25em + 3vw, 3em)', margin: '80px 1.5vw 0 1.5vw'}}
      >
        the-missing-value
      </Typography>
      <Typography 
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 0 1.5vw'}}
      >
        A JavaScript library for descriptive statistics with optional removal of missing values...
      </Typography>
    </main>
  );
};

export default About;
