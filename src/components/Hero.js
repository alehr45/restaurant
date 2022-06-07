import React from "react";
import hero from "../images/hero.jpeg";

const Hero = () => {
  return <img style={styles.heroStyles} src={hero} alt="" />;
};

const styles = {
  heroStyles: {
    width: "100%",
    height: "auto "
  }
};

export default Hero;
