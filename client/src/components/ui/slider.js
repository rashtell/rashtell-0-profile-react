import React from 'react';
import {sliderData} from '../../data/data';


export const Slider = () => {
    return (
        <section
            className={sliderData.section.className}
        >
            {
                sliderData.info.map((slider, i) => {
                    return (
                        <div
                            key={i}
                            className={sliderData.div1.className}
                        >
                            <div
                                className={sliderData.div2.className}
                            >
                            </div>
                            <div
                                className={sliderData.div3.className}
                            >
                                <div
                                    className={sliderData.div4.className}
                                    data-scrollax-parent={sliderData.div4["data-scrollax-parent"]}
                                >
                                    <div
                                        className={sliderData.div5.className}
                                        data-scrollax={sliderData.div5["data-scrollax"]}
                                    >
                                        <p>
                                            <a
                                                href={sliderData.a.href}
                                                className={sliderData.a.className}
                                            >
                                                {slider.info1}
                                            </a>
                                        </p>
                                        <h1
                                            className={sliderData.h1.className} data-scrollax={sliderData.h1["data-scrollax"]}
                                        >
                                            {slider.info2}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
        </section>

    );
}
