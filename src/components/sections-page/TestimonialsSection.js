import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Testimonials1 from "components/testimonials/Testimonials1.js";
import Testimonials2 from "components/testimonials/Testimonials2.js";
import Testimonials3 from "components/testimonials/Testimonials3.js";

function TestimonialsSection() {
  return (
    <>
      <div className="cd-section" id="testimonials">
        <Testimonials1 />
        <Testimonials2 />
        <Testimonials3 />
      </div>
    </>
  );
}

export default TestimonialsSection;
