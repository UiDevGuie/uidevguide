import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Pricing1 from "components/pricings/Pricing1.js";
import Pricing2 from "components/pricings/Pricing2.js";
import Pricing3 from "components/pricings/Pricing3.js";
import Pricing4 from "components/pricings/Pricing4.js";
import Pricing5 from "components/pricings/Pricing5.js";

function PricingsSection() {
  return (
    <>
      <div className="cd-section" id="pricing">
        <Pricing1 />
        <Pricing2 />
        <Pricing3 />
        <Pricing4 />
        <Pricing5 />
      </div>
    </>
  );
}

export default PricingsSection;
