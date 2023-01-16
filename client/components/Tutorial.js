import React from 'react';

import Typography from '@mui/material/Typography';

const Tutorial = () => {
  return (
    <>
      <Typography
        variant='h1'
        component='h1'
        sx={{fontSize: 'clamp(1.25em, 1.25em + 3vw, 3em)', margin: '80px 1.5vw 0 1.5vw'}}
      >
        the-missing-value
      </Typography>
      <Typography 
        variant='h5' 
        component='h2'
        sx={{margin: '1.5vh 0 1.5vh 3vw'}}
      >
        Tutorial
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 4.5vw'}}
      >
        Destructure the necessary functions from the library...
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 6vw'}}
      >
        {`const { mean } = require('the-missing-value.js');`}
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 4.5vw', maxInlineSize: '65ch'}}
      >
        The functions accept an array as the first 
        argument and have a second optional argument, rmNull,
        which has a default value of false.
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 6vw'}}
      >
        mean(values, rmNull = false)
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 4.5vw', maxInlineSize: '65ch'}}
      >
        When the rmNull argument is false, the function will
        return NaN if the array of values passed in as the first
        argument contains a null value. By setting rmNull to true,
        null values are not included and the calculated value is returned.
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 4.5vw'}}
      >
        Using the following array as an example:
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 6vw'}}
      >
        &gt; const intArray = [ 1, 2, 3, 4, 5 ];
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 6vw'}}
      >
        &gt; mean(intArray); // returns 3
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 4.5vw'}}
      >
        If a missing value is included in the array:
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 6vw'}}
      >
        &gt; const intMissing = [ 1, 2, null, 4, 5 ];
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 6vw'}}
      >
        &gt; mean(intMissing); // returns NaN
      </Typography>
      <Typography
        variant='body1'
        sx={{margin: '1.5vh 1.5vw 1.5vh 6vw'}}
      >
        &gt; mean(intMissing, rmNull = true); // returns 3
      </Typography>
    </>
  );
};

export default Tutorial;
