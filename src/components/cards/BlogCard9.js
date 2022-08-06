import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

// Core Components

function BlogCard9() {
  return (
    <>
      <Card>
        <CardImg
          alt="..."
          src={require("assets/img/ill/linth3.svg")}
          top
        ></CardImg>
        <CardBody>
          <CardTitle className="h5 mb-0">Get started with Argon</CardTitle>
          <small className="text-muted">
            by John Snow on Oct 29th at 10:23 AM
          </small>
          <CardText className="mt-4">
            Argon is a great free UI package based on Bootstrap 4 that includes
            the most important components and features.
          </CardText>
          <Button
            className="px-0"
            color="link"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            View article
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard9;
