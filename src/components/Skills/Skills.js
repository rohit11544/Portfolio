import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
function Skills() {
  const dataSkills = [
    { tech: "Python", level: "95%" },
    { tech: "DBMS", level: "90%" },
    { tech: "TensorFlow", level: "75%" },
    { tech: "keras", level: "75%" },
    { tech: "pyTorch", level: "70%" },
    { tech: "OpenCV", level: "70%" },
    { tech: "NLTK", level: "70%" },
    { tech: "CUDA/C++", level: "70%" },
  ];

  const codingSkills = [
    { tech: "C++", level: "99%" },
    { tech: "Advanced Data Structure", level: "90%" },
    { tech: "Algorithms", level: "90%" },
  ];

  const webSkills = [
    { tech: "Java script", level: "99%" },
    { tech: "Mongo DB", level: "98%" },
    { tech: "Express", level: "95%" },
    { tech: "React", level: "95%" },
    { tech: "Redux", level: "95%" },
    { tech: "Node", level: "85%" },
    { tech: "HTML", level: "80%" },
    { tech: "CSS", level: "65%" },
    { tech: "Bootstrap", level: "90%" },
  ];

  return (
    <>
      <Navbar />
      <center>
        <h1>
          <b>Skills</b>
        </h1>
      </center>
      <div id="skill-style">
        {/* --------------------------------------WEB------------------------------------------------- */}
        <h5 className="tech-style">Web Development</h5>
        <hr />
        {webSkills.map((s) => (
          <>
            <h6>{s.tech}</h6>
            <div className="progress mb-3" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: s.level }}
                aria-valuenow={72}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>{" "}
          </>
        ))}
        <br />
        {/* -------------------------------------Data Science------------------------------------------------- */}
        <h5 className="tech-style">Data Science</h5>
        <hr />
        {dataSkills.map((s) => (
          <>
            <h6>{s.tech}</h6>
            <div className="progress mb-3" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: s.level }}
                aria-valuenow={72}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>{" "}
          </>
        ))}
        <br />
        {/* -------------------------------------Comptative Skills------------------------------------------------- */}
        <h5 className="tech-style">Competitive Coding</h5>
        <hr />
        {codingSkills.map((s) => (
          <>
            <h6>{s.tech}</h6>
            <div className="progress mb-3" style={{ height: "5px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: s.level }}
                aria-valuenow={72}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>{" "}
          </>
        ))}
      </div>
    </>
  );
}

export default Skills;
