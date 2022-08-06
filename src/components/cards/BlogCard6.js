import React from "react";

// reactstrap components
import { Card, CardBody, CardFooter, CardTitle } from "reactstrap";

// Core Components

function BlogCard6() {
  return (
    <>
      <Card className="bg-gradient-warning">
        <CardBody>
          <h6 className="category text-white">
            <i className="ni ni-money-coins"></i>
            Features
          </h6>
          <CardTitle tag="h5">
            <a
              className="text-white"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              That’s One Way To Ditch Your Passenger
            </a>
          </CardTitle>
          <p className="card-description text-white">
            As near as we can tell, this guy must have thought he was going over
            backwards break to bring the nose down...
          </p>
          <CardFooter>
            <div className="author">
              <img
                alt="..."
                className="avatar img-raised"
                src={require("assets/img/faces/team-3.jpg")}
              ></img>
              <span>Johana Doe</span>
            </div>
            <div className="stats stats-right">
              <i className="ni ni-favourite-28"></i>
              10.4K · <i className="ni ni-archive-2"></i>
              425
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default BlogCard6;
