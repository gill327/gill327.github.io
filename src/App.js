import logo from './goose.svg';
import water from './water.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={water} className="water left" alt="There's water here, trust me." />
        <p className="floating">
          gill327's site is currently under construction<br/>
          In the meantime, check out his <a href="https://github.com/gill327">github</a> for current and future projects.
        </p>
      </header>
    </div>
  );
}

export default App;
