import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderProductPage from "components/headers/HeaderProductPage.js";
import Item from "components/product-page/Item.js";
import Testimonials3 from "components/testimonials/Testimonials3.js";
import ProductCard9 from "components/cards/ProductCard9.js";
import ProductCard10 from "components/cards/ProductCard10.js";
import ProductCard11 from "components/cards/ProductCard11.js";
import ProductCard12 from "components/cards/ProductCard12.js";

function ProductPage() {
  React.useEffect(() => {
    document.body.classList.add("product-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("product-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <HeaderProductPage />
        <Item />
        <div className="section">
          <Testimonials3 />
        </div>
        <div className="section related-products bg-secondary skew-separator skew-top">
          <Container>
            <Col md="8">
              <h2 className="title">You may also like</h2>
            </Col>
            <Row>
              <Col lg="3" md="6">
                <ProductCard9 />
              </Col>
              <Col lg="3" md="6">
                <ProductCard10 />
              </Col>
              <Col lg="3" md="6">
                <ProductCard11 />
              </Col>
              <Col lg="3" md="6">
                <ProductCard12 />
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default ProductPage;
