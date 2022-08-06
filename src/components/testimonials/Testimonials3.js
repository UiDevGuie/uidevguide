import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function Testimonials3() {
  React.useEffect(() => {
    new Glide(".testimonial-glide", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();
  }, []);
  return (
    <>
      <div className="testimonials-3">
        <Container fluid>
          <Row>
            <Col className="mx-auto text-center" md="6">
              <h3 className="display-3">Join our world</h3>
            </Col>
          </Row>
          <Row>
            <Col className="positioned" lg="3" md="8" xs="10">
              <h3 className="display-3">See our customers opinion</h3>
              <p className="lead">
                Meet Wingman, a robust suite of styled pages and components,
                powered by Bootstrap 4. The ideal starting point for product
                landing pages, stylish web-apps and complete company websites.
              </p>
              <Button
                className="mt-5"
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Contact us
              </Button>
            </Col>
            <Col md="12">
              <div className="testimonial-glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide__slide">
                      <div className="info text-left">
                        <p className="description">
                          "Take up one idea. Make that one idea your life -
                          think of it, dream of it, live on that idea. Let the
                          brain, muscles, nerves, every part of your body, be
                          full of that idea, and just leave every other idea
                          alone. This is the way to success. A single rose can
                          be my garden... a single friend, my world."
                        </p>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-1.jpg")}
                          ></img>
                          <span>Andrew Lino</span>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="info text-left">
                        <p className="description">
                          Artist is a term applied to a person who engages in an
                          activity deemed to be an art. An artist also may be
                          defined unofficially as "a person who expresses him-
                          or herself through a medium". He is a descriptive term
                          applied to a person who engages in an activity deemed
                          to be an art."
                        </p>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-2.jpg")}
                          ></img>
                          <span>Michael Jenos</span>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="info text-left">
                        <p className="description">
                          "The simplest visual description uses ordinary words
                          to convey what the writer sees. First he or she must
                          look at the subject – slowly, carefully, and
                          repeatedly, if possible – to identify the parts that
                          make the whole"
                        </p>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-3.jpg")}
                          ></img>
                          <span>Rose Arthur</span>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="info text-left">
                        <p className="description">
                          "Finding temporary housing for your dog should be as
                          easy as renting an Airbnb. That’s the idea behind
                          Rover, which raised $65 million to expand its pet
                          sitting and dog-walking businesses..Finding temporary
                          housing for your dog should be as easy as renting an
                          Airbnb."
                        </p>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-4.jpg")}
                          ></img>
                          <span>Lora Jimi</span>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="info text-left">
                        <p className="description">
                          "Venture investment in U.S. startups rose sequentially
                          in the second quarter of 2017, boosted by large,
                          late-stage financings and a few outsized early-stage
                          rounds in tech and healthcare..enture investment in
                          U.S. startups rose sequentially in the second quarter
                          of 2017, boosted by large."
                        </p>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-5.jpg")}
                          ></img>
                          <span>Mike Ranson</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                  <button
                    className="glide__arrow glide__arrow--left text-default"
                    data-glide-dir="<"
                  >
                    <i className="ni ni-bold-left"></i>
                  </button>
                  <button
                    className="glide__arrow glide__arrow--right text-default"
                    data-glide-dir=">"
                  >
                    <i className="ni ni-bold-right"></i>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Testimonials3;
