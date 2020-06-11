import React from "react";
import { AboutFrag } from "../ui/about-sec";
import Profile from "../ui/profile";
import Skills from "../ui/skills";

export const Resume = () => (
  <section className="ftco-section about-section">
    <div className="container">
      <AboutFrag />
      <Profile />
      <Skills />
    </div>
  </section>
);
