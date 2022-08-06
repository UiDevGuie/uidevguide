import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// Core Components

function Examples() {
  return (
    <>
      <section className="section-examples">
        <Container>
          <Col className="mx-auto text-center" md="8">
            <div className="section-description">
              <h2 className="display-2">Example Pages</h2>
              <p className="lead">
                Forget about building everything from scratch. From landing
                pages to e-commerce or blog pages, you will be able jump start
                your development. Show your clients a quick prototype and get
                inspired for your next project!
              </p>
            </div>
          </Col>
          <Row className="mt-5">
            <Col md="4">
              <h5 className="title">About Us</h5>
              <Card>
                <Link to="/about-us">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/about-us.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Landing Page</h5>
              <Card>
                <Link to="/landing-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/landing-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Login Page</h5>
              <Card>
                <Link to="/login-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/login-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Register Page</h5>
              <Card>
                <Link to="/register-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/register-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Error 500</h5>
              <Card>
                <Link to="/500-error">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/500-error.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Error 404</h5>
              <Card>
                <Link to="/error">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/404-error.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Invoice Page</h5>
              <Card>
                <Link to="/invoice-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/invoice-page.png")}
                  ></img>
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <h5 className="title">Blog Post</h5>
              <Card>
                <Link to="/blog-post">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/blog-post.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Product Page</h5>
              <Card>
                <Link to="/product-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/product-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Profile Page</h5>
              <Card>
                <Link to="/profile-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/profile-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Account Settings</h5>
              <Card>
                <Link to="/account-settings">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/account-settings.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Reset Page</h5>
              <Card>
                <Link to="/reset-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/reset-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Checkout Page</h5>
              <Card>
                <Link to="/checkout-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/checkout-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Chat Page</h5>
              <Card>
                <Link to="/chat-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/chat-page.png")}
                  ></img>
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <h5 className="title">Pricing Page</h5>
              <Card>
                <Link to="/pricing-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/pricing-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Ecommerce</h5>
              <Card>
                <Link to="/ecommerce">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/ecommerce-page.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Blog Posts</h5>
              <Card>
                <Link to="/blog-posts">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/blog-posts.png")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Contact Us</h5>
              <Card>
                <Link to="/contact-us">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/contact-us.png")}
                  ></img>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Examples;
