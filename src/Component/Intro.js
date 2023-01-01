import React from "react";
import "./Style.css";

const Intro = () => {
  return (
    <>
      <section id="into-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro-main">
                <div className="intro-body">
                  <div className="profile-img">
                    <img src="./assets/Images/ab.jpg" alt="" />
                  </div>
                  <div className="profile-details">
                    <h2>Hi, I`m Abdul Rehman!</h2>
                    <p>
                      I am a <span className="FE-dev">Front End Developer</span> having 1+ years of experience in
                      developing state-of-the-art applications, building great user experiences by bringing simplicity
                      to life and constantly learning.
                    </p>
                    <p>
                      Skilled in technologies like{" "}
                      <span className="Lnges">Bootstrap, JavaScript, React Js, WordPress</span> . I am a team player and
                      always looking for new challenges and ways to improve myself.
                    </p>
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

export default Intro;
