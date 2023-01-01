import React from "react";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { RiShareBoxFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { TbBrandBootstrap } from "react-icons/tb";

const MyProject = () => {
  return (
    <>
      <section id="my-projects">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="my-project-heading">
                <h1>My projects</h1>
                <p>A quick collection of my projects</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "80%", margin: "0px auto" }}>
            <div className="col-12">
              <div className="all-projects">
                <div className="project-img">
                  <img src="./assets/Images/my-portfolio.png" alt="" />
                </div>
                <div className="project-card">
                  <div className="project-card-content">
                    <div className="project-card-header">
                      <div className="card-header-heading">
                        <h1>Portfolio Site</h1>
                        <div className="code-access">
                          <a href="/">
                            <AiFillGithub />
                          </a>
                          <a href="/">
                            <RiShareBoxFill />
                          </a>
                        </div>
                      </div>
                      <div className="card-header-title">
                        <div className="card-header-skill">
                          <span>
                            <GrReactjs />
                            React Js
                          </span>
                          <span className="skillTwo">
                            <TbBrandBootstrap />
                            Bootstrap
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "80%", margin: "0px auto" }}>
            <div className="col-12">
              <div className="all-projects">
                <div className="project-img-right">
                  <img src="./assets/Images/GrandCo-Fast.png" alt="" />
                </div>
                <div className="project-card-right">
                  <div className="project-card-content">
                    <div className="project-card-header">
                      <div className="card-header-heading">
                        <h1>GrandCo-Fast</h1>
                        <div className="code-access">
                          <a href="/">
                            <AiFillGithub />
                          </a>
                          <a href="/">
                            <RiShareBoxFill />
                          </a>
                        </div>
                      </div>
                      <div className="card-header-title">
                        <div className="card-header-skill">
                          <span>
                            <AiOutlineHtml5 />
                            HTML
                          </span>
                          <span className="skillTwo">
                            <TbBrandBootstrap />
                            Bootstrap
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "80%", margin: "0px auto" }}>
            <div className="col-12">
              <div className="all-projects">
                <div className="project-img">
                  <img src="./assets/Images/Security-Site.png" alt="" />
                </div>
                <div className="project-card">
                  <div className="project-card-content">
                    <div className="project-card-header">
                      <div className="card-header-heading">
                        <h1>Dog Security guard</h1>
                        <div className="code-access">
                          <a href="/">
                            <AiFillGithub />
                          </a>
                          <a href="/">
                            <RiShareBoxFill />
                          </a>
                        </div>
                      </div>
                      <div className="card-header-title">
                        <div className="card-header-skill">
                          <span>
                            <AiOutlineHtml5 />
                            HTML
                          </span>
                          <span className="skillTwo">
                            <TbBrandBootstrap />
                            Bootstrap
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="all-projects-mob">
                <div className="project-img-mob">
                  <img src="./assets/Images/my-portfolio.png" alt="" />
                </div>
                <div className="project-card-mob">
                  <div className="project-card-content-mob">
                    <div className="project-card-header-mob">
                      <div className="card-header-heading-mob">
                        <h1>Portfolio Site</h1>
                        <div className="code-access-mob">
                          <a href="/">
                            <RiShareBoxFill />
                          </a>
                        </div>
                      </div>
                      <div className="card-header-title-mob">
                        <div className="card-header-skill-mob">
                          <span>
                            <GrReactjs />
                            React Js
                          </span>
                          <span className="skillTwo-mob">
                            <TbBrandBootstrap />
                            Bootstrap
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.</p>
                  </div>
                </div>
              </div>
              <div className="all-projects-mob">
                <div className="project-img-mob">
                  <img src="./assets/Images/GrandCo-Fast.png" alt="" />
                </div>
                <div className="project-card-mob">
                  <div className="project-card-content-mob">
                    <div className="project-card-header-mob">
                      <div className="card-header-heading-mob">
                        <h1>GrandCo-Fast</h1>
                        <div className="code-access-mob">
                          <a href="/">
                            <RiShareBoxFill />
                          </a>
                        </div>
                      </div>
                      <div className="card-header-title-mob">
                        <div className="card-header-skill-mob">
                          <span>
                            <AiOutlineHtml5 />
                            HTML
                          </span>
                          <span className="skillTwo-mob">
                            <TbBrandBootstrap />
                            Bootstrap
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.</p>
                  </div>
                </div>
              </div>
              <div className="all-projects-mob">
                <div className="project-img-mob">
                  <img src="./assets/Images/Security-Site.png" alt="" />
                </div>
                <div className="project-card-mob">
                  <div className="project-card-content-mob">
                    <div className="project-card-header-mob">
                      <div className="card-header-heading-mob">
                        <h1>Dog Security guard</h1>
                        <div className="code-access-mob">
                          <a href="/">
                            <RiShareBoxFill />
                          </a>
                        </div>
                      </div>
                      <div className="card-header-title-mob">
                        <div className="card-header-skill-mob">
                          <span>
                            <AiOutlineHtml5 />
                            HTML
                          </span>
                          <span className="skillTwo-mob">
                            <TbBrandBootstrap />
                            Bootstrap
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProject;
