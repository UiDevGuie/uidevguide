import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Team1 from "components/teams/Team1.js";
import Team2 from "components/teams/Team2.js";
import Team3 from "components/teams/Team3.js";
import Team4 from "components/teams/Team4.js";
import Team5 from "components/teams/Team5.js";

function TeamsSection() {
  return (
    <>
      <div className="cd-section" id="teams">
        <Team1 />
        <Team2 />
        <Team3 />
        <Team4 />
        <Team5 />
      </div>
    </>
  );
}

export default TeamsSection;
