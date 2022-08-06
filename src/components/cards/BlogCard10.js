import React from "react";

// reactstrap components
import { Button, Card, CardBody } from "reactstrap";

// Core Components

function BlogCard10() {
  return (
    <>
      <Card className="card-blog bg-default">
        <img
          alt="..."
          className="img pattern rounded"
          src={require("assets/img/ill/p7.svg")}
        ></img>
        <CardBody>
          <h4 className="display-4 text-white">Bussiness</h4>
          <p className="lead text-white mt-0">
            Society has put up so many boundaries and limitations on what’s
            right and wrong that it’s almost impossible...
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

export default BlogCard10;
