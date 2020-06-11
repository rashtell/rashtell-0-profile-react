import React from "react";
import { educationProps } from "../../data/data";

const Education = () => (
  <div className={educationProps.div.className}>
    <h2 className={educationProps.div.h2.className}>
      {educationProps.div.h2.text}
    </h2>
    {educationProps.div.div.map((div, i) => (
      <div key={i} className={div.className}>
        <div className={div.div1.className}>
          <h4>
            {div.div1.h4.text}
            <span>{div.div1.h4.span.text}</span>
          </h4>
          <p className={div.div1.p.className}>{div.div1.p.text}</p>
        </div>
        <div className={div.div2.className}>
          <p>{div.div2.p.text}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
