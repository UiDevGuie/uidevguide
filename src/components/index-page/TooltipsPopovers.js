import React from "react";

// reactstrap components
import {
  Button,
  Row,
  Col,
  Tooltip,
  Popover,
  PopoverBody,
  PopoverHeader,
} from "reactstrap";

// Core Components
const colors = [
  "primary",
  "info",
  "success",
  "warning",
  "danger",
  "default",
  "secondary",
];

const positions = ["left", "top", "bottom", "right"];

const TooltipExample = ({ placement, color, idKey }) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const id = "tooltip-" + placement + "-" + color + "-" + idKey;
  return (
    <>
      <Button
        className="btn-tooltip"
        data-toggle="tooltip"
        color={color}
        id={id}
        size="sm"
        type="button"
      >
        {color !== "dark" ? color : "on " + placement}
      </Button>
      <Tooltip
        delay={0}
        placement="top"
        target={id}
        isOpen={tooltipOpen}
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        Tooltip on top
      </Tooltip>
    </>
  );
};

const PopoverExample = ({ placement, color, idKey }) => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const id = "popover-" + placement + "-" + color + "-" + idKey;
  return (
    <>
      <Button
        color={color}
        id={id}
        size="sm"
        type="button"
        data-toggle="popover"
      >
        {color !== "dark" ? color : "on " + placement}
      </Button>
      <Popover
        delay={0}
        placement={placement}
        target={id}
        isOpen={popoverOpen}
        toggle={() => setPopoverOpen(!popoverOpen)}
        popperClassName={color !== "dark" ? "popover-" + color : ""}
        trigger="focus"
      >
        <PopoverHeader>Popover on {placement}</PopoverHeader>
        <PopoverBody>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </Popover>
    </>
  );
};

function Index() {
  return (
    <>
      <Row className="tooltips-popovers">
        <Col lg="6">
          <h3 className="h4 text-success font-weight-bold mt-md mb-4">
            Tooltips
          </h3>
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Colors
          </small>
          {colors.map((prop, key) => {
            return (
              <TooltipExample
                key={key}
                idKey={key}
                color={prop}
                placement="top"
              />
            );
          })}
          <br></br>
          <br></br>
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Position
          </small>
          {positions.map((prop, key) => {
            return (
              <TooltipExample
                key={key}
                idKey={key}
                color="dark"
                placement={prop}
              />
            );
          })}
        </Col>
        <Col className="mt-4 mt-lg-0" lg="6">
          <h3 className="h4 text-success font-weight-bold mt-md mb-4">
            Popovers
          </h3>
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Colors
          </small>
          {colors.map((prop, key) => {
            return (
              <PopoverExample
                key={key}
                idKey={key}
                color={prop}
                placement="top"
              />
            );
          })}
          <br></br>
          <br></br>
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Position
          </small>
          {positions.map((prop, key) => {
            return (
              <PopoverExample
                key={key}
                idKey={key}
                color="dark"
                placement={prop}
              />
            );
          })}
        </Col>
      </Row>
    </>
  );
}

export default Index;
