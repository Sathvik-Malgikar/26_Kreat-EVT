import React from 'react';
import ReactDOM from 'react-dom/client';

import './output.css';
import App from './App';
import GetStandalone from './GetStandalone';
import {BrowserRouter as Router,Link,Route, Routes} from "react-router-dom"
import Register from './Register';
import Exchange from './Exchange';
import UserPage from './UserPage.jsx';
import login   from './login.jsx';
import FindAssets from './FindAssets.jsx';
import HomePage from './HomePage';
import CreateSpace from './CreateSpace';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>

    <Route path='/' element={<HomePage></HomePage>} ></Route>
    <Route path = '/createspace' element = {<CreateSpace></CreateSpace>}></Route>
    <Route path='/Exchange' element={<Exchange></Exchange>} ></Route>
    <Route path='/Register' element={<Register></Register>} ></Route>
    <Route path='/FindAssets' element={<FindAssets></FindAssets>} ></Route>
    <Route path='/UserPage' element={<UserPage></UserPage>} ></Route>
    <Route path='/login' element={<login></login>} ></Route>
    <Route path='/standalone' element={<GetStandalone></GetStandalone>} ></Route>
    </Routes>
  </Router>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
