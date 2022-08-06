import React from "react";

// reactstrap components
import { Container, Row, Button } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderIndex from "components/headers/HeaderIndex.js";
// Demo Sections for this page
import Buttons from "components/index-page/Buttons.js";
import Inputs from "components/index-page/Inputs.js";
import Selects from "components/index-page/Selects.js";
import Dropdowns from "components/index-page/Dropdowns.js";
import Textarea from "components/index-page/Textarea.js";
import Tags from "components/index-page/Tags.js";
import Spinners from "components/index-page/Spinners.js";
import CRTS from "components/index-page/CRTS.js";
import Menus from "components/index-page/Menus.js";
import Navbars from "components/index-page/Navbars.js";
import NavigationPills from "components/index-page/NavigationPills.js";
import ProgressBars from "components/index-page/ProgressBars.js";
import Paginations from "components/index-page/Paginations.js";
import Badges from "components/index-page/Badges.js";
import Alerts from "components/index-page/Alerts.js";
import Toasts from "components/index-page/Toasts.js";
import PreFooters from "components/index-page/PreFooters.js";
import Footers from "components/index-page/Footers.js";
import Typography from "components/index-page/Typography.js";
import Images from "components/index-page/Images.js";
import Tables from "components/index-page/Tables.js";
import Comments from "components/index-page/Comments.js";
import Chat from "components/index-page/Chat.js";
import Cards from "components/index-page/Cards.js";
import Modals from "components/index-page/Modals.js";
import DatePickers from "components/index-page/DatePickers.js";
import TooltipsPopovers from "components/index-page/TooltipsPopovers.js";
import FileUpload from "components/index-page/FileUpload.js";
import Carousel from "components/index-page/Carousel.js";
import NucleoIcons from "components/index-page/NucleoIcons.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
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
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <Button
          className="btn-icon-only back-to-top show"
          color="primary"
          name="button"
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
          }}
        >
          <i className="ni ni-bold-up"></i>
        </Button>
        <HeaderIndex />
        <Buttons />
        <Inputs />
        <div className="section section-select">
          <Container>
            <Row>
              <Selects />
              <Dropdowns />
            </Row>
            <Row>
              <Textarea />
              <Tags />
            </Row>
            <Spinners />
          </Container>
        </div>
        <div className="section">
          <Container>
            {/*CRTS short for Checkboxes, Radios, Toggles and Sliders*/}
            <CRTS />
            <Menus />
          </Container>
        </div>
        <Navbars />
        <div className="section section-components">
          <Container>
            <NavigationPills />
            <Row>
              <ProgressBars />
              <Paginations />
            </Row>
            <Badges />
            <Alerts />
            <Toasts />
          </Container>
        </div>
        <PreFooters />
        <Footers />
        <div className="section section-typography">
          <Container>
            <Typography />
            <Images />
          </Container>
        </div>
        <div className="section section-content-areas">
          <Container>
            <h2 className="mt-lg mb-5">
              <span>Content Areas</span>
            </h2>
            <Tables />
            <Comments />
            <Chat />
          </Container>
        </div>
        <Cards />
        <div className="section section-js-components">
          <Container>
            <h2 className="mt-lg mb-5">
              <span>Javascript Components</span>
            </h2>
            <Modals />
            <DatePickers />
            <TooltipsPopovers />
            <FileUpload />
          </Container>
        </div>
        <Carousel />
        <NucleoIcons />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
