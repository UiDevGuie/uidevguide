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

function ContactUs2() {
  const [firstNameFocus, setFirstNameFocus] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <div className="contactus-2">
        <MapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                width: "100%",
                height: "704px",
                display: "block",
                marginTop: "-80px",
              }}
              className="map"
              id="map-contactus-1"
            />
          }
          mapElement={<div />}
        />
        <Col lg="6" md="10">
          <Card className="card-contact card-raised">
            <Form id="contact-form-2" method="post" role="form">
              <CardHeader className="text-center">
                <CardTitle tag="h4">Contact Us</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-primary">
                        <i className="ni ni-mobile-button"></i>
                      </div>
                      <div className="description">
                        <h5 className="info-title mt-2">Give us a ring</h5>
                        <p className="ml-3">
                          Michael Jordan<br></br>
                          +40 762 321 762<br></br>
                          Mon - Fri, 8:00-22:00
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-primary">
                        <i className="ni ni-square-pin"></i>
                      </div>
                      <div className="description">
                        <h5 className="info-title mt-2">Find us at:</h5>
                        <p className="ml-3">
                          Mihail Kogalnic 8,<br></br>
                          7652 Bucharest,<br></br>
                          Romania
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
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
                      <label>Email address</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="email"
                          placeholder="Email Here..."
                          type="email"
                          onFocus={() => setEmailFocus("focused")}
                          onBlur={() => setEmailFocus("")}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md="6">
                    <div className="custom-control custom-checkbox mt-2">
                      <input
                        className="custom-control-input"
                        id="customCheck1"
                        type="checkbox"
                      ></input>
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        <span>I'm not a robot</span>
                      </label>
                    </div>
                  </Col>
                  <Col md="6" className="text-right">
                    <Button color="primary" type="submit">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default ContactUs2;
