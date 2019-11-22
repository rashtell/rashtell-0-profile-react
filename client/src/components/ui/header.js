import React, { Component } from 'react';
import {headerData} from '../../data/data';


export class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <header>
                <div
                    className={headerData.div1.className}
                >
                    <div
                        className={headerData.div2.className}
                    >
                        <div
                            className={headerData.div3.className}
                        >
                            <div
                                className={headerData.div4.className}
                            >
                                <a
                                    className={headerData.a1.className}
                                    href={headerData.a1.href}>
                                    <span
                                        className={headerData.span.className}
                                        style={headerData.span.style}
                                    >
                                    </span>
                                    {headerData.name}
                                </a>
                            </div>
                            <a
                                href={headerData.a2.href}
                                className={headerData.a2.className}
                            >
                                <i>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
