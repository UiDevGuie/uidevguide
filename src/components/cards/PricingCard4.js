import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function PricingCard4() {
  return (
    <>
      <Card
        className="card-pricing bg-default card-background"
        data-background="image"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ill/pricing_bg.svg") + ")",
        }}
      >
        <CardBody>
          <h6 className="card-category text-white text-uppercase">Premium</h6>
          <CardTitle tag="h1">
            <small className="text-white">$</small>
            109
          </CardTitle>
          <ul>
            <li>
              <b>100</b>
              Projects
            </li>
            <li>
              <b>5</b>
              Team Members
            </li>
            <li>
              <b>55</b>
              Personal Contacts
            </li>
            <li>
              <b>5K</b>
              Messages
            </li>
          </ul>
          <Button
            className="btn-white mt-3"
            color="default"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="sm"
          >
            Get Started
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default PricingCard4;
