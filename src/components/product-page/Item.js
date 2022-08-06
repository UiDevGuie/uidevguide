import React from "react";
// JavaScript library for creating Dropdown Selects
import Choices from "choices.js";
// reactstrap components
import {
  Button,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

// Core Components
// Core Components
const items = [
  {
    src: require("assets/img/pages/shirt.png"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/pages/shorts.png"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/pages/tshirt.png"),
    altText: "",
    caption: "",
  },
];

function Item() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const [quantity, setQuantity] = React.useState(1);

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

  React.useEffect(() => {
    new Choices("#choices-single-default-1", {
      searchEnabled: false,
    });
    new Choices("#choices-single-default-2", {
      searchEnabled: false,
    });
  }, []);
  return (
    <>
      <div className="section section-item">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                id="productCarousel"
              >
                {items.map((item, key) => {
                  return (
                    <CarouselItem
                      onExiting={() => setAnimating(true)}
                      onExited={() => setAnimating(false)}
                      key={key}
                    >
                      <img alt="..." className="d-block" src={item.src}></img>
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
                  <Button
                    className="btn-icon btn-round"
                    color="warning"
                    name="button"
                    size="sm"
                    type="button"
                  >
                    <i className="ni ni-bold-left"></i>
                  </Button>
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
                  <Button
                    className="btn-icon btn-round"
                    color="warning"
                    name="button"
                    size="sm"
                    type="button"
                  >
                    <i className="ni ni-bold-right"></i>
                  </Button>
                </a>
              </Carousel>
            </Col>
            <Col className="mx-auto" lg="6" md="12">
              <h2 className="title">Givenchy</h2>
              <div className="stats">
                <div className="stars text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <p className="d-inline">(76 customer reviews)</p>
                </div>
              </div>
              <br></br>
              <h2 className="main-price">$3,390</h2>
              <h6 className="category">Description</h6>
              <p className="description">
                Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage
                of a bikini in a one-piece silhouette. This fuchsia style is
                crafted from the label's sculpting peau douce fabric and has
                flattering cutouts through the torso and back. Wear yours with
                mirrored sunglasses on vacation.
              </p>
              <br></br>
              <Row className="pick-size">
                <Col lg="4" md="4">
                  <label>Quantity</label>
                  <InputGroup>
                    <div className="input-group-btn">
                      <Button
                        className="btn-round"
                        color="warning"
                        id="down"
                        onClick={() =>
                          setQuantity(quantity === 0 ? 0 : quantity - 1)
                        }
                        outline
                      >
                        <i className="ni ni-fat-delete"></i>
                      </Button>
                    </div>
                    <Input
                      className="input-number"
                      value={quantity}
                      onChange={() => {}}
                      id="myNumber"
                      type="text"
                    ></Input>
                    <div className="input-group-btn">
                      <Button
                        className="btn-round"
                        color="warning"
                        id="up"
                        onClick={() =>
                          setQuantity(quantity === 100 ? 100 : quantity + 1)
                        }
                        outline
                      >
                        <i className="ni ni-fat-add"></i>
                      </Button>
                    </div>
                  </InputGroup>
                </Col>
                <Col lg="4" md="4" sm="6">
                  <label>Select color</label>
                  <Input
                    data-trigger=""
                    id="choices-single-default-1"
                    name="choices-single-default-2"
                    type="select"
                    defaultValue="1"
                  >
                    <option value="1" disabled>
                      Choose Color
                    </option>
                    <option value="2">Black</option>
                    <option value="3">Gray</option>
                    <option value="4">White</option>
                  </Input>
                </Col>
                <Col lg="4" md="4" sm="6">
                  <label>Select size</label>
                  <Input
                    className="form-control-sm"
                    data-trigger=""
                    id="choices-single-default-2"
                    name="choices-single-default-2"
                    type="select"
                    defaultValue="5"
                  >
                    <option value="5" disabled>
                      Choose size
                    </option>
                    <option value="0">XS</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                  </Input>
                </Col>
              </Row>
              <br></br>
              <Row className="justify-content-start">
                <Button className="ml-3" color="warning">
                  Add to Cart  <i className="ni ni-cart"></i>
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Item;
