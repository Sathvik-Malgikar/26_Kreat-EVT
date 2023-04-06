import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GetStandalone from './GetStandalone';
import {BrowserRouter as Router,Link,Route} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
    
  <Router>
    <Route path='/' component={<App></App>} ></Route>
    <Route path='/standalone' component={<GetStandalone></GetStandalone>} ></Route>
  </Router>

  
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
