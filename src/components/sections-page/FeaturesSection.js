import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Feature1 from "components/features/Feature1.js";
import Feature2 from "components/features/Feature2.js";
import Feature3 from "components/features/Feature3.js";
import Feature4 from "components/features/Feature4.js";
import Feature5 from "components/features/Feature5.js";
import Feature6 from "components/features/Feature6.js";
import Feature7 from "components/features/Feature7.js";

function FeaturesSection() {
  return (
    <>
      <div className="cd-section" id="features">
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        <Feature5 />
        <Feature6 />
        <Feature7 />
      </div>
    </>
  );
}

export default FeaturesSection;
