import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function PricingCard3() {
  return (
    <>
      <Card
        className="card-pricing card-background"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ill/pattern_pricing6.svg") + ")",
        }}
      >
        <CardBody className="pb-4">
          <h6 className="card-category text-danger text-uppercase">Standard</h6>
          <CardTitle className="text-default" tag="h1">
            <small>$</small>
            69
          </CardTitle>
          <ul>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-info shadow rounded-circle">
                    <i className="ni ni-check-bold"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">Sharing Tools</span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-info shadow rounded-circle">
                    <i className="ni ni-check-bold"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">Design Tools</span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-danger shadow rounded-circle">
                    <i className="ni ni-fat-remove"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">
                    Private Messages
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-danger shadow rounded-circle">
                    <i className="ni ni-fat-remove"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">Private Brand</span>
                </div>
              </div>
            </li>
          </ul>
          <Button
            className="mt-4"
            color="danger"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Choose plan
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default PricingCard3;
