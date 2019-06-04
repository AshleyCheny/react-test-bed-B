import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Counter } from './reactHooks/useState';
import { Timer } from './reactHooks/useEffect';
import { Counter2 } from './reactHooks/useReducer';
import { Counter3 } from './reactHooks/useCallback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <div>
        <Counter initialCount={0} />
        <Timer />
        <Counter2 />
        <Counter3 />
      </div>
    </div>
  );
}

export default App;
