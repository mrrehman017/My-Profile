import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Repositories = () => {
  return (
    <>
      <section id="repo-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="repo-main">
                <h1>Repositories</h1>
                <p>A list of all of the public repositories on my GitHub.</p>
                <a href="/">
                  <AiFillGithub />
                  View My Profile
                </a>
              </div>
            </div>
          </div>
          <div className="row project-boxs">
            <a href="/">
              <div className="projects-box">
                <div className="nameSkills">
                  <h3>portfoilio</h3>
                  <span>React Js</span>
                </div>
                <div className="projects-describtion">
                  <p>Personal website build with ReactJS and Bootstrap.</p>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="projects-box">
                <div className="nameSkills">
                  <h3>ngp-tobacco</h3>
                  <span>Bootstrap</span>
                </div>
                <div className="projects-describtion">
                  <p>Design static ecommerce website using Html Bootstrap & JavaScript.</p>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="projects-box">
                <div className="nameSkills">
                  <h3>grandCo</h3>
                  <span>Bootstrap</span>
                </div>
                <div className="projects-describtion">
                  <p>Design static student portal using Html Bootstrap & JavaScript.</p>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="projects-box">
                <div className="nameSkills">
                  <h3>dog security guard</h3>
                  <span>Bootstrap</span>
                </div>
                <div className="projects-describtion">
                  <p>Design static security-guard site using Html Bootstrap & JavaScript.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Repositories;
