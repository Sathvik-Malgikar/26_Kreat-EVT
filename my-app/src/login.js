import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import "./login.css"


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server here
  };

  return (
    <center>
    <div>
      <h2 className='text-6xl'>LOGIN</h2><br></br>
      <form onSubmit={handleSubmit}>
        <div className='login'>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div><br></br>
        <div className='login'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div><br></br>
        <Link to = '/createspace'>
        <button type="submit" className='bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-blue-500 rounded'>Login</button>
        </Link>
      </form>
    </div>
    </center>
  );
};

export default Login;