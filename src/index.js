import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import './index.css';
// import App from './App';
// import App from './Reactjs/App'
// import App from './TodoApp/App'
// import App from './TodoAppPractice/App'
// import App from './ShoppingCart/App'
// import RouteExample from './RoutingExample/App'
// import App from './RouterUrlParameters/App'


// import App from './Axios/App'
import App from './WheatherApp/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Router>
    <RouteExample/>
    
     <App/>
    </Router> */}
   
   

  </React.StrictMode>
  
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
