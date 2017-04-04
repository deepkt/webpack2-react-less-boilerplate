import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const containerEl = document.getElementById('container');
require('./assets/less/app.less');

ReactDOM.render(
  <Home />,
    containerEl,
);
