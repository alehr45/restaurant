import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div style={styles.homeStyles}>
      <Hero />
    </div>
  );
};

const styles = {
  homeStyles: {
    backgroundColor: "black"
  }
};

export default Home;
