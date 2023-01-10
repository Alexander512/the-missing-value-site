import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

import Typography from '@mui/material/Typography';

const Documentation = () => {
  return (
    <div id='flexContainerDocumentation'>
      <Sidebar />
      <main className='function'>
        <Outlet />
      </main>
    </div>
  );
};

export default Documentation;
