import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// Core Components

const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024"
            ></img>
          </a>
        </div>
        <CardBody className="text-center">
          <p className="card-description">
            "Awesome Design and very well organized code structure! Also, it
            contains numerous elements using which achieving the perfect or
            required template can be done with ease. Great job!"
          </p>
          <CardTitle tag="h4">Stefan</CardTitle>
          <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg"
            ></img>
          </a>
        </div>
        <CardBody className="text-center">
          <p className="card-description">
            "It looks great and its somewhat futuristics cant wait to use it on
            a project here in nigeria i'm sure it would put me ahead.. I cant
            wait to hv enough money to buy ur product."
          </p>
          <CardTitle tag="h4">Mr. Bones</CardTitle>
          <h6 className="category text-muted">Web Designer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048"
            ></img>
          </a>
        </div>
        <CardBody className="text-center">
          <p className="card-description">
            "Everything is perfect. Codes are really organized. It's easy to
            edit for my own purposes. It's great that it is built on top of
            Bootstrap 4."<br></br>
            <br></br>
          </p>
          <CardTitle tag="h4">DOĞA</CardTitle>
          <h6 className="category text-muted">Web Developer</h6>
          <CardFooter>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "2",
    altText: "",
    caption: "",
  },
];

function Testimonials() {
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

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <section className="section-testimonials mt-5">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="display-2 mb-5">Trusted by 880,000+ People</h2>
              <p className="lead">
                The UI Kits, Templates and Dashboards that we've created are
                used by{" "}
                <strong className="text-primary">
                  880,000+ web developers
                </strong>{" "}
                in over{" "}
                <strong className="text-primary">1,500,000 Web Projects</strong>
                . This is what some of them think:
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto" md="6" xs="8">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
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
              </Carousel>
            </Col>
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
            </a>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Testimonials;
