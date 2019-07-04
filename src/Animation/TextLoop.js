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
            duration={1000}
            // delay={(el, index) => index * 240}
            translateY='-100px'>
            <div className="blue"/>
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
    // custom opacity for each level
    const initialOpacity = {
        level1Opacity: { enterOpacity: 0, exitOpacity: 1}, // fade out animation
        level2Opacity: { enterOpacity: 1, exitOpacity: 0.4}, // fade in to level 1 animation
        level3Opacity: { enterOpacity: 0.4, exitOpacity: 0.15}, // fade in to leve 2 animation
        level4Opacity: { enterOpacity: 0.15, exitOpacity: 0}, // fade in to level 3 animation
        level5Opacity: { enterOpacity: 0, exitOpacity: 0} // hide
    }

    const [opacity, updateOpacity] = useState(initialOpacity);
    const [timer, updateTimer] = useState(0);
    let newOpacity = {...initialOpacity};

    useEffect(() => {
        console.log(timer);
        // update opacity state to control the animation based on timing
        // stop animation after 4s
        if (timer < 4) {
            // after mount, wait for 1s to finish the animation, and then update the opacity and timer for next move
            setTimeout(() => {
                if (timer === 1) {
                    newOpacity = {
                        ...opacity,
                        level2Opacity:  {...initialOpacity.level1Opacity},
                        level3Opacity: {...initialOpacity.level2Opacity},
                        level4Opacity: {...initialOpacity.level3Opacity},
                        level5Opacity: {...initialOpacity.level4Opacity},
                    }
                }

                if (timer === 2) {
                    newOpacity = {
                        ...opacity,
                        level3Opacity:  {...initialOpacity.level1Opacity},
                        level4Opacity: {...initialOpacity.level2Opacity},
                        level5Opacity: {...initialOpacity.level3Opacity},
                    }
                }
                if (timer === 3) {
                    newOpacity = {
                        ...opacity,
                        level4Opacity: {...initialOpacity.level1Opacity},
                        level5Opacity: {...initialOpacity.level2Opacity},
                    }
                }
                if (timer === 4) {
                    // trigger other action for last one like close the page, open the side panel etc
                    newOpacity = {
                        ...opacity,
                        level5Opacity: {...initialOpacity.level1Opacity},
                    }
                }
                updateOpacity({...newOpacity});
                updateTimer(timer + 1);
            }, 1000);
        }
    });

    const renderListItem = () => {
        return items.map((item, index) => {
            return (
                <FadeTransform
                    key={index}
                    in
                    transformProps={{
                        enterTransform: `translateY(-${index > 0 ? timer * 100 : 100}px)`,
                    }}
                    delay={index > 0 ? null: 100}
                    // update props to update css for animation
                    fadeProps={opacity[`level${index + 1}Opacity`]}> 
                    <div className='text-loop-content'>{item}</div>
                </FadeTransform>
            )
        });
    }

    // use data here
    return (
        <div className='text-loop-wrapper'>
            {renderListItem()}
            {/* first one, delay 100ms, then fade out*/}
            {/* second one, delay 500ms, then fade in to level 1, wait for 1s, fade out*/}
            {/* third one, delay 500ms, then fade in to level 2, wait for 1s, then fade to level1, wait for 1s, fade out */}
            
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