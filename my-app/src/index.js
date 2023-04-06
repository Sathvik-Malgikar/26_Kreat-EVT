import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GetStandalone from './GetStandalone';
import {BrowserRouter as Router,Link,Route, Routes} from "react-router-dom"
import Register from './Register';
import HomePage from './HomePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>

    <Route path='/' element={<HomePage/>} ></Route>
    {/* <Route path = "/home" element = {<HomePage/>}></Route> */}
    <Route path='/Register' element={<Register></Register>} ></Route>
    <Route path='/standalone' element={<GetStandalone></GetStandalone>} ></Route>
    </Routes>
  </Router>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
