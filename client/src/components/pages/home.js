import React from "react";
import { AboutSec } from "../ui/about-sec";
import { Achievment } from "../ui/achievment";
import { PortfolioSec } from "../ui/portfolio-sec";
import { ServicesSec } from "../ui/services-sec";
import { Slider } from "../ui/slider";

export const Home = () => (
  <>
    <Slider />
    <AboutSec />
    <ServicesSec />
    <PortfolioSec />
    <Achievment />
  </>
);
