import React, { useState, useEffect } from 'react';

function Timer(props) {
    const [timer, updateTimer] = useState(0);

    /**
     * useEffect - will be called after the component rendered in the DOM -> the browser has painted
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
    
    return (
      <div>
        {timer}
      </div>
    );
  }

  export { Timer };