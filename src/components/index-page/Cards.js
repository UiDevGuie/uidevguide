import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
// Blog Cards
import BlogCard1 from "components/cards/BlogCard1.js";
import BlogCard2 from "components/cards/BlogCard2.js";
import BlogCard3 from "components/cards/BlogCard3.js";
import BlogCard4 from "components/cards/BlogCard4.js";
import BlogCard5 from "components/cards/BlogCard5.js";
import BlogCard6 from "components/cards/BlogCard6.js";
import BlogCard7 from "components/cards/BlogCard7.js";
import BlogCard8 from "components/cards/BlogCard8.js";
import BlogCard9 from "components/cards/BlogCard9.js";
// Profile Cards
import ProfileCard1 from "components/cards/ProfileCard1.js";
import ProfileCard2 from "components/cards/ProfileCard2.js";
import ProfileCard3 from "components/cards/ProfileCard3.js";
import ProfileCard4 from "components/cards/ProfileCard4.js";
import ProfileCard5 from "components/cards/ProfileCard5.js";
import ProfileCard6 from "components/cards/ProfileCard6.js";
// Full Background Cards
import FullBackgroundCard1 from "components/cards/FullBackgroundCard1.js";
import FullBackgroundCard2 from "components/cards/FullBackgroundCard2.js";
import FullBackgroundCard3 from "components/cards/FullBackgroundCard3.js";
// Pricing Cards
import PricingCard1 from "components/cards/PricingCard1.js";
import PricingCard2 from "components/cards/PricingCard2.js";
import PricingCard3 from "components/cards/PricingCard3.js";
import PricingCard4 from "components/cards/PricingCard4.js";
import PricingCard5 from "components/cards/PricingCard5.js";
import PricingCard6 from "components/cards/PricingCard6.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <div className="section section-cards bg-secondary">
        <Container>
          <h2 className="mb-5">
            <span>Cards</span>
          </h2>
          <h3 className="h4 text-success font-weight-bold mb-4">Blog Cards</h3>
          <Row>
            <Col lg="4" md="6">
              <BlogCard1 />
              <BlogCard2 />
              <BlogCard3 />
            </Col>
            <Col lg="4" md="6">
              <BlogCard4 />
              <BlogCard5 />
              <BlogCard6 />
            </Col>
            <Col lg="4" md="6">
              <BlogCard7 />
              <BlogCard8 />
              <BlogCard9 />
            </Col>
          </Row>
          <h3 className="h4 text-success font-weight-bold mb-5 mt-5">
            Profile Cards
          </h3>
          <Row>
            <Col lg="4" md="6">
              <ProfileCard1 />
            </Col>
            <Col lg="4" md="6">
              <ProfileCard2 />
            </Col>
            <Col lg="4" md="6">
              <ProfileCard3 />
            </Col>
            <Col lg="4" md="6">
              <ProfileCard4 />
            </Col>
            <Col lg="4" md="6">
              <ProfileCard5 />
            </Col>
            <Col lg="4" md="6">
              <ProfileCard6 />
            </Col>
          </Row>
          <h3 className="h4 text-success font-weight-bold mb-5 mt-5">
            Full Background Cards
          </h3>
          <Row>
            <Col lg="3" md="6">
              <FullBackgroundCard1 />
            </Col>
            <Col lg="3" md="6">
              <FullBackgroundCard2 />
            </Col>
            <Col md="6">
              <FullBackgroundCard3 />
            </Col>
          </Row>
          <h3 className="h4 text-success font-weight-bold mb-5 mt-5">
            Pricing Cards
          </h3>
          <Row>
            <Col lg="4" md="6">
              <PricingCard1 />
            </Col>
            <Col lg="4" md="6">
              <PricingCard2 />
            </Col>
            <Col lg="4" md="6">
              <PricingCard3 />
            </Col>
            <Col lg="4" md="6">
              <PricingCard4 />
            </Col>
            <Col lg="4" md="6">
              <PricingCard5 />
            </Col>
            <Col lg="4" md="6">
              <PricingCard6 />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Index;
