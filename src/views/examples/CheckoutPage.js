import React from "react";
// JavaScript library for creating Dropdown Selects
import Choices from "choices.js";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroup,
  Media,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

function CheckoutPage() {
  const [discountFocus, setDiscountFocus] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("tab1");
  React.useEffect(() => {
    new Choices("#choices-single-default", {
      searchEnabled: false,
    });
    document.body.classList.add("checkout-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("checkout-page");
    };
  }, []);
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <div className="section-shaped my-0 skew-separator skew-mini">
          <div className="page-header page-header-small header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/pages/photo-15.jpg") + ")",
              }}
            ></div>
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col className="px-5" lg="6" md="8" xl="5">
                    <h1 className="text-white">Checkout</h1>
                    <p className="text-lead text-white">
                      We’ll show you the checkout page optimization tips that’ll
                      make your visitors want.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
        <div className="upper">
          <Container>
            <Row>
              <Col lg="4">
                <Container>
                  <h3 className="title text-white mt-3">Order summary</h3>
                  <Row>
                    <Card>
                      <CardBody>
                        <Media className="align-items-center mb-3">
                          <Col md="5" xs="6">
                            <img
                              alt="..."
                              className="img-fluid"
                              src={require("assets/img/pages/gucci.png")}
                            ></img>
                          </Col>
                          <Media body>
                            <h2 className="h6">Shorts</h2>
                            <small className="d-block opacity-8">Small</small>
                          </Media>
                          <Media body className="text-right">
                            <span>$29</span>
                          </Media>
                        </Media>
                        <Media className="align-items-center">
                          <Col md="5" xs="6">
                            <img
                              alt="..."
                              className="img-fluid"
                              src={require("assets/img/pages/jacket.png")}
                            ></img>
                          </Col>
                          <Media body>
                            <h2 className="h6 mb-0">Jacket</h2>
                          </Media>
                          <Media body className="text-right">
                            <span>$999</span>
                          </Media>
                        </Media>
                        <hr className="line-info mb-3"></hr>
                        <Form className="code-validate">
                          <label>Discount</label>
                          <InputGroup className={discountFocus}>
                            <Input
                              aria-label="Discount"
                              name="name"
                              placeholder="Discount Code"
                              type="text"
                              onFocus={() => setDiscountFocus("focused")}
                              onBlur={() => setDiscountFocus("")}
                            ></Input>
                            <InputGroupAddon addonType="append">
                              <Button color="info" type="submit">
                                Apply
                              </Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </Form>
                        <hr className="line-info mb-3"></hr>
                        <Media className="align-items-center">
                          <h3 className="h6 opacity-8 mr-3">Subtotal</h3>
                          <Media body className="text-right">
                            <span>$1038</span>
                          </Media>
                        </Media>
                        <Media className="align-items-center">
                          <h3 className="h6 opacity-8 mr-3">Shipping</h3>
                          <Media body className="text-right">
                            <span>$5.8</span>
                          </Media>
                        </Media>
                        <hr className="line-info mb-3"></hr>
                        <Media className="align-items-center">
                          <h3 className="h6">Total</h3>
                          <Media body className="text-right">
                            <span className="font-weight-semi-bold">
                              $1045.8
                            </span>
                          </Media>
                        </Media>
                      </CardBody>
                    </Card>
                  </Row>
                </Container>
              </Col>
              <Col lg="8">
                <Card>
                  <Form className="js-validate">
                    <Container>
                      <h3 className="title mt-3">Billing address</h3>
                      <Row>
                        <Col md="6">
                          <label className="labels">
                            First name <span className="text-danger">*</span>
                          </label>
                          <Input
                            aria-label="Cristopher"
                            name="firstName"
                            placeholder="Cristopher"
                            required=""
                            type="text"
                          ></Input>
                        </Col>
                        <Col md="6">
                          <label className="labels">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <Input
                            aria-label="Thompson"
                            name="lastName"
                            placeholder="Thompson"
                            required=""
                            type="text"
                          ></Input>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col md="6">
                          <div className="js-form-message">
                            <label className="labels">
                              Email address{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <Input
                              aria-label="thompson@gmail.com"
                              name="emailAddress"
                              placeholder="thompson@gmail.com"
                              required=""
                              type="email"
                            ></Input>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="js-form-message">
                            <label className="labels">Phone</label>
                            <Input
                              aria-label="+4 (0762) 230991"
                              placeholder="+4 (0762) 230991"
                              type="text"
                            ></Input>
                          </div>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col md="8">
                          <div className="js-form-message">
                            <label className="labels">
                              Street address{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <Input
                              aria-label="420 Long Beach, CA"
                              name="streetAddress"
                              placeholder="420 Long Beach, CA"
                              required=""
                              type="text"
                            ></Input>
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="js-form-message">
                            <label className="labels">
                              Postcode/Zip{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <Input
                              aria-label="340112"
                              name="postcode"
                              placeholder="340112"
                              required=""
                              type="text"
                            ></Input>
                          </div>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col md="4">
                          <div className="js-form-message mb-4">
                            <label className="labels">Apt, suite, etc.</label>
                            <Input
                              aria-label="YC7B 3UT"
                              placeholder="YC7B 3UT"
                              type="text"
                            ></Input>
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="js-form-message mb-4">
                            <label className="labels">
                              City <span className="text-danger">*</span>
                            </label>
                            <Input
                              aria-label="London"
                              name="cityAddress"
                              placeholder="London"
                              required=""
                              type="text"
                            ></Input>
                          </div>
                        </Col>
                        <Col md="4">
                          <div className="mb-4">
                            <label className="labels">
                              Country <span className="text-danger">*</span>
                            </label>
                            <Input
                              data-trigger=""
                              id="choices-single-default"
                              name="choices-single-default"
                              type="select"
                            >
                              <option>Select country</option>
                              <option defaultValue="CZ">Czech Republic</option>
                              <option defaultValue="DK">Denmark</option>
                              <option defaultValue="DO">
                                Dominican Republic
                              </option>
                              <option defaultValue="IQ">Iraq</option>
                              <option defaultValue="IL">Israel</option>
                              <option defaultValue="IT">Italy</option>
                              <option defaultValue="JM">Jamaica</option>
                              <option defaultValue="JP">Japan</option>
                              <option defaultValue="MG">Madagascar</option>
                              <option defaultValue="MT">Malta</option>
                              <option defaultValue="NO">Norway</option>
                              <option defaultValue="PL">Poland</option>
                              <option defaultValue="PT">Portugal</option>
                              <option defaultValue="RO">Romania</option>
                              <option defaultValue="RU">
                                Russian Federation
                              </option>
                              <option defaultValue="LC">Saint Lucia</option>
                              <option defaultValue="WS">Samoa</option>
                              <option defaultValue="SM">San Marino</option>
                              <option defaultValue="SA">Saudi Arabia</option>
                              <option defaultValue="ES">Spain</option>
                              <option defaultValue="SZ">Swaziland</option>
                              <option defaultValue="SE">Sweden</option>
                              <option defaultValue="TR">Turkey</option>
                              <option defaultValue="UG">Uganda</option>
                              <option defaultValue="UA">Ukraine</option>
                              <option defaultValue="AE">
                                United Arab Emirates
                              </option>
                              <option defaultValue="GB">United Kingdom</option>
                              <option defaultValue="US">United States</option>
                              <option defaultValue="VN">Viet Nam</option>
                            </Input>
                          </div>
                        </Col>
                      </Row>
                      <h4 className="title">Payment method</h4>
                      <ButtonGroup
                        className="nav nav-tabs nav-tabs-primary"
                        role="tablist"
                      >
                        <Button
                          color="info"
                          className={activeTab === "tab1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("tab1");
                          }}
                          outline
                          role="tablist"
                          size="sm"
                        >
                          Credit Card
                        </Button>
                        <Button
                          color="info"
                          className={activeTab === "tab2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("tab2");
                          }}
                          outline
                          role="tablist"
                          size="sm"
                        >
                          PayPal
                        </Button>
                      </ButtonGroup>
                      <TabContent className="tab-space" activeTab={activeTab}>
                        <TabPane tabId="tab1">
                          <Row>
                            <Col md="12">
                              <div className="js-form-message">
                                <label className="form-label">
                                  Card number
                                </label>
                                <Input
                                  aria-label="**** **** **** ***"
                                  name="cardNumber"
                                  placeholder="**** **** **** ***"
                                  required=""
                                  type="text"
                                ></Input>
                              </div>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col md="8">
                              <div className="js-form-message mb-4">
                                <label className="form-label">
                                  Card holder
                                </label>
                                <Input
                                  aria-label="Jack Wayley"
                                  name="cardHolder"
                                  placeholder="Jack Wayley"
                                  required=""
                                  type="text"
                                ></Input>
                              </div>
                            </Col>
                            <Col md="2">
                              <div className="js-form-message mb-4">
                                <label className="form-label">Expiration</label>
                                <Input
                                  aria-label="MM/YY"
                                  name="cardExpirationDate"
                                  placeholder="MM/YY"
                                  required=""
                                  type="text"
                                ></Input>
                              </div>
                            </Col>
                            <Col md="2">
                              <div className="js-form-message mb-4">
                                <label className="form-label">CVC</label>
                                <Input
                                  aria-label="***"
                                  name="cardCVC"
                                  placeholder="***"
                                  required=""
                                  type="text"
                                ></Input>
                              </div>
                            </Col>
                          </Row>
                          <div className="d-flex justify-content-between align-items-center">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <span className="fas fa-angle-left mr-2"></span>
                              Return to cart
                            </a>
                            <Button color="info" size="sm" type="submit">
                              Order now
                            </Button>
                          </div>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <h5 className="text-white">Send payment to:</h5>
                          <Input
                            placeholder="Name or email"
                            required=""
                            type="text"
                          ></Input>
                          <br></br>
                          <Button color="info" size="sm" type="submit">
                            Pay with PayPal
                          </Button>
                        </TabPane>
                      </TabContent>
                    </Container>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default CheckoutPage;
