import React from 'react';
import { Outlet } from 'react-router-dom';

const Documentation = () => {
  return (
    <main id='documentation'>
      <Outlet />
    </main>
  );
};

export default Documentation;
