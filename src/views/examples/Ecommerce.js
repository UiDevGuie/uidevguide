import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderEcommerce from "components/headers/HeaderEcommerce.js";
import BlogCard13 from "components/cards/BlogCard13.js";
import BlogCard14 from "components/cards/BlogCard14.js";
import BlogCard15 from "components/cards/BlogCard15.js";
import ProductCard1 from "components/cards/ProductCard1.js";
import ProductCard2 from "components/cards/ProductCard2.js";
import ProductCard3 from "components/cards/ProductCard3.js";
import ProductCard4 from "components/cards/ProductCard4.js";
import Blogs1 from "components/blogs/Blogs1.js";
import ProductCard5 from "components/cards/ProductCard5.js";
import ProductCard6 from "components/cards/ProductCard6.js";
import ProductCard7 from "components/cards/ProductCard7.js";
import ProductCard8 from "components/cards/ProductCard8.js";
import Testimonials4 from "components/testimonials/Testimonials4.js";

function Ecommerce() {
  React.useEffect(() => {
    document.body.classList.add("ecommerce-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <HeaderEcommerce />
        <div className="main">
          <Container>
            <Row>
              <Col lg="4" md="6">
                <BlogCard13 />
              </Col>
              <Col lg="4" md="6">
                <BlogCard14 />
              </Col>
              <Col lg="4" md="6">
                <BlogCard15 />
              </Col>
            </Row>
          </Container>
          <div className="section">
            <Container>
              <Row>
                <Col className="mx-auto text-center" md="10">
                  <h3 className="desc my-5">Fresh new collection</h3>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Row>
                    <Col lg="3" md="6">
                      <ProductCard1 />
                    </Col>
                    <Col lg="3" md="6">
                      <ProductCard2 />
                    </Col>
                    <Col lg="3" md="6">
                      <ProductCard3 />
                    </Col>
                    <Col lg="3" md="6">
                      <ProductCard4 />
                    </Col>
                    <Col className="ml-auto mr-auto mt-5 text-center" md="3">
                      <Button
                        className="btn-round btn-simple"
                        color="primary"
                        id="tooltip785249400"
                      >
                        Load more...
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip785249400"
                      ></UncontrolledTooltip>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="text-center">
            <Blogs1 />
          </div>
          <div className="section">
            <Container>
              <Row>
                <Col className="mx-auto text-center" md="10">
                  <h3 className="desc my-5">The latest accessories</h3>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Row>
                    <Col lg="3" md="6">
                      <ProductCard5 />
                    </Col>
                    <Col lg="3" md="6">
                      <ProductCard6 />
                    </Col>
                    <Col lg="3" md="6">
                      <ProductCard7 />
                    </Col>
                    <Col lg="3" md="6">
                      <ProductCard8 />
                    </Col>
                    <Col className="ml-auto mr-auto mt-5 text-center" md="3">
                      <Button
                        className="btn-round btn-simple"
                        color="primary"
                        id="tooltip254614079"
                      >
                        Load more...
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip254614079"
                      ></UncontrolledTooltip>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <Testimonials4 />
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default Ecommerce;
