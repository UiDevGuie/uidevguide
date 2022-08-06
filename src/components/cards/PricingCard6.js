import React from "react";

// reactstrap components
import { Button, Card, CardHeader, CardBody, CardFooter } from "reactstrap";

// Core Components

function PricingCard6() {
  return (
    <>
      <Card
        className="card-pricing bg-gradient-warning text-center"
        data-icon="big-icon"
      >
        <CardHeader className="bg-transparent">
          <div className="icon text-white">
            <i className="ni ni-camera-compact"></i>
          </div>
          <p className="text-white">Premium pack</p>
        </CardHeader>
        <CardBody>
          <div className="price d-inline">
            <span className="currency text-white">$</span>
            <span className="amount text-white">89</span>
            <span className="frequency text-white">/mo</span>
          </div>
          <ul className="list-unstyled align-items-center">
            <li>
              <p className="text-sm text-white">10 Templates + Updates</p>
            </li>
            <li>
              <p className="text-sm text-white">+ Adobe Sketch</p>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="bg-transparent">
          <Button outline color="white" type="button">
            Upgrade
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default PricingCard6;
