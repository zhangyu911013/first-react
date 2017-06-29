import 'babel-polyfill';
import 'bootstrap/scss/bootstrap.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import Deskmark from 'components/Deskmark';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
  <Deskmark/>, app);
