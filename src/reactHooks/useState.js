import React, { useState } from 'react';

function Counter({initialCount}) {
    /**
     * useState - only be called during initial render
     * 
     * @example 
     *  useState(0)
     *  useState(() => computeExpensiveInitialState(props)) -> lazy initial state
     * @param {array|string|object|boolean|number|function} - initialState
     * @return 
     *  a stateful value
     *  a function to update the value
     */
    const [count, setCount] = useState(initialCount);
    console.log(useState);

    /**
     * setCount - function returned by useState to update the state
     * 
     * @example
     *  setCount(1)
     *  setCount((prevCount) => prevCount + 1)
     * @param {array|string|object|boolean|number|function} - new state
     * @returns new state value
     */
    console.log(setCount);
    
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        {/* If updating the state to the same value as the current state, React won't re-render the children */}
        <button onClick={() => setCount(prevCount => prevCount)}>+</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      </>
    );
  }

  export { Counter };