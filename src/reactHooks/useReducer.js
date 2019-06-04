import React, { useReducer } from 'react';

const initialCount = 0; // 3

/**
 * Define a init function
 * Usage: will be passed as an argument of useReducer function
 * @param {} initialCount 
 */
function init(initialCount) { // 4
    return { count: initialCount };
}

/**
 * Define: a reducer function
 * Usage: will be passed as an argument of useReducer function 
 * @param {*} state 
 * @param {*} action - object
 * 
 * @return new state based on the action type
 */
function reducer(state, action) { // 2
  switch (action.type) {
    case 'increment':
      // if the state value is the same as previous state, React won't update the component
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter2() {
    /**
     * useReducer - preferable to useState when the state is more complex and involves sub-values
     * 
     * @example
     *  useReducer(reducer, initialArg, init);
     * 
     * @param {function} reducer - a function accepts two parameters(state/action) and returns the new state
     * @param {object|array|...} initialState
     * @param {function=} init - implement lazy initialization, initial state will be set to init(initialArg)
     * 
     * @returns 
     *  state
     *  dispatch - use to update the state
     */
    const [state, dispatch] = useReducer(reducer, initialCount, init); // 1
    // console.log(state);
    // console.log(dispatch);

    // 5
    return (
        <>
        <div>Use reducer example: {state.count}</div>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button> 
        </>
  );
}

export { Counter2 };