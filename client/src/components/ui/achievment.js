import React from 'react';
import { achievementProps } from '../../data/data';


export const Achievment = () => {
    return (
        <section
            className={achievementProps.section.className}
            id={achievementProps.section.id}>
            <div
                className={achievementProps.section.div.className}
            >
                <div
                    className={achievementProps.section.div.div1.className}>
                    <div
                        className={achievementProps.section.div.div1.div.className}
                    >
                        <span>{achievementProps.section.div.div1.div.span.text}
                        </span>
                        <h2>                        {achievementProps.section.div.div1.div.h2.text}
                        </h2>
                    </div>
                </div>

                {achievementProps.var.map((props, i) => {
                    return (
                        <div
                            key={i}
                            className={props.divClass}
                        >
                            <div
                                className={achievementProps.section.div.div2.div.className}>
                                <div
                                    className={achievementProps.section.div.div2.div.div.className}
                                >
                                    <div
                                        className={achievementProps.section.div.div2.div.div.div.className}
                                    >
                                        <span className={achievementProps.section.div.div2.div.div.div.span.className}
                                        >
                                            {props.spanText}
                                        </span>
                                        <strong
                                            className={achievementProps.section.div.div2.div.div.div.strong.className}
                                            data-number={props["data-number"]}
                                        >{achievementProps.section.div.div2.div.div.div.strong.text}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>

    );
}
