import React from "react";
import { experienceProps } from "../../data/data";

const Experience = () => (
  <div className={experienceProps.div.className}>
    <h2 className={experienceProps.div.h2.className}>
      {experienceProps.div.h2.text}
    </h2>

    {experienceProps.div.div.map((props, i) => (
      <div key={i} className={props.className}>
        <div className={props.div1.className}>
          <h4>
            {props.div1.h4.text}
            <span>{props.div1.h4.span.text}</span>
          </h4>
          <p className={props.div1.p.className}>{props.div1.p.text}</p>
        </div>
        <div className={props.div2.className}>
          <p>{props.div2.p.text}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
