import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// Core Components
import PreFooter1 from "components/pre-footers/PreFooter1.js";
import PreFooter2 from "components/pre-footers/PreFooter2.js";
import PreFooter3 from "components/pre-footers/PreFooter3.js";
import PreFooter4 from "components/pre-footers/PreFooter4.js";

function PreFooters() {
  return (
    <>
      <div className="section section-prefooter" id="pre-footer-areas">
        <Container>
          <h4 className="h4 text-success font-weight-bold mb-4">
            Pre-footer Areas
          </h4>
        </Container>
        <Container fluid>
          <PreFooter1 />
          <br></br>
          <br></br>
          <PreFooter2 />
          <br></br>
          <br></br>
          <PreFooter3 />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <PreFooter4 />
        </Container>
      </div>
    </>
  );
}

export default PreFooters;
