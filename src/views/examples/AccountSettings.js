import React from "react";
// JavaScript library for creating Dropdown Selects
import Choices from "choices.js";
// reactstrap components
import {
  Alert,
  Button,
  Card,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import Upload from "components/upload/Upload.js";

function AccountSettings() {
  const [activeTab, setActiveTab] = React.useState("tab1");
  React.useEffect(() => {
    new Choices("#choices-single-default-1", {
      searchEnabled: false,
    });
    new Choices("#choices-single-default-2", {
      searchEnabled: false,
    });
    new Choices("#choices-single-default-3", {
      searchEnabled: false,
    });
    new Choices("#choices-single-default-4", {
      searchEnabled: false,
    });
    new Choices("#choices-single-default-5", {
      searchEnabled: false,
    });
    new Choices("#choices-single-default-6", {
      searchEnabled: false,
    });
    new Choices("#badges", {
      delimiter: ",",
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
      placeholder: true,
      placeholderValue: "+ Add",
    });

    document.body.classList.add("account-settings");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("account-settings");
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
                  "url(" + require("assets/img/pages/georgie.jpg") + ")",
              }}
            ></div>
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col className="px-5" lg="6" md="8" xl="5">
                    <h1 className="text-white">Your account</h1>
                    <p className="text-lead text-white">
                      That’s the main thing people are controlled by! Thoughts -
                      their perception of themselves!
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
        <div className="bg-secondary">
          <Card className="container bg-white mb-0">
            <Row>
              <Col md="3">
                <div className="section">
                  <section className="text-center">
                    <Upload
                      avatar
                      changeBtnColor="primary"
                      changeBtnClasses="btn-sm btn-round mt-3"
                      addBtnColor="primary"
                      addBtnClasses="btn-sm btn-round mt-3"
                      removeBtnClasses="btn-sm btn-round mt-1"
                    />
                    <h3 className="title mt-4">Charlie Bailey</h3>
                  </section>
                  <section>
                    <br></br>
                    <Nav className="flex-column" role="tablist">
                      <NavItem>
                        <NavLink
                          className={activeTab === "tab1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("tab1");
                          }}
                        >
                          <i className="tim-icons icon-single-02"></i>
                          General
                        </NavLink>
                      </NavItem>
                      <hr className="line-primary"></hr>
                      <NavItem>
                        <NavLink
                          className={activeTab === "tab2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("tab2");
                          }}
                        >
                          <i className="tim-icons icon-credit-card"></i>
                          Billing
                        </NavLink>
                      </NavItem>
                      <hr className="line-primary"></hr>
                      <NavItem>
                        <NavLink
                          className={activeTab === "tab3" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("tab3");
                          }}
                        >
                          <i className="tim-icons icon-lock-circle"></i>
                          Security
                        </NavLink>
                      </NavItem>
                      <hr className="line-primary"></hr>
                      <NavItem>
                        <NavLink
                          className={activeTab === "tab4" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("tab4");
                          }}
                        >
                          <i className="tim-icons icon-volume-98"></i>
                          Notifications
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </section>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div>
                    <div className="progress-container progress-primary">
                      <span className="progress-badge">Profile Completion</span>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-percentage">
                            <span className="text-primary">80%</span>
                          </div>
                        </div>
                        <Progress max="100" value="80"></Progress>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto" md="8">
                <div className="section">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="tab1">
                      <div>
                        <header>
                          <h2 className="text-uppercase">
                            General information
                          </h2>
                        </header>
                        <hr className="line-primary"></hr>
                        <br></br>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#firstName">
                              First Name
                            </label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <FormGroup>
                              <Input
                                defaultValue="Charlie"
                                id="firstName"
                                name="firstName"
                                required="required"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#lastName">
                              Last Name
                            </label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <FormGroup>
                              <Input
                                defaultValue="Bailey"
                                id="lastName"
                                name="lastName"
                                required="required"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels">I’m</label>
                          </Col>
                          <Col className="align-self-center" md="4">
                            <FormGroup>
                              <Input
                                data-trigger=""
                                id="choices-single-default-1"
                                name="choices-single-default-1"
                                type="select"
                              >
                                <option defaultValue="2">Male</option>
                                <option defaultValue="3">Female</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels">Birth Date</label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <Row>
                              <Col className="align-self-center" md="4">
                                <FormGroup>
                                  <Input
                                    data-trigger=""
                                    id="choices-single-default-2"
                                    name="choices-single-default-2"
                                    type="select"
                                  >
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup>
                                  <Input
                                    data-trigger=""
                                    id="choices-single-default-3"
                                    name="choices-single-default-3"
                                    type="select"
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup>
                                  <Input
                                    data-trigger=""
                                    id="choices-single-default-4"
                                    name="choices-single-default-4"
                                    type="select"
                                  >
                                    <option>1986</option>
                                    <option>1987</option>
                                    <option>1988</option>
                                    <option>1989</option>
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1995</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#email">
                              Email
                            </label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <FormGroup>
                              <Input
                                defaultValue="charlie.bailey@example.com"
                                id="email"
                                name="email"
                                required="required"
                                type="email"
                              ></Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#confirmEmail">
                              Confirm Email
                            </label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <FormGroup>
                              <Input
                                defaultValue="charlie.bailey@example.com"
                                id="confirmEmail"
                                name="confirmEmail"
                                required="required"
                                type="email"
                              ></Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#location">
                              Your Location
                            </label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <FormGroup>
                              <Input
                                defaultValue="Sydney, A"
                                id="location"
                                name="location"
                                required="required"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels" htmlFor="#phone">
                              Phone Number
                            </label>
                          </Col>
                          <Col className="align-self-center" md="4">
                            <FormGroup>
                              <Input
                                defaultValue="+40 745 031 200"
                                id="phone"
                                name="phone"
                                required="required"
                                type="tel"
                              ></Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels">Language</label>
                          </Col>
                          <Col className="align-self-center" md="4">
                            <FormGroup>
                              <Input
                                data-trigger=""
                                id="choices-single-default-5"
                                name="choices-single-default-5"
                                type="select"
                              >
                                <option>English</option>
                                <option defaultValue="2">French</option>
                                <option defaultValue="3">Spanish</option>
                                <option defaultValue="4">Deutsche</option>
                                <option defaultValue="4">Russian</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="3">
                            <label className="labels">Skills</label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <input
                              defaultValue="VueJs,Angular,Laravel,React"
                              id="badges"
                              placeholder="+ Add"
                              type="text"
                            ></input>
                          </Col>
                        </Row>
                        <Row className="mt-5">
                          <Col md="6">
                            <Button color="primary" type="submit">
                              Save Changes
                            </Button>
                            <Button color="primary" outline type="reset">
                              Cancel
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane tabId="tab2">
                      <header>
                        <h2 className="text-uppercase">Billing method</h2>
                      </header>
                      <hr className="line-primary"></hr>
                      <br></br>
                      <Table className="align-items-center">
                        <thead>
                          <tr>
                            <th scope="col">Card Type</th>
                            <th scope="col">Card Number</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <img
                                alt="..."
                                className="avatar"
                                src={require("assets/img/visas.png")}
                              ></img>
                            </th>
                            <td>
                              <span className="d-block">
                                •••• •••• •••• 8372
                              </span>
                              <small className="text-muted">Exp: 06/22</small>
                            </td>
                            <td className="text-center">
                              <div className="custom-control custom-radio">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="Radios1"
                                  name="custom-radio-1"
                                  type="radio"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="Radios1"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <Button
                                className="btn-simple"
                                color="danger"
                                size="sm"
                                type="submit"
                              >
                                <i className="tim-icons icon-simple-remove"></i>
                                Remove card
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <img
                                alt="..."
                                className="avatar mastercard"
                                src={require("assets/img/mastercard.png")}
                              ></img>
                            </th>
                            <td>
                              <span className="d-block">
                                •••• •••• •••• 1225
                              </span>
                              <small className="text-muted">Exp: 07/21</small>
                            </td>
                            <td className="text-center">
                              <div className="custom-control custom-radio">
                                <input
                                  className="custom-control-input"
                                  id="Radios2"
                                  name="custom-radio-1"
                                  type="radio"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="Radios2"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <Button
                                className="btn-simple"
                                color="danger"
                                size="sm"
                                type="submit"
                              >
                                <i className="tim-icons icon-simple-remove"></i>
                                Remove card
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <Button color="primary" size="sm">
                        <i className="tim-icons icon-simple-add"></i>
                        Add card
                      </Button>
                    </TabPane>
                    <TabPane tabId="tab3">
                      <div className="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
                        <header>
                          <h2 className="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">
                            Security Questions
                          </h2>
                        </header>
                        <hr className="line-primary"></hr>
                        <Form>
                          <Row>
                            <Col md="6">
                              <label>Security Question</label>
                              <FormGroup>
                                <Input
                                  data-trigger=""
                                  id="choices-single-default-6"
                                  name="choices-single-default-6"
                                  type="select"
                                >
                                  <option disabled>Your Question</option>
                                  <option defaultValue="2">Question 1</option>
                                  <option defaultValue="3">Question 2</option>
                                  <option defaultValue="4">Question 3</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <label>Your Answer</label>
                              <FormGroup>
                                <Input
                                  placeholder="Enter your answer"
                                  type="text"
                                ></Input>
                              </FormGroup>
                            </Col>
                          </Row>
                          <br></br>
                          <br></br>
                          <header>
                            <h2 className="text-uppercase">
                              Security Settings
                            </h2>
                          </header>
                          <hr className="line-primary"></hr>
                          <FormGroup className="d-flex align-items-center justify-content-between">
                            <span>Notify me via email when logging in</span>
                            <label className="custom-toggle">
                              <input type="checkbox"></input>
                              <span
                                className="custom-toggle-slider rounded-circle"
                                data-label-off="OFF"
                                data-label-on="ON"
                              ></span>
                            </label>
                          </FormGroup>
                          <FormGroup className="d-flex align-items-center justify-content-between">
                            <span>
                              Send SMS confirmation for all online payments
                            </span>
                            <label className="custom-toggle">
                              <input defaultChecked type="checkbox"></input>
                              <span
                                className="custom-toggle-slider rounded-circle"
                                data-label-off="OFF"
                                data-label-on="ON"
                              ></span>
                            </label>
                          </FormGroup>
                          <FormGroup className="d-flex align-items-center justify-content-between">
                            <span>
                              Check which devices accessed your account
                            </span>
                            <label className="custom-toggle">
                              <input type="checkbox"></input>
                              <span
                                className="custom-toggle-slider rounded-circle"
                                data-label-off="OFF"
                                data-label-on="ON"
                              ></span>
                            </label>
                          </FormGroup>
                          <FormGroup className="d-flex align-items-center justify-content-between">
                            <span>
                              Find My Device, make sure your device can be found
                              if it gets lost
                            </span>
                            <label className="custom-toggle">
                              <input defaultChecked type="checkbox"></input>
                              <span
                                className="custom-toggle-slider rounded-circle"
                                data-label-off="OFF"
                                data-label-on="ON"
                              ></span>
                            </label>
                          </FormGroup>
                          <FormGroup className="d-flex align-items-center justify-content-between">
                            <span>
                              Lock your device with a PIN, pattern, or password
                            </span>
                            <label className="custom-toggle">
                              <input defaultChecked type="checkbox"></input>
                              <span
                                className="custom-toggle-slider rounded-circle"
                                data-label-off="OFF"
                                data-label-on="ON"
                              ></span>
                            </label>
                          </FormGroup>
                          <FormGroup className="d-flex align-items-center justify-content-between">
                            <span>
                              Manage what apps have access to app-usage data on
                              your device
                            </span>
                            <label className="custom-toggle">
                              <input type="checkbox"></input>
                              <span
                                className="custom-toggle-slider rounded-circle"
                                data-label-off="OFF"
                                data-label-on="ON"
                              ></span>
                            </label>
                          </FormGroup>
                          <Row className="mt-5 justify-content-end">
                            <Col className="actions" md="4">
                              <Button
                                color="primary"
                                outline
                                size="sm"
                                type="reset"
                              >
                                Cancel
                              </Button>
                              <Button color="primary" size="sm" type="button">
                                Save Changes
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </TabPane>
                    <TabPane tabId="tab4">
                      <Container>
                        <Row>
                          <Col xs="12">
                            <Alert className="text-small" color="primary">
                              <i className="icon-shield"></i>
                              <span>
                                We will never distribute your email address to
                                third parties. Read about email communication in
                                our privacy policy.
                              </span>
                            </Alert>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col xs="12">
                            <Form>
                              <h5 className="mb-4">Notification Preferences</h5>
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="notification1"
                                  type="checkbox"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="notification1"
                                >
                                  <span>Someone mentions me</span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="notification2"
                                  type="checkbox"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="notification2"
                                >
                                  <span>Someone follows me</span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  className="custom-control-input"
                                  id="notification3"
                                  type="checkbox"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="notification3"
                                >
                                  <span>Someone shares my activty</span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  className="custom-control-input"
                                  id="notification4"
                                  type="checkbox"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="notification4"
                                >
                                  <span>Someone messages me</span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  className="custom-control-input"
                                  id="notification5"
                                  type="checkbox"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="notification5"
                                >
                                  <span>Someone adds me to a project</span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox mb-3">
                                <input
                                  className="custom-control-input"
                                  id="notification6"
                                  type="checkbox"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="notification6"
                                >
                                  <span>Sales and promotions</span>
                                </label>
                              </div>
                              <Button
                                className="mt-3 mb-5"
                                color="primary"
                                size="sm"
                                type="submit"
                              >
                                Update preferences
                              </Button>
                            </Form>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col xs="12">
                            <Form>
                              <h5>Notification Frequency</h5>
                              <div className="custom-control custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="freq1"
                                  name="custom-radio-1"
                                  type="radio"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="freq1"
                                >
                                  <span>Daily</span>
                                </label>
                              </div>
                              <div className="custom-control custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="freq2"
                                  name="custom-radio-1"
                                  type="radio"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="freq2"
                                >
                                  <span>Weekly</span>
                                </label>
                              </div>
                              <div className="custom-control custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="freq3"
                                  name="custom-radio-1"
                                  type="radio"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="freq3"
                                >
                                  <span>Monthly</span>
                                </label>
                              </div>
                              <div className="custom-control custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="freq4"
                                  name="custom-radio-1"
                                  type="radio"
                                ></input>
                                <label
                                  className="custom-control-label"
                                  htmlFor="freq4"
                                >
                                  <span>Never</span>
                                </label>
                              </div>
                              <Button
                                className="mt-3"
                                color="primary"
                                size="sm"
                                type="submit"
                              >
                                Update
                              </Button>
                            </Form>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default AccountSettings;
