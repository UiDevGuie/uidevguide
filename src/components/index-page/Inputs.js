import React from "react";

// reactstrap components
import {
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

function Inputs() {
  const [searchFocus, setSearchFocus] = React.useState("");
  const [searchAlternativeFocus, setSearchAlternativeFocus] = React.useState(
    ""
  );
  const [birthdayFocus, setBirthdayFocus] = React.useState("");
  const [
    birthdayAlternativeFocus,
    setBirthdayAlternativeFocus,
  ] = React.useState("");
  return (
    <>
      <div className="section pb-0 section-components">
        <Container className="mb-5">
          <h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              Form controls
            </small>
          </div>
          <Row>
            <Col lg="4" sm="6">
              <FormGroup>
                <Input placeholder="Regular" type="text"></Input>
              </FormGroup>
              <FormGroup className={searchFocus}>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Search"
                    type="text"
                    onFocus={() => setSearchFocus("focused")}
                    onBlur={() => setSearchFocus("")}
                  ></Input>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg="4" sm="6">
              <FormGroup>
                <Input disabled placeholder="Regular" type="text"></Input>
              </FormGroup>
              <FormGroup className={birthdayFocus}>
                <InputGroup className="mb-4">
                  <Input
                    placeholder="Birthday"
                    type="text"
                    onFocus={() => setBirthdayFocus("focused")}
                    onBlur={() => setBirthdayFocus("")}
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg="4" sm="6">
              <FormGroup className="has-success">
                <Input
                  className="is-valid"
                  placeholder="Success"
                  type="text"
                ></Input>
              </FormGroup>
              <FormGroup className="has-danger">
                <Input
                  className="is-invalid"
                  placeholder="Error Input"
                  type="email"
                ></Input>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <div className="py-5 bg-secondary">
          <Container>
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Form controls (alternative)
              </small>
            </div>
            <Row>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup className={searchAlternativeFocus}>
                  <InputGroup className="input-group-alternative mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Search"
                      type="text"
                      onFocus={() => setSearchAlternativeFocus("focused")}
                      onBlur={() => setSearchAlternativeFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    disabled
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup className={birthdayAlternativeFocus}>
                  <InputGroup className="input-group-alternative mb-4">
                    <Input
                      placeholder="Birthday"
                      type="text"
                      onFocus={() => setBirthdayAlternativeFocus("focused")}
                      onBlur={() => setBirthdayAlternativeFocus("")}
                    ></Input>
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="4" sm="6">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-alternative is-valid"
                    placeholder="Success"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-alternative is-invalid"
                    placeholder="Error Input"
                    type="email"
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Inputs;
