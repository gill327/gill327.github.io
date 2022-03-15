import React from 'react';
import logo from '../eg.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          gill327's site is currently under construction<br/>
          In the meantime, check out his <a className="App-link" href="https://github.com/gill327">github</a> for current and future projects.
        </p>
      </header>
    </div>
  );
}

export default App;
