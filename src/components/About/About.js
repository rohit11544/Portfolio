import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
function About() {
  return (
    <>
      <Navbar />
      <img
        className="about-img-style"
        src="https://sunnet.us/Content/Images/computer-programming-1.jpg"
        alt="about"
      />
      <div className="about-style">
        <h1 className="about-heading">About Me</h1>
        <h1 className="get-heading">Get to know me</h1>
        <p className="about-para-style">
          I am a <b>Full Stack web developer</b> and <b>Data scientist</b> .
          Currently studying 3rd , year Computer Science and Engineering in
          Indian Institute of Information Technology Sri City (IIITS).
          <br />
          <br />I have Done many websites using <b>MERN stack</b> and{" "}
          <b>Django</b> . I have a very good knowladge on back-end and front-end
          Technologys and web frame works. I am proficent in{" "}
          <b>
            {" "}
            <a
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/certificate/LKXSHTJKQUUA"
            >
              Machine Learning
            </a>{" "}
          </b>{" "}
          and{" "}
          <b>
            {" "}
            <a
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/8F4HKGBEG7C7"
            >
              Deep Learning
            </a>{" "}
          </b>{" "}
          . I have been building many models on ML/DL from 2 years. And I am a
          comptative coder. Proficient in data structures and algorithms,
          solving coding questions from 3 years.
          <br /> <br />
          My goal is to contribute to the web development and data science
          community with my skills and experience. And learn new technologies
          and apply them for building tools which helps the community.
        </p>
      </div>
    </>
  );
}

export default About;
