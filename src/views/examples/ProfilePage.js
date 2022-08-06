import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import ProfileCard7 from "components/cards/ProfileCard7.js";

function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <section className="section-profile-cover section-shaped my-0">
          <img
            alt="..."
            className="bg-image"
            src={require("assets/img/pages/mohamed.jpg")}
            style={{ width: "100%" }}
          ></img>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-secondary"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="section bg-secondary">
          <Container>
            <ProfileCard7 />
          </Container>
        </section>
        <DemoFooter />
      </div>
    </>
  );
}

export default ProfilePage;
