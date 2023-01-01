import React from "react";
import "./Style.css";
import { AiOutlineRight } from "react-icons/ai";

const IntroDetails = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro-details-main">
                <div className="intro-details-body">
                  <div className="intro-details-topBar">
                    <div className="topBar-point">
                      <sapn className="red-point"></sapn>
                      <sapn className="orange-point"></sapn>
                      <sapn className="green-point"></sapn>
                    </div>
                    <div className="topBar-text">
                      <p>Executed: introduceSelf.js</p>
                    </div>
                  </div>
                  <div className="intro-details-content">
                    <div className="content-container">
                      <div className="intro-block">
                        <div className="intro-block-text">
                          <AiOutlineRight />
                          learnAboutMe()
                        </div>
                        <p>Loading...</p>
                      </div>
                      <div className="intro-block">
                        <div className="intro-block-text">
                          <AiOutlineRight />
                          currentLocation()
                        </div>
                        <p>"Lahore, Pakistan"</p>
                      </div>
                      <div className="intro-block">
                        <div className="intro-block-text">
                          <AiOutlineRight />
                          interests()
                        </div>
                        <p>"Web Development", "Travelling", "Gaming", "Watching Movies"</p>
                      </div>
                      <div className="intro-block">
                        <div className="intro-block-text">
                          <AiOutlineRight />
                          education()
                        </div>
                        <p>"Bachelor of Science in Software engineering - Virduat University"</p>
                      </div>
                      <div className="intro-block">
                        <div className="intro-block-text">
                          <AiOutlineRight />
                          skills()
                        </div>
                        <p>[ "HTML", "CSS", "Bootstrap", "JavaScript", "React Js", "WordPress" ]</p>
                      </div>
                      <div className="intro-block">
                        <div className="intro-block-text">
                          <AiOutlineRight />
                          contactMe()
                        </div>
                        <p>[ "GitHub", "Stackoverflow", "LinkedIn", "WhatsApp" ]</p>
                      </div>
                    </div>
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

export default IntroDetails;
