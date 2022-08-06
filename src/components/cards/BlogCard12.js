import React from "react";

// reactstrap components
import { Button, Card, CardBody } from "reactstrap";

// Core Components

function BlogCard12() {
  return (
    <>
      <Card className="card-blog bg-default">
        <img
          alt="..."
          className="img pattern rounded"
          src={require("assets/img/ill/p7.svg")}
        ></img>
        <CardBody>
          <h4 className="display-4 text-white">Focus</h4>
          <p className="lead text-white mt-0">
            Because it's about motivating the doers. Because I’m here to follow
            my dreams and inspire other people.
          </p>
          <Button
            className="text-white px-0"
            color="link"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Read more
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard12;
