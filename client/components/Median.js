import React from 'react';

import Typography from '@mui/material/Typography';

const Median = () => {
  return (
    <>
      <Typography 
        variant='h1' 
        component='h1' 
        sx={{fontSize: 'clamp(1.25em, 1.25em + 3vw, 3em)'}}
      >
        the-missing-value
      </Typography>
      <Typography 
        variant='h5' 
        component='h2' 
        sx={{margin: '1.5vh 0 0 1.5vw'}}
      >
        the median function
      </Typography>
      <Typography 
        variant='h6' 
        component='h3' 
        sx={{margin: '1.5vh 0 1.5vh 3vw'}}
      >
        description:
      </Typography>
      <Typography 
        variant='body1' 
        sx={{margin: '0 1.5vw 0 4.5vw'}}
      >
        function that returns the median value of the dataset
      </Typography>
      <Typography 
        variant='h6' 
        component='h3' 
        sx={{margin: '1.5vh 0 1.5vh 3vw'}}
      >
        syntax:
      </Typography>
      <Typography 
        variant='body1' 
        sx={{margin: '0 1.5vw 0 4.5vw'}}
      >
        median(values, rmNull = false)
      </Typography>
      <Typography 
        variant='h6' 
        component='h3' 
        sx={{margin: '1.5vh 0 1.5vh 3vw'}}
      >
        parameters:
      </Typography>
      <Typography 
        variant='body1' 
        sx={{margin: '0 1.5vw 0 4.5vw'}}
      >
        values - an array of values
      </Typography>
      <Typography 
        variant='body1' 
        sx={{margin: '0 1.5vw 0 4.5vw'}}
      >
        rmNull - an optional argument for removing null values
      </Typography>
      <Typography 
        variant='h6' 
        component='h3' 
        sx={{margin: '1.5vh 0 1.5vh 3vw'}}
      >
        return value:
      </Typography>
      <Typography 
        variant='body1' 
        sx={{margin: '0 1.5vw 0 4.5vw'}}
      >
        a single value of type number or NaN
      </Typography>
    </>
  );
};

export default Median;
