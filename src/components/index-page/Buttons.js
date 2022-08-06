import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const colors = [
  "primary",
  "info",
  "success",
  "danger",
  "warning",
  "default",
  "secondary",
];

const socialColors = [
  "facebook",
  "twitter",
  "instagram",
  "github",
  "pinterest",
  "youtube",
  "vimeo",
  "slack",
  "dribbble",
  "reddit",
  "tumblr",
  "linkedin",
];

const socialIcons = {
  facebook: "fab fa-facebook",
  twitter: "fab fa-twitter",
  instagram: "fab fa-instagram",
  github: "fab fa-github",
  pinterest: "fab fa-pinterest",
  youtube: "fab fa-youtube",
  vimeo: "fab fa-vimeo",
  slack: "fab fa-slack",
  dribbble: "fab fa-dribbble",
  reddit: "fab fa-reddit",
  tumblr: "fab fa-tumblr",
  linkedin: "fab fa-linkedin",
};

function Buttons() {
  return (
    <>
      <div className="section section-components pb-0" id="section-components">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <h2 className="mb-5">
                <span>Basic Elements</span>
              </h2>
              <h3 className="h4 text-success font-weight-bold mb-4">Buttons</h3>
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">
                  Pick your color
                </small>
              </div>
              {colors.map((prop, key) => {
                return (
                  <Button color={prop} key={key} type="button">
                    {prop}
                  </Button>
                );
              })}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">
                  Rounded
                </small>
              </div>
              {colors.map((prop, key) => {
                return (
                  <Button
                    className="btn-round"
                    color={prop}
                    key={key}
                    type="button"
                  >
                    {prop}
                  </Button>
                );
              })}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">
                  Outline
                </small>
              </div>
              {colors.map((prop, key) => {
                return (
                  <Button outline color={prop} key={key} type="button">
                    {prop}
                  </Button>
                );
              })}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">
                  Outline Rounded
                </small>
              </div>
              {colors.map((prop, key) => {
                return (
                  <Button
                    className="btn-round"
                    outline
                    color={prop}
                    key={key}
                    type="button"
                  >
                    {prop}
                  </Button>
                );
              })}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">Links</small>
              </div>
              {colors.map((prop, key) => {
                return (
                  <Button
                    className={"text-" + prop}
                    color="link"
                    key={key}
                    type="button"
                  >
                    {prop}
                  </Button>
                );
              })}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">
                  Gradients
                </small>
              </div>
              {colors.map((prop, key) => {
                return (
                  <Button color={"gradient-" + prop} key={key} type="button">
                    {prop}
                  </Button>
                );
              })}
              <div>
                <div className="mb-3 mt-5">
                  <small className="text-uppercase font-weight-bold">
                    Pick your style
                  </small>
                </div>
                <Button color="primary" type="button">
                  Button
                </Button>
                <Button
                  className="btn-icon btn-3"
                  color="primary"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="ni ni-bag-17"></i>
                  </span>
                  <span className="btn-inner--text">Left icon</span>
                </Button>
                <Button
                  className="btn-icon btn-3"
                  color="primary"
                  type="button"
                >
                  <span className="btn-inner--text">Right icon</span>
                  <span className="btn-inner--icon">
                    <i className="ni ni-bag-17"></i>
                  </span>
                </Button>
                <Button className="btn-icon" color="primary" type="button">
                  <span className="btn-inner--icon">
                    <i className="ni ni-bag-17"></i>
                  </span>
                </Button>
                <div className="mb-3 mt-5">
                  <small className="text-uppercase font-weight-bold">
                    Pick your size
                  </small>
                </div>
                <Button color="primary" size="sm" type="button">
                  Small
                </Button>
                <Button className="btn-1" color="primary" type="button">
                  Regular
                </Button>
                <Button color="primary" size="lg" type="button">
                  Large Button
                </Button>
                <div className="mb-3 mt-5">
                  <small className="text-uppercase font-weight-bold">
                    Floating
                  </small>
                </div>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="primary"
                  size="sm"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="ni ni-bag-17"></i>
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="primary"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="ni ni-bag-17"></i>
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="primary"
                  size="lg"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="ni ni-bag-17"></i>
                  </span>
                </Button>
              </div>
              <Row>
                <Col md="6">
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Active &amp; Disabled
                    </small>
                  </div>
                  <Row>
                    <Col md="6">
                      <Button
                        block
                        className="active"
                        color="primary"
                        type="button"
                      >
                        Active
                      </Button>
                    </Col>
                    <Col md="6">
                      <Button
                        block
                        className="disabled"
                        color="primary"
                        type="button"
                      >
                        Disabled
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Block Level
                    </small>
                  </div>
                  <Row>
                    <Button block color="primary" type="button">
                      Primary
                    </Button>
                    <Button block color="info" type="button">
                      Info
                    </Button>
                  </Row>
                </Col>
              </Row>
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">
                  Social Buttons
                </small>
              </div>
              {socialColors.map((prop, key) => {
                return (
                  <Button
                    className="btn-icon my-2"
                    color={prop}
                    key={key}
                    type="button"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className={socialIcons[prop]}></i>
                    </span>
                    <span className="btn-inner--text">{prop}</span>
                  </Button>
                );
              })}
              <br></br>
              <br></br>
              <Row>
                <Col md="6">
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      W/ Icons
                    </small>
                  </div>
                  {socialColors.map((prop, key) => {
                    return (
                      <Button
                        className="btn-icon-only"
                        color={prop}
                        key={key}
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className={socialIcons[prop]}></i>
                        </span>
                      </Button>
                    );
                  })}
                </Col>
                <Col md="6">
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Rounded w/ Icons
                    </small>
                  </div>
                  {socialColors.map((prop, key) => {
                    return (
                      <Button
                        className="btn-icon-only rounded-circle"
                        color={prop}
                        key={key}
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className={socialIcons[prop]}></i>
                        </span>
                      </Button>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      w/ Gradient
                    </small>
                  </div>
                  {socialColors.map((prop, key) => {
                    return (
                      <Button
                        className="btn-icon-only"
                        color={"gradient-" + prop}
                        key={key}
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className={socialIcons[prop]}></i>
                        </span>
                      </Button>
                    );
                  })}
                </Col>
                <Col md="6">
                  <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Link
                    </small>
                  </div>
                  {socialColors.map((prop, key) => {
                    return (
                      <Button
                        className="btn-icon-only btn-simple"
                        color={prop}
                        key={key}
                        type="button"
                      >
                        <span className="btn-inner--icon">
                          <i className={socialIcons[prop]}></i>
                        </span>
                      </Button>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Buttons;
