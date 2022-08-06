import React from "react";

// reactstrap components
import { Button, Card, CardHeader, CardBody, CardFooter } from "reactstrap";

// Core Components

function PricingCard1() {
  return (
    <>
      <Card
        className="card-pricing bg-success border-0 text-center mb-4"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ill/pattern_pricing1.svg") + ")",
        }}
      >
        <CardHeader className="bg-transparent">
          <h6 className="text-uppercase ls-1 text-white py-3 mb-0">
            Bravo pack
          </h6>
        </CardHeader>
        <CardBody>
          <div className="display-2 text-white">$49</div>
          <span className="text-white">per application</span>
          <ul className="list-unstyled my-4">
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-success">
                    <i className="ni ni-book-bookmark"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-white">
                    Complete documentation
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-success">
                    <i className="ni ni-diamond"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-white">
                    Working materials in Sketch
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-success">
                    <i className="ni ni-chart-pie-35"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-white">
                    2GB cloud storage
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <Button className="text-white mb-3" color="link" type="button">
            Free Trial
          </Button>
        </CardBody>
        <CardFooter className="bg-transparent">
          <a
            className="text-white"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Request a demo
          </a>
        </CardFooter>
      </Card>
    </>
  );
}

export default PricingCard1;
