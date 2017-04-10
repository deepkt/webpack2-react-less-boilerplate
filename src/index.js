import 'bulma/bulma.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const containerEl = document.getElementById('container');
require('./assets/less/app.scss');

ReactDOM.render(
  <Home />,
    containerEl,
);
