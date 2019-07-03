import React, { useState, useEffect } from 'react';
import Anime from 'react-anime';
import { Fade, Loop, Transform, FadeTransform, Stagger } from 'react-animation-components';
const items = ['first', 'second', 'third', 'fourth', 'fifth'];

function TextLoopAnime(props) {
    // create/update data here
    const [timer, updateTimer] = useState(0);

    // use data here
    return (
        <Anime
            opacity={[0, 1]}
            delay={(e, i) => i * 100}
            translateY={[-64, 0]}>
            <div className="blue">blue</div>
            <div className="green">green</div>
            <div className="red">red</div>
        </Anime>
    );
}

function TextLoopComp(props) {
    // create/update data here
    const [translateY, updateTranslate] = useState('-100px');
    const [opacity2, updateOpacity2] = useState({ enterOpacity: 1, exitOpacity: 0.4});
    const [opacity3, updateOpacity3] = useState({ enterOpacity: 0.4, exitOpacity: 0.15});
    const [opacity4, updateOpacity4] = useState({ enterOpacity: 0, exitOpacity: 0});
    const [opacity5, updateOpacity5] = useState({ enterOpacity: 0, exitOpacity: 0});
    const [timer, updateTimer] = useState(0);

    useEffect(() => {
        console.log(timer);
        
        if (timer < 5) {
            // after mount, wait for 1s to finish the animation, and then update the opacity and timer
            setTimeout(() => {
                if (timer === 0) {
                    // second position opacity
                    updateOpacity3({
                        enterOpacity: 0.4,
                        exitOpacity: 0.15
                    });
                    updateOpacity4({
                        enterOpacity: 0.15,
                        exitOpacity: 0.4
                    });
                } 
                if (timer === 1) {
                    // first position opacity
                    updateOpacity2({
                        enterOpacity: 0,
                        exitOpacity: 1
                    });
                    // first position opacity
                    updateOpacity3({
                        enterOpacity: 1,
                        exitOpacity: 0.4
                    });
                    // second position opacity
                    updateOpacity4({
                        enterOpacity: 0.4,
                        exitOpacity: 1
                    });
                    updateOpacity5({
                        enterOpacity: 0.15,
                        // exitOpacity: 0.4
                    });
                }

                if (timer === 2) {
                    // exit opacity setting
                    updateOpacity3({
                        enterOpacity: 0,
                        exitOpacity: 1
                    });
                    updateOpacity4({
                        enterOpacity: 1,
                        // exitOpacity: 1
                    });
                    updateOpacity5({
                        enterOpacity: 0.4,
                        exitOpacity: 1
                    });
                }
                if (timer === 3) {
                    updateOpacity4({
                        enterOpacity: 0,
                        // exitOpacity: 1
                    });
                    updateOpacity5({
                        enterOpacity: 1,
                        // exitOpacity: 1
                    });
                }
                if (timer === 4) {
                    updateOpacity5({
                        enterOpacity: 0,
                        // exitOpacity: 1
                    });
                }
                updateTimer(timer + 1);
            }, 1000);
        }
    });

    // use data here
    return (
        <div className='text-loop-wrapper'>
            {/* first one, fade out at 0 */}
            <FadeTransform
                in
                transformProps={{
                    enterTransform: `translateY(-100px)`,
                    // exitTransform: 'translateY(-200px)'
                }}
                delay={0}
                fadeProps={{
                    enterOpacity: 0, // end transition opacity
                    exitOpacity: 1, // start transition opacity
                }}>
                <h1>First one - 1</h1>
            </FadeTransform>
            {/* second one, fade in at 0, fade out at 1*/}
            <FadeTransform
                in
                transformProps={{
                    enterTransform: `translateY(-${timer * 100}px)`,
                    // exitTransform: 'translateY(-300px)'
                }}
                fadeProps={opacity2}>
                <h1>Inspired - 2</h1>
            </FadeTransform>
            {/* third one,fad in at 0, */}
            <FadeTransform
                in
                transformProps={{
                    enterTransform: `translateY(-${timer * 100}px)`,
                    // exitTransform: 'translateY(-300px)'
                }}
                fadeProps={opacity3}>
                <h1>Design - 3</h1>
            </FadeTransform>
            <FadeTransform
                    in
                    transformProps={{
                        enterTransform: `translateY(-${timer * 100}px)`,
                        // exitTransform: 'translateY(100px)'
                    }}
                    fadeProps={opacity4}
                >
                <h1>Development - 4</h1>
            </FadeTransform>
            <FadeTransform
                    in
                    transformProps={{
                        enterTransform: `translateY(-${timer * 100}px)`,
                        // exitTransform: 'translateY(100px)'
                    }}
                    fadeProps={opacity5}
                >
                <h1>We are Code Particle - 5</h1>
            </FadeTransform>
        {/* <Loop in iterations={5.5}>
                <FadeTransform
                        in={false}
                        transformProps={{
                            enterTransform: 'translateY(100px)',
                            exitTransform: 'translateY(-100px)'
                        }}
                        fadeProps={{
                            enterOpacity: 1,
                            exitOpacity: 0
                        }}
                    >
                    <h1>I transition from `-100px` horizontally of my initial positon and to 0.85 opacity when `in` is `true`</h1>
                </FadeTransform>
            </Loop> */}
            {/* <Stagger in>
                {items.map(
                    item => (
                        <Fade>
                            <h1>Each {item} will transition in with an incrementally larger delay than the previous</h1>
                        </Fade>
                    )
                )}
            </Stagger> */}

            {/* <Stagger chunk={4} in>
                {items.map(
                    item => (
                        <Fade>
                            <h1>
                            Each {item} will increment in segments of 4.
                            First is 0, Second is 100, Third is 200, Fourth is 0, fifth is 100, and so on
                            </h1>
                        </Fade>
                    )
                )}
            </Stagger> */}

            {/* <Loop in iterations={5.5}>
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'translateY(-100px)'
                    }}
                    fadeProps={{
                        enterOpacity: 0.85,
                    }}
                >
                <h1>I transition from `-100px` horizontally of my initial positon and to 0.85 opacity when `in` is `true`</h1>
                </FadeTransform>
            </Loop> */}
            {/* <Transform enterTransform="translateY(100px)" in>
                <h1>I'm transitioning from my initial position to 100px right when `in` is `true`</h1>
            </Transform> */}

            {/* <Transform enterTransform="translateY(100px)" exitTransform="translateY(-100px)" in>
                <h1>
                    I'm 100px to the left of my initial position and
                    I transition 100px right of my initial when `in` is `true`
                </h1>
            </Transform> */}
        </div>
    );
}

export { 
    TextLoopAnime,
    TextLoopComp
};