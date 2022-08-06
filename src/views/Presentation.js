import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderPresentation from "components/headers/HeaderPresentation.js";
// Sections for this page
import Info from "components/presentation-page/Info.js";
import BasicComponents from "components/presentation-page/BasicComponents.js";
import Cards from "components/presentation-page/Cards.js";
import Content from "components/presentation-page/Content.js";
import Sections from "components/presentation-page/Sections.js";
import Examples from "components/presentation-page/Examples.js";
import Patterns from "components/presentation-page/Patterns.js";
import FreeDemo from "components/presentation-page/FreeDemo.js";
import Icons from "components/presentation-page/Icons.js";
import Features from "components/presentation-page/Features.js";
import Testimonials from "components/presentation-page/Testimonials.js";
import Pricing from "components/presentation-page/Pricing.js";

function Presentation() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  });
  return (
    <>
      <DemoNavbar type="primary" />
      <div className="wrapper">
        <HeaderPresentation />
        <Info />
        <BasicComponents />
        <Cards />
        <Content />
        <Sections />
        <Examples />
        <Patterns />
        <FreeDemo />
        <Icons />
        <Features />
        <Testimonials />
        <Pricing />
        <DemoFooter />
      </div>
    </>
  );
}

export default Presentation;
