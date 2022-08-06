import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import ContactUs1 from "components/contact-us/ContactUs1.js";
import ContactUs2 from "components/contact-us/ContactUs2.js";
import ContactUs3 from "components/contact-us/ContactUs3.js";
import ContactUs4 from "components/contact-us/ContactUs4.js";

function ContactUsSection() {
  return (
    <>
      <div className="cd-section" id="contact-us">
        <ContactUs1 />
        <ContactUs2 />
        <ContactUs3 />
        <ContactUs4 />
      </div>
    </>
  );
}

export default ContactUsSection;
