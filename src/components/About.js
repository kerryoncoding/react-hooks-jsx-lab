import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div>
    <h2>About Me</h2>
    <p>I'm an engineer.</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;
