import React from "react";

// reactstrap components
import { Button, Card, CardBody } from "reactstrap";

// Core Components

function BlogCard11() {
  return (
    <>
      <Card className="card-blog bg-default">
        <img
          alt="..."
          className="img pattern rounded"
          src={require("assets/img/ill/p22.png")}
        ></img>
        <CardBody>
          <h4 className="display-4 text-white">Premium</h4>
          <p className="lead text-white mt-0">
            Colors are good, before somebody tells you you shouldn’t like pink
            because that’s for girls.
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

export default BlogCard11;
