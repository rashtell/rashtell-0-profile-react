import React from 'react';
import { contactSecProps } from '../../data/data';


export const ContactSec = () =>
    <section
        className={contactSecProps.section.className}
    >
        <div
            className={contactSecProps.section.div.className}
        >
            <div
                className={contactSecProps.section.div.div.className}
            >
                <div
                    className={contactSecProps.section.div.div.div1.className}
                >
                    <h2
                        className={contactSecProps.section.div.div.div1.h2.className}
                    >
                        {contactSecProps.section.div.div.div1.h2.text}
                    </h2>
                </div>

                <div
                    className={contactSecProps.section.div.div.div2.className}
                >
                </div>

                {contactSecProps.section.div.div.contact.map((props, i) =>
                    <div
                        key={i}
                        className={props.className}
                    >
                        <p>
                            {props.p.text}
                            <span>
                                {props.p.span.text}
                            </span>
                            <a
                                href={props.p.a.href}
                                target={props.p.a.target}
                                rel={props.p.a.rel}
                            >
                                {props.p.a.text}
                            </a>
                        </p>
                    </div>

                )}
            </div>

            <div
                className={contactSecProps.section.div.div.div4.className}
            >
                <div
                    className={contactSecProps.section.div.div.div4.div1.className}
                >
                    <form
                        action={contactSecProps.section.div.div.div4.div1.form.action}
                    >
                        {contactSecProps.section.div.div.div4.div1.form.inputs.map((props, i) =>
                            <div
                                key={i}
                                className={props.className}
                            >
                                <input
                                    type={props.input.type}
                                    className={props.input.className}
                                    placeholder={props.input.placeholder}

                                />
                            </div>
                        )}

                        <div
                            className={contactSecProps.section.div.div.div4.div1.form.textarea.className}>
                            <textarea
                                name={contactSecProps.section.div.div.div4.div1.form.textarea.textarea.name}
                                id={contactSecProps.section.div.div.div4.div1.form.textarea.textarea.id}
                                cols={contactSecProps.section.div.div.div4.div1.form.textarea.textarea.cols}
                                rows={contactSecProps.section.div.div.div4.div1.form.textarea.textarea.rows}
                                className={contactSecProps.section.div.div.div4.div1.form.textarea.textarea.className}
                                placeholder={contactSecProps.section.div.div.div4.div1.form.textarea.textarea.placeholder}
                            >
                            </textarea>
                        </div>

                        <div
                            className={contactSecProps.section.div.div.div4.div1.form.submit.className}>
                            <input
                                type={contactSecProps.section.div.div.div4.div1.form.submit.input.type}
                                value={contactSecProps.section.div.div.div4.div1.form.submit.input.value}
                                className={contactSecProps.section.div.div.div4.div1.form.submit.input.className}
                            />
                        </div>

                    </form>

                </div>
                <div
                    className={contactSecProps.section.div.div.div4.map.className}
                    id={contactSecProps.section.div.div.div4.map.id}
                >
                </div>
            </div>
        </div>
    </section>
