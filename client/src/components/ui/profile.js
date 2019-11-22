import React from 'react'
import Experience from './experience';
import Education from './education';
import {profileProps} from '../../data/data';



const Profile = () =>
    <div
        className={profileProps.div.className}
    >
        <div
            className={profileProps.div.div.className}
        >
            <div
                className={profileProps.div.div.div.className}
            >
                <h2
                    className={profileProps.div.div.div.h2.className}
                >
                    {profileProps.div.div.div.h2.text}
                </h2>

                <h4
                    className={profileProps.div.div.div.h4.className}
                >
                    {profileProps.div.div.div.h4.text}
                </h4>

                <p>
                    {profileProps.div.div.div.p.text}
                </p>

                <div
                    className={profileProps.div.div.div.div.className}
                >
                    {profileProps.div.div.div.div.div.map((div, i) =>
                        <div
                            key={i}
                            className={div.className}
                        >
                            {div.p.map((p, i) =>
                                <p
                                    key={i}
                                >
                                    <strong>
                                        {p.strong.text}
                                    </strong>
                                    <span>
                                        {p.span.text}
                                    </span>
                                </p>

                            )}
                        </div>
                    )}
                </div>
            </div>

            <Experience />

            <Education />

        </div>

    </div>

export default Profile;
