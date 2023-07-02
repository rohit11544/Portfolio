import React from "react";
import img from "./Rohit.jpg";
import "./style.css";
function Hero() {
  return (
    <>
      <div className="intro-style">
        <h1 className="hello-style">Hello, I'm</h1>
        <h1 className="name-style">Rohit Borra</h1>
        <h2 className="skill-style">Full-Stack Developer | Data-Scientist </h2>
      </div>

      <img className="img-style" src={img} alt="rohit" />
    </>
  );
}

export default Hero;
