import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import ContactUs3 from "components/contact-us/ContactUs3.js";

const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#444444",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100,
              },
              {
                lightness: 45,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#C5CBF5",
              },
              {
                visibility: "on",
              },
            ],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function ContactUs() {
  const [firstNameFocus, setFirstNameFocus] = React.useState("");
  const [lastNameFocus, setLastNameFocus] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState("");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <DemoNavbar type="dark" />
      <div className="wrapper">
        <ContactUs3 />
        <div className="main">
          <Container fluid>
            <Row className="mt-5 mb-4 pt-5">
              <Col className="ml-auto mr-auto text-center mt-5" md="8">
                <Badge color="info">Leave a message</Badge>
                <h1 className="title">
                  Tell us more about <b>yourself</b>
                </h1>
                <h4 className="desc">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto" md="6">
                <Card
                  className="bg-secondary p-3"
                  id="contact-form"
                  method="post"
                  role="form"
                  tag="form"
                >
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <FormGroup className={firstNameFocus}>
                          <label>First name</label>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={() => setFirstNameFocus("focused")}
                              onBlur={() => setFirstNameFocus("")}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className={lastNameFocus}>
                          <label>Last name</label>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-tag"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              placeholder="Last Name..."
                              type="text"
                              onFocus={() => setLastNameFocus("focused")}
                              onBlur={() => setLastNameFocus("")}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup className={emailFocus}>
                      <label>Email address</label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Here..."
                          type="text"
                          onFocus={() => setEmailFocus("focused")}
                          onBlur={() => setEmailFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        className="form-control-alternative"
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <Row className="justify-content-end">
                      <Col className="text-right" md="6">
                        <Button color="primary" type="submit">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              className="map skew-separator skew-top"
              id="map-contactus-3"
              style={{
                height: "500px",
                position: "relative",
                overflow: "hidden",
              }}
            />
          }
          mapElement={<div />}
        />
        <DemoFooter />
      </div>
    </>
  );
}

export default ContactUs;
