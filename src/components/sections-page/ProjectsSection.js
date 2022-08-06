import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Projects1 from "components/projects/Projects1.js";
import Projects2 from "components/projects/Projects2.js";
import Projects3 from "components/projects/Projects3.js";

function ProjectsSection() {
  return (
    <>
      <div className="cd-section" id="projects">
        <Projects1 />
        <Projects2 />
        <Projects3 />
      </div>
    </>
  );
}

export default ProjectsSection;
