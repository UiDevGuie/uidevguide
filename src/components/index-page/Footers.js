import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// Core Components
import Footer1 from "components/footers/Footer1.js";
import Footer2 from "components/footers/Footer2.js";
import Footer3 from "components/footers/Footer3.js";
import Footer4 from "components/footers/Footer4.js";
import Footer5 from "components/footers/Footer5.js";
import Footer6 from "components/footers/Footer6.js";

function Footers() {
  return (
    <>
      <div className="section section-footer" id="footer-areas">
        <Container>
          <h4 className="h4 text-success font-weight-bold mb-4">
            Footer Areas
          </h4>
        </Container>
        <Container fluid>
          <div id="footer-areas">
            <Footer1 />
            <Footer2 />
            <Footer3 />
            <Footer4 />
            <Footer5 />
            <Footer6 />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footers;
