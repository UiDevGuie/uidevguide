import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// Core Components
import NavbarDefault from "components/navbars/NavbarDefault.js";
import NavbarPrimary from "components/navbars/NavbarPrimary.js";
import NavbarSuccess from "components/navbars/NavbarSuccess.js";
import NavbarDanger from "components/navbars/NavbarDanger.js";
import NavbarWarning from "components/navbars/NavbarWarning.js";
import NavbarInfo from "components/navbars/NavbarInfo.js";

function Navbars() {
  return (
    <>
      <div className="section section-navbars" id="navbars-section">
        <Container>
          <h2 className="mb-5">
            <span>Navbars</span>
          </h2>
        </Container>
        <NavbarDefault />
        <div className="mt-4"></div>
        <NavbarPrimary />
        <div className="mt-4"></div>
        <NavbarSuccess />
        <div className="mt-4"></div>
        <NavbarDanger />
        <div className="mt-4"></div>
        <NavbarWarning />
        <div className="mt-4"></div>
        <NavbarInfo />
      </div>
    </>
  );
}

export default Navbars;
