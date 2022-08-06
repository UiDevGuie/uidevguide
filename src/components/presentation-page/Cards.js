import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Cards() {
  React.useEffect(() => {
    new Glide(".presentation-cards", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 5,
    }).mount();
  }, []);
  return (
    <>
      <section className="section-cards mb-5">
        <div className="content-center">
          <Container fluid>
            <Row>
              <Col className="mx-auto text-center" lg="5" md="10" xs="12">
                <h1 className="display-3">
                  Unconventional cards
                  <span className="text-primary">
                    One card for every problem
                  </span>
                </h1>
                <p className="lead">
                  We love cards and everybody on the web seems to. We have gone
                  above and beyond with options for you to organise your
                  information. From cards designed for blog posts, to product
                  cards or user profiles, you will have many options to choose
                  from. All the cards follow the material principles and have a
                  design that stands out.
                </p>
              </Col>
              <Col md="12">
                <div className="presentation-cards">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-blog.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-pricing-1.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-background.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-pricing-2.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-profile-2.png")}
                          width="350"
                        ></img>
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
      </section>
    </>
  );
}

export default Cards;
