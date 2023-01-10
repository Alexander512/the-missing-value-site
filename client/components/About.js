import React from 'react';

import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <main id='flexContainerAbout'>
      <Typography variant='h1' component='h1' sx={{fontSize: 'clamp(1.25em, 1.25em + 3vw, 3em)'}}>
        the-missing-value
      </Typography>
      <Typography variant='body1' sx={{margin: '3vh 1.5vw 3vh 1.5vw', textAlign: 'center'}}>
        A JavaScript library for performing statistics with optional removal of missing values...
      </Typography>
    </main>
  );
};

export default About;
