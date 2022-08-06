import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

// Core Components

function PricingCard2() {
  return (
    <>
      <Card className="card-pricing bg-white border-0 text-center mb-4">
        <CardHeader className="bg-transparent">
          <h6 className="text-uppercase ls-1 py-3 mb-0">Premium pack</h6>
        </CardHeader>
        <CardBody>
          <div className="display-2">$89</div>
          <span>per month</span>
          <ul className="list-unstyled my-4">
            <li className="align-items-center">
              <b className="text-primary">20GB</b>
              <span>File Storage</span>
            </li>
            <li className="align-items-center">
              <b className="text-primary">Sketch</b>
              <span>Working materials in</span>
            </li>
            <li className="align-items-center">
              <b className="text-primary">Premium</b>
              <span>Support</span>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="bg-transparent">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            Request a demo
          </a>
        </CardFooter>
      </Card>
    </>
  );
}

export default PricingCard2;
