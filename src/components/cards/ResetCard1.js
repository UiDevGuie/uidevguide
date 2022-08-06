import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// Core Components

function ResetCard1() {
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardHeader>
          <CardImg
            alt="..."
            src={require("assets/img/ill/bg5-1.svg")}
          ></CardImg>
          <CardTitle className="text-center" tag="h4">
            Reset Password
          </CardTitle>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Enter email address to reset password</small>
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
            <div className="text-center">
              <Button className="my-4" color="primary" type="button">
                Send
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default ResetCard1;
