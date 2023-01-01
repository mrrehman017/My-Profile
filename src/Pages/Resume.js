import React from "react";
import EducationExperience from "../Component/EducationExperience";
import ResumeSkills from "../Component/ResumeSkills";

const Resume = () => {
  return (
    <>
      <section id="resumebg">
        <EducationExperience />
        <ResumeSkills />
      </section>
    </>
  );
};

export default Resume;
