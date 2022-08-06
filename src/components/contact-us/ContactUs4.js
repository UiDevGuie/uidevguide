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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
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

function ContactUs4() {
  const [firstNameFocus, setFirstNameFocus] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <div className="contactus-4">
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="map" id="map-contactus-2" />}
          mapElement={<div />}
        />
        <Container>
          <Row>
            <Col md="5">
              <h1 className="title text-white">Get in Touch</h1>
              <h4 className="description text-white">
                Do you need more information? Please contact us to find more
                about our products and services.
              </h4>
            </Col>
            <Col className="m-auto" md="12">
              <Card className="card-contact card-raised">
                <Row>
                  <Col className="pr-md-0" lg="8" md="7">
                    <Form
                      className="p-3"
                      id="contact-form-3"
                      method="post"
                      role="form"
                    >
                      <CardHeader>
                        <CardTitle tag="h4">Send us a message</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <FormGroup className={firstNameFocus}>
                              <label>First name</label>
                              <InputGroup>
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
                            <FormGroup className={emailFocus}>
                              <label>Last name</label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-collection"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  aria-label="Last Name..."
                                  placeholder="Last Name..."
                                  type="text"
                                  onFocus={() => setEmailFocus("focused")}
                                  onBlur={() => setEmailFocus("")}
                                ></Input>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email Here..."
                              type="text"
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="contact-us-message-4"
                            name="message"
                            rows="6"
                            type="textarea"
                          ></Input>
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="customCheck2"
                                type="checkbox"
                              ></input>
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck2"
                              >
                                <span>I'm not a robot</span>
                              </label>
                            </div>
                          </Col>
                          <Col md="6">
                            <Button
                              className="pull-right"
                              color="info"
                              type="submit"
                            >
                              Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Col>
                  <Col className="pl-md-0" lg="4" md="5">
                    <div className="info text-left bg-info">
                      <CardTitle className="text-white" tag="h4">
                        Contact information
                      </CardTitle>
                      <div className="info info-horizontal mt-lg-5">
                        <div className="icon icon-shape bg-white rounded-circle text-info">
                          <i className="ni ni-square-pin"></i>
                        </div>
                        <div className="description">
                          <p className="info-title text-white mt-2">
                            345 Street 2, Bucharest
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-shape bg-white rounded-circle text-info">
                          <i className="ni ni-mobile-button"></i>
                        </div>
                        <div className="description">
                          <p className="info-title text-white mt-2">
                            +16(3412) 421 241
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-shape bg-white rounded-circle text-info">
                          <i className="ni ni-email-83"></i>
                        </div>
                        <div className="description">
                          <p className="info-title text-white mt-2">
                            contact@yoursite.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs4;
