import React, { useState, useCallback } from 'react';

// Keeps track of all created functions during the app's life 
// Store unique values of any type
const functions = new Set();

export const Counter3 = () => {
    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(0);
  
    // // These two functions will be re-created on every update/re-render
    // const increment1 = () => setC1(c1 + 1);
    // const increment2 = () => setC2(c2 + 1);

    /**
     * useCallback - Cache/memoize the functions - do not create new ones on every rerender, only re-create the one whose dependencies have changed.
     * Usage 
     *  - Do the functions need to re-created on every update
     *   - If yes, don't use useCallbak
     *   - If no, use useCallback
     * 
     * @example
     *  useCallback(function, [dependencies])
     * @param {function}
     * @param {array=} 
     * 
     * @return {function}
     */
    const increment1 = useCallback(() => setC1(c1 + 1), [c1]);
    const increment2 = useCallback(() => setC2(c2 + 1), [c2]);
  
    // Register the functions so we can count them
    functions.add(increment1);
    functions.add(increment2);
  
    return (<div>
      <div> Counter 1 is {c1} </div>
      <div> Counter 2 is {c2} </div>
      <br/>
      <div>
        <button onClick={increment1}>Increment Counter 1</button>
        <button onClick={increment2}>Increment Counter 2</button>
      </div>
      <br/>
      <div> Newly Created Functions: {functions.size - 2} </div>
    </div>)
  }