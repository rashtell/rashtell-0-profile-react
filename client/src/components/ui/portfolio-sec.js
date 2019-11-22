import React from 'react';
import {portfolioSecProps} from '../../data/data';



export const PortfolioSec = () => {
    return (
        <section
            className={portfolioSecProps.section.className}
        >
            <div
                className={portfolioSecProps.section.div.className}
            >
                <div
                    className={portfolioSecProps.section.div.div.className}
                >
                    <div
                        className={portfolioSecProps.section.div.div.div1.className}
                    >
                        <span>
                            {portfolioSecProps.section.div.div.div1.span.text}
                        </span>
                        <h2>
                        {portfolioSecProps.section.div.div.div1.h2.text}
                        </h2>
                    </div>
                </div>

                <div
                    className={portfolioSecProps.section.div.div.div2.className}
                >
                    {portfolioSecProps.section.div.div.div2.var.map((props, i) => {
                        return (
                            <div
                                key={i}
                                className={portfolioSecProps.section.div.div.div2.div.className}
                                data-scrollax-parent={portfolioSecProps.section.div.div.div2.div["data-scrollax-parent"]}
                                >
                                <a
                                    href={props.a1href}
                                    className={props.a1ClassName}
                                    style={props.style}
                                    data-scrollax={portfolioSecProps.section.div.div.div2.div["data-scrollax-parent"]}
                                >
                                    <div
                                        className={portfolioSecProps.section.div.div.div2.div.a.div.className}
                                    >
                                        <span
                                            className={portfolioSecProps.section.div.div.div2.div.a.div.span.className}
                                        >
                                        </span>
                                    </div>
                                </a>
                                <div className={props.divClassName}>
                                    <h4
                                        className={portfolioSecProps.section.div.div.div2.div.div.h4.className}
                                    >
                                        {props.h4Text}
                                    </h4>
                                    <h2
                                        className={portfolioSecProps.section.div.div.div2.div.div.h2.className}
                                    >
                                        <a href={props.a2href}
                                        >
                                            {props.a2Text}
                                        </a>
                                    </h2>
                                    <p>
                                        {props.pText}
                                    </p>
                                    <p>
                                        <a
                                            href={props.a3href}
                                        >
                                            {props.a3Text}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
