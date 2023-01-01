import React from "react";
import "./Style.css";
import { FaFileDownload } from "react-icons/fa";

const ResumeSkills = () => {
  return (
    <>
      <section id="resumeSkills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-page-skills-heading">
                <h1>Skills</h1>
              </div>
            </div>
          </div>
          <div className="row skill-width">
            <div className="col-md-2 col-sm-6">
              <div className="skills-language-logo">
                <img src="assets/Images/html.png" alt="HTML" aria-describedby="HTML" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="skills-language-logo">
                <img src="assets/Images/css.png" alt="CSS" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="skills-language-logo">
                <img src="assets/Images/bootstrap.png" alt="Bootstrap" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="skills-language-logo">
                <img src="assets/Images/js.png" alt="JavaScript" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="skills-language-logo">
                <img src="assets/Images/jquery.png" alt="jQuery" />
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="skills-language-logo">
                <img src="assets/Images/react.png" alt="React Js" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="resume-btn">
                <a href="assets/Rehman`s Resume.pdf" className="resume-download-btn" target="blank">
                  Download Resume <FaFileDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeSkills;
