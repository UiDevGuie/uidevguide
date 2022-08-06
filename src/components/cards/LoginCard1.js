import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// Core Components

function LoginCard1() {
  const [emailFocus, setEmailFocus] = React.useState("");
  const [passwordFocus, setPasswordFocus] = React.useState("");
  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-white pb-5">
          <div className="text-muted text-center mb-3">
            <small>Login with</small>
          </div>
          <div className="btn-wrapper text-center">
            <Button
              className="btn-neutral btn-icon"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon">
                <img
                  alt="..."
                  src={require("assets/img/icons/common/github.svg")}
                ></img>
              </span>
              <span className="btn-inner--text">Github</span>
            </Button>
            <Button
              className="btn-neutral btn-icon"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="btn-inner--icon">
                <img
                  alt="..."
                  src={require("assets/img/icons/common/google.svg")}
                ></img>
              </span>
              <span className="btn-inner--text">Google</span>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Or login with credentials</small>
          </div>
          <Form role="form">
            <FormGroup className={"mb-3 " + emailFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="email"
                  onFocus={() => setEmailFocus("focused")}
                  onBlur={() => setEmailFocus("")}
                ></Input>
              </InputGroup>
            </FormGroup>
            <FormGroup className={passwordFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Password"
                  type="password"
                  onFocus={() => setPasswordFocus("focused")}
                  onBlur={() => setPasswordFocus("")}
                ></Input>
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin2"
                type="checkbox"
              ></input>
              <label
                className="custom-control-label"
                htmlFor=" customCheckLogin2"
              >
                <span className="text-default opacity-5">Remember me</span>
              </label>
            </div>
            <div className="text-center">
              <Button className="my-4" color="primary" type="button">
                Login
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default LoginCard1;
