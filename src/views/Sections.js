import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

// Section Components
import HeadersSection from "components/sections-page/HeadersSection.js";
import FeaturesSection from "components/sections-page/FeaturesSection.js";
import BlogsSection from "components/sections-page/BlogsSection.js";
import TeamsSection from "components/sections-page/TeamsSection.js";
import ProjectsSection from "components/sections-page/ProjectsSection.js";
import PricingsSection from "components/sections-page/PricingsSection.js";
import TestimonialsSection from "components/sections-page/TestimonialsSection.js";
import ContactUsSection from "components/sections-page/ContactUsSection.js";
import TablesSection from "components/sections-page/TablesSection.js";
import AccordionsSection from "components/sections-page/AccordionsSection.js";

function Sections() {
  React.useEffect(() => {
    document.body.classList.add("sections-page");
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
      document.body.classList.remove("sections-page");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
        <HeadersSection />
        <FeaturesSection />
        <BlogsSection />
        <TeamsSection />
        <ProjectsSection />
        <PricingsSection />
        <TestimonialsSection />
        <ContactUsSection />
        <TablesSection />
        <AccordionsSection />
        <DemoFooter />
      </div>
    </>
  );
}

export default Sections;
