import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Tutorial from './components/Tutorial';
import Documentation from './components/Documentation';
import Navigation from './components/Navigation';

import Count from './components/Count';
import Minimum from './components/Minimum';
import Maximum from './components/Maximum';
import Mean from './components/Mean';
import StDev from './components/StDev';
import Sum from './components/Sum';
import Quantile from './components/Quantile';
import Median from './components/Median';
import InterQuartileRange from './components/InterQuartileRange';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/documentation' element={<Documentation />}>
          <Route path='count' element={<Count />} />
          <Route path='minimum' element={<Minimum />} />
          <Route path='maximum' element={<Maximum />} />
          <Route path='mean' element={<Mean />} />
          <Route path='stDev' element={<StDev />} />
          <Route path='sum' element={<Sum />} />
          <Route path='quantile' element={<Quantile />} />
          <Route path='median' element={<Median />} />
          <Route path='interquartileRange' element={<InterQuartileRange />} />
        </Route>
      </Routes> 
    </>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
