import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function NavigationPills() {
  const [hTabsIcons, setHTabsIcons] = React.useState("hTabsIcons-1");
  const [hTabsText, setHTabsText] = React.useState("hTabsText-1");
  const [hTabs1, setHTabs1] = React.useState("hTabs1-1");
  const [vTabs1, setVTabs1] = React.useState("vTabs1-1");
  const [hTabs2, setHTabs2] = React.useState("hTabs2-3");
  const [vTabs2, setVTabs2] = React.useState("vTabs2-1");
  const [hTabs3, setHTabs3] = React.useState("hTabs3-3");
  const [vTabs3, setVTabs3] = React.useState("vTabs3-1");
  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4">Tabs</h3>
      <Row className="justify-content-center">
        <Col lg="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              With icons
            </small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  className={
                    "mb-sm-3 mb-md-0 " +
                    (hTabsIcons === "hTabsIcons-1" ? "active" : "")
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHTabsIcons("hTabsIcons-1");
                  }}
                >
                  <i className="ni ni-cloud-upload-96 mr-2"></i>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    "mb-sm-3 mb-md-0 " +
                    (hTabsIcons === "hTabsIcons-2" ? "active" : "")
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHTabsIcons("hTabsIcons-2");
                  }}
                >
                  <i className="ni ni-bell-55 mr-2"></i>
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    "mb-sm-3 mb-md-0 " +
                    (hTabsIcons === "hTabsIcons-3" ? "active" : "")
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHTabsIcons("hTabsIcons-3");
                  }}
                >
                  <i className="ni ni-calendar-grid-58 mr-2"></i>
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent id="myTabContent" activeTab={hTabsIcons}>
                <TabPane tabId="hTabsIcons-1" role="tabpanel">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </TabPane>
                <TabPane tabId="hTabsIcons-2" role="tabpanel">
                  <p className="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </TabPane>
                <TabPane tabId="hTabsIcons-3" role="tabpanel">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
        <Col className="mt-5 mt-lg-0" lg="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">With text</small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  className={
                    "mb-sm-3 mb-md-0 " +
                    (hTabsText === "hTabsText-1" ? "active" : "")
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHTabsText("hTabsText-1");
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    "mb-sm-3 mb-md-0 " +
                    (hTabsText === "hTabsText-2" ? "active" : "")
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHTabsText("hTabsText-2");
                  }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    "mb-sm-3 mb-md-0 " +
                    (hTabsText === "hTabsText-3" ? "active" : "")
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHTabsText("hTabsText-3");
                  }}
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent id="myTabContent" activeTab={hTabsText}>
                <TabPane tabId="hTabsText-1" role="tabpanel">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </TabPane>
                <TabPane tabId="hTabsText-2" role="tabpanel">
                  <p className="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </TabPane>
                <TabPane tabId="hTabsText-3" role="tabpanel">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div className="section section-pills">
        <Container>
          <div id="navigation-pills">
            <div className="title">
              <h4 className="h4 text-success font-weight-bold mb-4">
                Navigation Pills
              </h4>
            </div>
            <Row>
              <Col md="6">
                <div className="mb-3">
                  <small className="text-uppercase font-weight-bold">
                    Horizontal tabs
                  </small>
                </div>
                <div className="nav-wrapper">
                  <Nav className="nav-pills-primary" pills role="tablist">
                    <NavItem>
                      <NavLink
                        className={hTabs1 === "hTabs1-1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setHTabs1("hTabs1-1");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={hTabs1 === "hTabs1-2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setHTabs1("hTabs1-2");
                        }}
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={hTabs1 === "hTabs1-3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setHTabs1("hTabs1-3");
                        }}
                      >
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className="card-plain">
                  <TabContent className="tab-space" activeTab={hTabs1}>
                    <TabPane tabId="hTabs1-1">
                      <p className="description">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br></br>
                        <br></br>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane tabId="hTabs1-2">
                      <p className="description">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </TabPane>
                    <TabPane tabId="hTabs1-3">
                      <p className="description">
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br></br>
                        <br></br>
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                  </TabContent>
                </Card>
              </Col>
              <Col md="6">
                <div className="mb-3">
                  <small className="text-uppercase font-weight-bold">
                    Vertical tabs
                  </small>
                </div>
                <Row>
                  <Col md="4">
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-pills-primary flex-column"
                        pills
                        role="tablist"
                      >
                        <NavItem className="p-0 text-center">
                          <NavLink
                            className={vTabs1 === "vTabs1-1" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setVTabs1("vTabs1-1");
                            }}
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem className="p-0 text-center">
                          <NavLink
                            className={vTabs1 === "vTabs1-2" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setVTabs1("vTabs1-2");
                            }}
                          >
                            Settings
                          </NavLink>
                        </NavItem>
                        <NavItem className="text-center">
                          <NavLink
                            className={vTabs1 === "vTabs1-3" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setVTabs1("vTabs1-3");
                            }}
                          >
                            Options
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <Col md="8">
                    <Card className="card-plain">
                      <TabContent className="mt-2" activeTab={vTabs1}>
                        <TabPane tabId="vTabs1-1">
                          <p className="description">
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits. <br></br>
                            <br></br>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI.
                          </p>
                        </TabPane>
                        <TabPane tabId="vTabs1-2">
                          <p className="description">
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas. <br></br>
                            <br></br>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions.
                          </p>
                        </TabPane>
                        <TabPane tabId="vTabs1-3">
                          <p className="description">
                            Completely synergize resource taxing relationships
                            via premier niche markets. Professionally cultivate
                            one-to-one customer service with robust ideas.{" "}
                            <br></br>
                            <br></br>
                            Dynamically innovate resource-leveling customer
                            service for state of the art customer service.
                          </p>
                        </TabPane>
                      </TabContent>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="mb-4">
              <small className="text-uppercase font-weight-bold">
                With Icons
              </small>
            </div>
            <Row>
              <Col md="6">
                <div className="nav-wrapper">
                  <Nav
                    className="nav-pills-info nav-fill flex-column flex-md-row"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={
                          "mb-sm-3 mt-md-3 mt-lg-0 " +
                          (hTabs2 === "hTabs2-1" ? "active" : "")
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setHTabs2("hTabs2-1");
                        }}
                      >
                        <i className="ni ni-cloud-upload-96 mr-2"></i>
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          "mb-sm-3 mt-md-3 mt-lg-0 " +
                          (hTabs2 === "hTabs2-2" ? "active" : "")
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setHTabs2("hTabs2-2");
                        }}
                      >
                        <i className="ni ni-bell-55 mr-2"></i>
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          "mb-sm-3 mt-md-3 mt-lg-0 " +
                          (hTabs2 === "hTabs2-3" ? "active" : "")
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setHTabs2("hTabs2-3");
                        }}
                      >
                        <i className="ni ni-calendar-grid-58 mr-2"></i>
                        Messages
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className="card-plain">
                  <TabContent className="tab-space" activeTab={hTabs2}>
                    <TabPane tabId="hTabs2-1">
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth
                        master cleanse. Mustache cliche tempor, williamsburg
                        carles vegan helvetica. Reprehenderit butcher retro
                        keffiyeh dreamcatcher synth.
                      </p>
                      <p className="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth
                        master cleanse.
                      </p>
                    </TabPane>
                    <TabPane tabId="hTabs2-2">
                      <p className="description">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </TabPane>
                    <TabPane tabId="hTabs2-3">
                      <p className="description">
                        Cosby sweater eu banh mi, qui irure terry richardson ex
                        squid. Aliquip placeat salvia cillum iphone. Seitan
                        aliquip quis cardigan american apparel, butcher
                        voluptate nisi qui. <br></br>
                        <br></br>
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                  </TabContent>
                </Card>
              </Col>
              <Col md="6">
                <Row>
                  <Col lg="3" md="6">
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-pills-danger nav-pills-icons flex-column"
                        pills
                        role="tablist"
                      >
                        <NavItem className="p-0">
                          <NavLink
                            className={vTabs2 === "vTabs2-1" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setVTabs2("vTabs2-1");
                            }}
                          >
                            <i className="ni ni-istanbul"></i>
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs2 === "vTabs2-2" ? "active" : ""}
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              setVTabs2("vTabs2-2");
                            }}
                          >
                            <i className="ni ni-settings-gear-65"></i>
                            Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <Col md="8">
                    <Card className="card-plain">
                      <TabContent className="mt-2" activeTab={vTabs2}>
                        <TabPane tabId="vTabs2-1">
                          <p className="description">
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits. <br></br>
                            <br></br>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI.
                          </p>
                        </TabPane>
                        <TabPane tabId="vTabs2-2">
                          <p className="description">
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas. <br></br>
                            <br></br>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions.
                          </p>
                        </TabPane>
                      </TabContent>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="mb-4">
              <small className="text-uppercase font-weight-bold">
                Just Icons
              </small>
            </div>
            <Row>
              <Col className="mb-5" md="6">
                <Row>
                  <Col md="3">
                    <Nav
                      className="nav-pills-warning nav-pills-circle mb-3"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={vTabs3 === "vTabs3-1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setVTabs3("vTabs3-1");
                          }}
                        >
                          <span className="nav-link-icon d-block">
                            <i className="ni ni-atom"></i>
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={vTabs3 === "vTabs3-2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setVTabs3("vTabs3-2");
                          }}
                        >
                          <span className="nav-link-icon d-block">
                            <i className="ni ni-chat-round"></i>
                          </span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={vTabs3}>
                      <TabPane tabId="vTabs3-1">
                        <p className="description">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits. <br></br>
                          <br></br>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </p>
                      </TabPane>
                      <TabPane tabId="vTabs3-2">
                        <p className="description">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas. <br></br>
                          <br></br>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                <Nav
                  className="nav-pills-success nav-pills-circle mb-3"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      className={hTabs3 === "hTabs3-1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setHTabs3("hTabs3-1");
                      }}
                    >
                      <span className="nav-link-icon d-block">
                        <i className="ni ni-atom"></i>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs3 === "hTabs3-2" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setHTabs3("hTabs3-2");
                      }}
                    >
                      <span className="nav-link-icon d-block">
                        <i className="ni ni-chat-round"></i>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={hTabs3 === "hTabs3-3" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setHTabs3("hTabs3-3");
                      }}
                    >
                      <span className="nav-link-icon d-block">
                        <i className="ni ni-cloud-download-95"></i>
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Card className="card-plain">
                  <TabContent className="tab-space" activeTab={hTabs3}>
                    <TabPane tabId="hTabs3-1">
                      <p className="description">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br></br>
                        <br></br>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane tabId="hTabs3-2">
                      <p className="description">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </TabPane>
                    <TabPane tabId="hTabs3-3">
                      <p className="description">
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br></br>
                        <br></br>
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                  </TabContent>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NavigationPills;
