import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import Header4 from "components/headers/Header4.js";
import Feature6 from "components/features/Feature6.js";
import Feature1 from "components/features/Feature1.js";
import Blogs2 from "components/blogs/Blogs2.js";
import Pricing5 from "components/pricings/Pricing5.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <Header4 />
        <Feature6 />
        <Feature1 />
        <Blogs2 />
        <br></br>
        <br></br>
        <Pricing5 />
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
