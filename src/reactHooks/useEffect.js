import React, { useState, useEffect } from 'react';

/**
 * 1. Basic Usage
 * @param {*} props 
 */
function Timer(props) {
    // create/update data here
    const [timer, updateTimer] = useState(0);

    /**
     * useEffect - will be called after the component rendered in the DOM -> the browser has painted
     *           - combines componentDidMount, componentDidUpdate, and componentWillUnmount
     * 
     * @example
     *  useEffect(didUpdateFunction, array)
     * 
     * @param {function} - will be called after component rendered/updated in the DOM
     * @param {array=} - array of data that the effect function depends on
     */
    useEffect(() => {
        // Timing of effects
        // function will be called after rendered in DOM
        // componentDidMount -> wait for 1s -> updateTimer -> state change -> component update
        // componentDidUpdate -> wait for 1s -> ...
        setTimeout(() => updateTimer((prevTimer) => prevTimer + 1), 1000)
        
        // Cleaning up an effect
        // clean up an effect when the component unmounted from the DOM(leaves the screen)
        // OR if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect. -> will be ran on every update
        return () => {
            clearTimeout();
        }
        
        // Conditionally firing an effect - optimization
        // The effect function will only be called when update changes
        // props.update is always undefined, hence the timer won't be updated
        // include all the values that the effect is using
        // pass an empty array([]) if only want effect to run once(on mount)
    }, [props.update]);
    
    // use data here
    return (
      <div>
        {timer}
      </div>
    );
  }

/**
 * 2. How to fetch data from an API with hooks
 */
function FetchApi() {
  // 1. define the states
  const [hasError, setErrors] = useState(false);
  const [response, setResponse] = useState({});

  /**
   * 4. async function to make the API call
   * use the functions got above to update the states
   */
  async function fetchData() {
    const res = await fetch("https://google.com");
    res
      .json()
      .then(res => setResponse(res))
      .catch(err => setErrors(err));
  }

  // 3. update the states
  useEffect(() => {
    // call fetchData function when component did mount
    fetchData();
  }, []); // fetch once(on mount)

  // 2. use the states
  return (
    <div>
      {hasError}
      {response}
    </div>
  );
}

  export { 
    Timer,
    FetchApi
  };