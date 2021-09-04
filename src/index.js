import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './scss/main.scss';
import App from './App/App';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);