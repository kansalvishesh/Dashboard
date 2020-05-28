import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './container/dashboard';
import Barchart from './components/barchart';
import AreaChart from './components/areachart';
import Stack from './components/stackedBar';

const app = (
  <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/chart" component={Barchart} />
          <Route exact path="/chart2" component={Stack} />
      </div>
  </Router>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();