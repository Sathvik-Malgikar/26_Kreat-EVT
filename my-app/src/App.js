
import { Link } from 'react-router-dom';
import './output.css';
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/standalone"} >
          <p>Get standalone software</p>
        </Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
