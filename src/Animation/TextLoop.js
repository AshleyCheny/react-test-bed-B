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
        </Anime>
    );
}

/**
 * Use react-animation-components to implement the intro animation
 */
function TextLoopComp() {
    // create/update data here
    // enterOpactiy: end transition opacity
    // exitOpacity: start transition opacity
    const initialOpacity = {
        level1Opacity: { enterOpacity: 0, exitOpacity: 1}, // fade out animation
        level2Opacity: { enterOpacity: 1, exitOpacity: 0.4}, // fade in to level 1 animation
        level3Opacity: { enterOpacity: 0.4, exitOpacity: 0.15}, // fade in to leve 2 animation
        level4Opacity: { enterOpacity: 0.15, exitOpacity: 0}, // fade in to level 3 animation
        level5Opacity: { enterOpacity: 0, exitOpacity: 0} // hide
    }

    const [opacity, updateOpacity] = useState(initialOpacity);
    const [timer, updateTimer] = useState(0);
    let opacity2 = {...initialOpacity.level2Opacity};
    let opacity3 = {...initialOpacity.level3Opacity};
    let opacity4 = {...initialOpacity.level4Opacity};
    let opacity5 = {...initialOpacity.level5Opacity};

    useEffect(() => {
        console.log(timer);
        // update opacity state to control the animation based on timing
        if (timer < 4) {
            // after mount, wait for 1s to finish the animation, and then update the opacity and timer for next move
            setTimeout(() => {
                if (timer === 0) {
                    opacity2 = {...initialOpacity.level2Opacity};
                    opacity3 = {...initialOpacity.level3Opacity};
                    opacity4 = {...initialOpacity.level4Opacity}
                }
                if (timer === 1) {
                    opacity2 = {...initialOpacity.level1Opacity};
                    opacity3 = {...initialOpacity.level2Opacity};
                    opacity4 = {...initialOpacity.level3Opacity}
                    opacity5 = {...initialOpacity.level4Opacity}
                }

                if (timer === 2) {
                    opacity3 = {...initialOpacity.level1Opacity};
                    opacity4 = {...initialOpacity.level2Opacity}
                    opacity5 = {...initialOpacity.level3Opacity}
                }
                if (timer === 3) {
                    opacity4 = {...initialOpacity.level1Opacity}
                    opacity5 = {...initialOpacity.level2Opacity}
                }
                if (timer === 4) {
                    opacity5 = {...initialOpacity.level1Opacity}
                }
                updateOpacity({
                    ...initialOpacity,
                    level2Opacity: {...opacity2},
                    level3Opacity: {...opacity3},
                    level4Opacity: {...opacity4},
                    level5Opacity: {...opacity5},
                });
                updateTimer(timer + 1);
            }, 1000);
        }
    });

    // use data here
    return (
        <div className='text-loop-wrapper'>
            {/* first one, delay 100ms, then fade out*/}
            <FadeTransform
                in
                transformProps={{
                    enterTransform: `translateY(-100px)`,
                }}
                delay={100}
                fadeProps={opacity.level1Opacity}>
                <div className='text-loop-content'>First one - 1</div>
            </FadeTransform>
            {/* second one, delay 500ms, then fade in to level 1, wait for 1s, fade out*/}
            <FadeTransform
                in
                transformProps={{
                    enterTransform: `translateY(-${timer * 100}px)`
                }}
                fadeProps={opacity.level2Opacity}>
                <div className='text-loop-content'>Inspired - 2</div>
            </FadeTransform>
            {/* third one, delay 500ms, then fade in to level 2, wait for 1s, then fade to level1, wait for 1s, fade out */}
            <FadeTransform
                in
                transformProps={{
                    enterTransform: `translateY(-${timer * 100}px)`
                }}
                fadeProps={opacity.level3Opacity}>
                <div className='text-loop-content'>Design - 3</div>
            </FadeTransform>
            <FadeTransform
                    in
                    transformProps={{
                        enterTransform: `translateY(-${timer * 100}px)`
                    }}
                    fadeProps={opacity.level4Opacity}
                >
                <div className='text-loop-content'>Development - 4</div>
            </FadeTransform>
            <FadeTransform
                    in
                    transformProps={{
                        enterTransform: `translateY(-${timer * 100}px)`
                    }}
                    fadeProps={opacity.level5Opacity}
                >
                <div className='text-loop-content'>We are Code Particle - 5</div>
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
                    <div>I transition from `-100px` horizontally of my initial positon and to 0.85 opacity when `in` is `true`</div>
                </FadeTransform>
            </Loop> */}
            {/* <Stagger in>
                {items.map(
                    item => (
                        <Fade>
                            <div>Each {item} will transition in with an incrementally larger delay than the previous</div>
                        </Fade>
                    )
                )}
            </Stagger> */}

            {/* <Stagger chunk={4} in>
                {items.map(
                    item => (
                        <Fade>
                            <div>
                            Each {item} will increment in segments of 4.
                            First is 0, Second is 100, Third is 200, Fourth is 0, fifth is 100, and so on
                            </div>
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
                <div>I transition from `-100px` horizontally of my initial positon and to 0.85 opacity when `in` is `true`</div>
                </FadeTransform>
            </Loop> */}
            {/* <Transform enterTransform="translateY(100px)" in>
                <div>I'm transitioning from my initial position to 100px right when `in` is `true`</div>
            </Transform> */}

            {/* <Transform enterTransform="translateY(100px)" exitTransform="translateY(-100px)" in>
                <div>
                    I'm 100px to the left of my initial position and
                    I transition 100px right of my initial when `in` is `true`
                </div>
            </Transform> */}
        </div>
    );
}

export { 
    TextLoopAnime,
    TextLoopComp
};