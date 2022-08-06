import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import Header2 from "components/headers/Header2.js";
import Pricing3 from "components/pricings/Pricing3.js";
import Feature1 from "components/features/Feature1.js";
import ContactUs3 from "components/contact-us/ContactUs3.js";
import Projects2 from "components/projects/Projects2.js";
import PreFooter6 from "components/pre-footers/PreFooter6.js";

function PricingPage() {
  React.useEffect(() => {
    document.body.classList.add("pricing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("pricing-page");
    };
  });
  return (
    <>
      <DemoNavbar type="white" />
      <div className="wrapper">
        <Header2 />
        <div className="main mt-5">
          <Pricing3 />
          <br></br>
          <br></br>
          <Feature1 />
          <br></br>
          <br></br>
          <ContactUs3 />
          <br></br>
          <br></br>
          <Projects2 />
          <br></br>
          <br></br>
          <PreFooter6 />
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default PricingPage;
