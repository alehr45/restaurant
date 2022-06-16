import React from "react";
import hero from "../images/hero.jpeg";
import { Button } from '@mui/material';


const Hero = () => {
  return (
    <>
      <img style={styles.heroStyles} src={hero} alt="" />

      <div style={styles.buttonStyles}>
        <Button href="/togo" style={styles.buttonTextStyles} >Order Pickup or Delivery</Button>
      </div>

    </>
  )
};

const styles = {
  heroStyles: {
    width: "100%",
    height: "auto",
    opacity: "50%"
  },
  buttonStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid white ",
    borderRadius: 15,
    padding: 10
  },
  buttonTextStyles: {
    color: "white",
    fontSize: 30,

  }
};

export default Hero;
