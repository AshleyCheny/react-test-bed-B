import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Counter } from './reactHooks/useState';
import { Timer } from './reactHooks/useEffect';
import { Counter2 } from './reactHooks/useReducer';
import { Counter3 } from './reactHooks/useCallback';
import { TextLoopAnime, TextLoopComp } from './Animation/TextLoop';

function App() {
  return (
    <div className="App">
      <div className='text-loop'><TextLoopComp /></div>
      <div className='text-loop'><TextLoopAnime /></div>
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
