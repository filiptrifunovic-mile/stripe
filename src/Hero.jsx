import React from "react";
import phoneImg from "./images/phone.svg";

import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();

  return <h2>hero component</h2>;
};

export default Hero;
