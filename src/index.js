import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IRouter from '../src/router';
// import Admin from './admin'
// import Irouter from './router-demo/router/router';


ReactDOM.render(<IRouter />, document.getElementById('root'));
// ReactDOM.render(<Admin />, document.getElementById('root'));
// ReactDOM.render(<Irouter />, document.getElementById('root'));
serviceWorker.unregister();
