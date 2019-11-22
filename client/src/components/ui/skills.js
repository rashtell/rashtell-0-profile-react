import React from 'react';
import {skillsProps} from '../../data/data';


const Skills = () =>
    <div
        className={skillsProps.div.className}
    >
        <div
            className={skillsProps.div.div1.className}
        >
            <h2
                className={skillsProps.div.div1.h2.className}
            >
                {skillsProps.div.div1.h2.text}
            </h2>
        </div>
        {skillsProps.div.div2.map((props, i) =>
            <div
                key={i}
                className={props.className}
                data-animate-effect={props["data-animate-effect"]}
            >
                <div
                    className={props.div.className}
                >
                    <h4>
                        {props.div.h4.text}
                    </h4>
                    <div
                        className={props.div.div.className}
                    >
                        <div
                            className={props.div.div.div.className}
                            role={props.div.div.div.role}
                            aria-valuenow={props.div.div.div["aria-valuenow"]}
                            aria-valuemin={props.div.div.div["aria-valuemin"]}
                            aria-valuemax={props.div.div.div["aria-valuemax"]}
                            style={props.div.div.div.style}
                        >
                            <span>
                                {props.div.div.div.span.text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>

export default Skills;
