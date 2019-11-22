import React from 'react';
import {servicesSecProps} from '../../data/data';



export const ServicesSec = () =>
    <section
        className={servicesSecProps.section.className}
    >
        <div
            className={servicesSecProps.div1.className}
        >
            <div
                className={servicesSecProps.div2.className}
            >
                <div
                    className={servicesSecProps.div3.className}
                >
                    <span>
                        {servicesSecProps.subheading}
                    </span>
                    <h2>
                        {servicesSecProps.heading}
                    </h2>
                </div>
            </div>
            <div
                className={servicesSecProps.div4.className}
            >
                {servicesSecProps.services.map((services, i) =>
                    <div
                        key={i}

                        className={servicesSecProps.div5.className}
                    >

                        <div
                            className={servicesSecProps.div6.className}
                        >

                            <div
                                className={servicesSecProps.div7.className}
                            >
                                <span
                                    className={services.span.className}
                                >
                                </span>
                            </div>
                            <div
                                className={servicesSecProps.div8.className}
                            >
                                {services.h3.map((h3, i) =>
                                    <h3
                                        key={i}
                                        className={h3.className}
                                    >
                                        {h3.content}
                                    </h3>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
