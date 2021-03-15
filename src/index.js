import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieFinder from './App';

import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieFinder />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
