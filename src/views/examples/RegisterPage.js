import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

function RegisterPage() {
  const [activeContainer, setActiveContainer] = React.useState("");
  const [signupNameFocus, setSignupNameFocus] = React.useState("");
  const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
  const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
  const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
  const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <div className="page-header bg-default">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/register_bg.png") + ")",
            }}
          ></div>
          <Container className={activeContainer}>
            <div className="form-container sign-up-container">
              <Form>
                <h2>Create Account</h2>
                <div className="social-container">
                  <Button color="facebook" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </Button>
                  <Button color="instagram" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Button>
                  <Button color="twitter" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </Button>
                </div>
                <span className="text-default mb-4">
                  or use your email for registration
                </span>
                <FormGroup className={"mb-3 " + signupNameFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      onFocus={() => setSignupNameFocus("focused")}
                      onBlur={() => setSignupNameFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={"mb-3 " + signupEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={() => setSignupEmailFocus("focused")}
                      onBlur={() => setSignupEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <Button color="primary">Sign Up</Button>
              </Form>
            </div>
            <div className="form-container sign-in-container">
              <Form action="#" role="form">
                <h2>Sign in</h2>
                <div className="social-container">
                  <Button color="facebook" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </Button>
                  <Button color="instagram" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Button>
                  <Button color="twitter" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </Button>
                </div>
                <span className="text-default mb-4">or use your account</span>
                <FormGroup className={"mb-3 " + signinEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={() => setSigninEmailFocus("focused")}
                      onBlur={() => setSigninEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signinPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={() => setSigninPasswordFocus("focused")}
                      onBlur={() => setSigninPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Forgot your password?
                </a>
                <Button className="mt-3" color="primary">
                  Sign In
                </Button>
              </Form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="text-white">Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <Button
                    className="btn-neutral"
                    color="default"
                    id="signIn"
                    size="sm"
                    onClick={() => setActiveContainer("")}
                  >
                    Sign In
                  </Button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="text-white">Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <Button
                    className="btn-neutral"
                    color="default"
                    id="signUp"
                    size="sm"
                    onClick={() => setActiveContainer("right-panel-active")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default RegisterPage;
