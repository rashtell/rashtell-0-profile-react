import React from "react";
import { SocialMedia } from "../mini-components/listItems";
import { ContactInfo, AboutInfo } from "../mini-components/mini-info";
import { aboutData, aboutMeProps } from "../../data/data";

export const AboutSec = () => {
  return (
    <section className={aboutData.section.className}>
      <div className={aboutData.div1.className}>
        <AboutFrag />
      </div>
    </section>
  );
};

export const AboutMe = () => {
  return (
    <>
      <h1 className={aboutMeProps.h1.className}>{aboutMeProps.h1.text}</h1>
      <div className={aboutMeProps.div.className}>
        <AboutInfo />

        <SocialMedia />

        <ContactInfo />
      </div>
    </>
  );
};

export const AboutFrag = () => (
  <div
    className={aboutData.div2.className}
    data-scrollax-parent={aboutData.div2["data-scrollax-parent"]}
  >
    <div
      className={aboutData.div3.className}
      style={aboutData.div3.style}
      data-scrollax={aboutData.div3["data-scrollax"]}
    ></div>
    <div className={aboutData.div4.className}></div>
    <div className={aboutData.div5.className}>
      <div className={aboutData.div6.className}>
        <AboutMe />
      </div>
    </div>
  </div>
);
