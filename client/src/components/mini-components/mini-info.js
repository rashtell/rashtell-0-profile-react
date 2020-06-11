import React from "react";
import { contactInfo, aboutInfoData } from "../../data/data";

export const ContactInfo = () => {
  return (
    <>
      <h5>{contactInfo.heading}</h5>
      <p>
        {contactInfo.email.type}
        <a
          href={contactInfo.email.href + contactInfo.email.email}
          target="_blank"
          rel="noreferrer noopener"
        >
          {contactInfo.email.email}
        </a>
      </p>
      <p>
        {contactInfo.phone.type}
        <a
          href={contactInfo.phone.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {contactInfo.phone.number}
        </a>
      </p>
    </>
  );
};

export const AboutInfo = () => {
  return (
    <>
      <h2 className={aboutInfoData.className}>{aboutInfoData.text1}</h2>
      <p>{aboutInfoData.text2}</p>
      <p>
        <a
          href={aboutInfoData.resumeLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          {aboutInfoData.resumeText}
        </a>
      </p>
    </>
  );
};
