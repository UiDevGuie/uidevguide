import React from "react";

// reactstrap components
import {
  Button,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

// Core Components
const items = [
  {
    content: (
      <Container>
        <Row>
          
          <Col className="p-1 ml-auto" md="3">
            <div className="p-3">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/faces/fezbot.jpg")}
              ></img>
            </div>
          </Col>
          <Col className="p-1 ml-auto" md="3">
            <div className="p-3">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/faces/fezbot.jpg")}
              ></img>
            </div>
          </Col>
          <Col className="p-1 ml-auto" md="3">
            <div className="p-3">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/faces/fezbot.jpg")}
              ></img>
            </div>
          </Col>
          <Col className="p-1 ml-auto" md="3">
            <div className="p-3">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/faces/fezbot.jpg")}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Container>
        <Row>
        <Col className="p-1 ml-auto" md="3">
            <div className="p-3">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/faces/brooke-cagle.jpg")}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
];

function Testimonials1() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  return (
    <>
      <div
        className="testimonials-1"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ill/testimonial_bg.svg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title">What Clients Say</h2>
            </Col>
          </Row>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carousel-team"
            id="carousel-testimonials"
          >
            {items.map((item, key) => {
              return (
                <CarouselItem
                  onExiting={() => setAnimating(true)}
                  onExited={() => setAnimating(false)}
                  key={key}
                >
                  {item.content}
                </CarouselItem>
              );
            })}
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <i className="ni ni-bold-left"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <i className="ni ni-bold-right"></i>
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default Testimonials1;
