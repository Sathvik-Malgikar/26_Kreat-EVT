import './App.css'
import React from "react"
import HomePage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return ( 
    <div className="App">
      <Router> 
        <Routes> 
          <Route path='/' element={<HomePage/>}> </Route> 
          <Route path='/auth/login' element={<Login/>}> </Route>
          <Route path='/auth/register' element={<Register/>}> </Route> 
        </Routes> 
    </Router>
    </div>
  )
}


export default App; 

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login"
import Register from './components/register/register'
import HomePage from './components/homepage/homepage'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Router>
    <Routes>
    <Route path = "/"> <HomePage/> </Route>
    <Route path='/register'> <Register/> </Route>
    <Route path='/auth/login'> <Login/> </Route>
    </Routes>
  </Router>

);

export default App;*/
