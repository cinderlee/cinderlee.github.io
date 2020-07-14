import React from 'react';
// import logo from './logo.svg';
import Visualization from './Visualization.js'
import './App.css';

const starsOne = {
  title: "Constellation Part One",
  subtitle: "Visualization",
  link: "https://abilityproject.github.io/Constellation/",
  source: "https://github.com/AbilityProject/Constellation"
}

const starsTwo = {
  title: "Constellation Part Two",
  subtitle: "Visualization",
  link: "/Constellation",
  source: "https://github.com/cinderlee/Constellation"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <img src="pegasus.png" className="starPic"/>
        <a href="/Constellation">Star Visualization</a> */}
        <div className="visualization">
          <Visualization {...starsOne} /> &nbsp;
          <Visualization {...starsTwo} />
        </div>
      </header>
    </div>
  );
}

export default App;
