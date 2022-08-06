/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function NucleoIcons() {
  return (
    <>
      <div className="section section-lg section-nucleo-icons pb-250">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center" lg="8">
              <h2 className="display-3">Nucleo Icons</h2>
              <p className="lead">
                The official package contains over 21.000 icons which are
                looking great in combination with Argon Design System. Make sure
                you check all of them and use those that you like the most.
              </p>
              <div className="btn-wrapper">
                <Button
                  color="primary"
                  href="https://www.creative-tim.com/learning-lab/reactstrap/icons/argon-design-system"
                >
                  View demo icons
                </Button>
                <Button
                  className="mt-3 mt-md-0"
                  color="default"
                  href="https://nucleoapp.com/?ref=1712"
                  target="_blank"
                >
                  View all icons
                </Button>
              </div>
            </Col>
          </Row>
          <div className="blur--hover">
            <a
              href="https://www.creative-tim.com/learning-lab/reactstrap/icons/argon-design-system"
              target="_blank"
            >
              <div
                className="icons-container blur-item mt-5 on-screen"
                data-toggle="on-screen"
              >
                <i className="icon ni ni-diamond"></i>
                <i className="icon icon-sm ni ni-album-2"></i>
                <i className="icon icon-sm ni ni-app"></i>
                <i className="icon icon-sm ni ni-atom"></i>
                <i className="icon ni ni-bag-17"></i>
                <i className="icon ni ni-bell-55"></i>
                <i className="icon ni ni-credit-card"></i>
                <i className="icon icon-sm ni ni-briefcase-24"></i>
                <i className="icon icon-sm ni ni-building"></i>
                <i className="icon icon-sm ni ni-button-play"></i>
                <i className="icon ni ni-calendar-grid-58"></i>
                <i className="icon ni ni-camera-compact"></i>
                <i className="icon ni ni-chart-bar-32"></i>
              </div>
              <span className="blur-hidden h5 text-success">
                Eplore all the 21.000+ Nucleo Icons
              </span>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
