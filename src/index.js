import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto/latin-ext-300.css';
import 'fontsource-roboto/latin-ext-400.css';
import 'fontsource-roboto/latin-ext-500.css';
import 'fontsource-roboto/latin-ext-700.css';

import Typography from '@material-ui/core/Typography';

import Rose from './Rose.js';

ReactDOM.render(
  <React.StrictMode>
    <Typography variant={'h2'}>Polar Roses</Typography>
    <Rose></Rose>
  </React.StrictMode>,
  document.getElementById('root')
);
