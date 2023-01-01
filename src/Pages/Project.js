import React from "react";
import MyProject from "../Component/MyProject";
import Repositories from "../Component/Repositories";
// import Footer from "../Component/Footer";

const Project = () => {
  return (
    <>
      <section id="projectbg">
        <MyProject />
        <Repositories />
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Project;
