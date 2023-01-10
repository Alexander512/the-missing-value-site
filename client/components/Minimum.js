import React from 'react';

import Typography from '@mui/material/Typography';

const Minimum = () => {
  return (
    <>
      <Typography variant='h5' component='h2'>minimum</Typography>
      <Typography variant='h6' sx={{margin: '1.5vh 0 1.5vh 0'}} component='h3'>description:</Typography>
      <Typography sx={{margin: '0 1.5vw 0 1.5vw'}} variant='body1'>
        function that returns the minimum value in the dataset
      </Typography>
      <Typography variant='h6' sx={{margin: '1.5vh 0 1.5vh 0'}} component='h3'>syntax:</Typography>
      <Typography sx={{margin: '0 1.5vw 0 1.5vw'}} variant='body1'>
        minimum(values, rmNull = false)
      </Typography>
      <Typography variant='h6' sx={{margin: '1.5vh 0 1.5vh 0'}} component='h3'>parameters:</Typography>
      <Typography sx={{margin: '0 1.5vw 0 1.5vw'}} variant='body1'>
        values - an array of values
      </Typography>
      <Typography sx={{margin: '0 1.5vw 0 1.5vw'}} variant='body1'>
        rmNull - an optional argument for removing null values
      </Typography>
      <Typography variant='h6' sx={{margin: '1.5vh 0 1.5vh 0'}} component='h3'>return value:</Typography>
      <Typography sx={{margin: '0 1.5vw 0 1.5vw'}} variant='body1'>
        a single value of type number or NaN
      </Typography>
    </>
  );
};

export default Minimum;
