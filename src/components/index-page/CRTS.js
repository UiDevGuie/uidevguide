import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import { Row, Col } from "reactstrap";

// Core Components

function CRTS() {
  React.useEffect(() => {
    Slider.create(document.getElementById("sliderRegular"), {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
    Slider.create(document.getElementById("sliderDouble"), {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
  }, []);
  return (
    <>
      <Row>
        <Col lg="3" md="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              Checkboxes
            </small>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input
              className="custom-control-input"
              id="customCheck1"
              type="checkbox"
            ></input>
            <label className="custom-control-label" htmlFor="customCheck1">
              <span>Unchecked</span>
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              id="customCheck2"
              type="checkbox"
            ></input>
            <label className="custom-control-label" htmlFor="customCheck2">
              <span>Checked</span>
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input
              className="custom-control-input"
              disabled
              id="customCheck3"
              type="checkbox"
            ></input>
            <label className="custom-control-label" htmlFor="customCheck3">
              <span>Disabled Unchecked</span>
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              disabled
              id="customCheck4"
              type="checkbox"
            ></input>
            <label className="custom-control-label" htmlFor="customCheck4">
              <span>Disabled Checked</span>
            </label>
          </div>
        </Col>
        <Col className="mt-4 mt-md-0" lg="3" sm="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">Radios</small>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              id="customRadio1"
              name="custom-radio-1"
              type="radio"
            ></input>
            <label className="custom-control-label" htmlFor="customRadio1">
              <span>Unchecked</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              id="customRadio2"
              name="custom-radio-1"
              type="radio"
            ></input>
            <label className="custom-control-label" htmlFor="customRadio2">
              <span>Checked</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              disabled
              id="customRadio3"
              name="custom-radio-2"
              type="radio"
            ></input>
            <label className="custom-control-label" htmlFor="customRadio3">
              <span>Disabled unchecked</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input
              className="custom-control-input"
              defaultChecked
              disabled
              id="customRadio4"
              name="custom-radio-2"
              type="radio"
            ></input>
            <label className="custom-control-label" htmlFor="customRadio4">
              <span>Disabled checkbox</span>
            </label>
          </div>
        </Col>
        <Col className="mt-4 mt-md-0" lg="3" sm="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              Toggle buttons
            </small>
          </div>
          <label className="custom-toggle">
            <input defaultChecked type="checkbox"></input>
            <span
              className="custom-toggle-slider rounded-circle"
              data-label-off="OFF"
              data-label-on="ON"
            ></span>
          </label>{" "}
          <label className="custom-toggle custom-toggle-default">
            <input defaultChecked type="checkbox"></input>
            <span
              className="custom-toggle-slider rounded-circle"
              data-label-off="OFF"
              data-label-on="ON"
            ></span>
          </label>
          <br></br>
          <br></br>
          <label className="custom-toggle custom-toggle-danger">
            <input defaultChecked type="checkbox"></input>
            <span
              className="custom-toggle-slider rounded-circle"
              data-label-off="OFF"
              data-label-on="ON"
            ></span>
          </label>{" "}
          <label className="custom-toggle custom-toggle-warning">
            <input defaultChecked type="checkbox"></input>
            <span
              className="custom-toggle-slider rounded-circle"
              data-label-off="OFF"
              data-label-on="ON"
            ></span>
          </label>
          <br></br>
          <br></br>
          <label className="custom-toggle custom-toggle-success">
            <input defaultChecked type="checkbox"></input>
            <span
              className="custom-toggle-slider rounded-circle"
              data-label-off="OFF"
              data-label-on="ON"
            ></span>
          </label>{" "}
          <label className="custom-toggle custom-toggle-info">
            <input defaultChecked type="checkbox"></input>
            <span
              className="custom-toggle-slider rounded-circle"
              data-label-off="OFF"
              data-label-on="ON"
            ></span>
          </label>
        </Col>
        <Col className="mt-4 mt-md-0" lg="3" sm="6">
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">Sliders</small>
          </div>
          <div className="input-slider-container">
            <div className="slider" id="sliderRegular"></div>
            <br></br>
            <div className="slider slider-primary" id="sliderDouble"></div>
          </div>
          <div className="mt-5">
            <div
              data-range-value-max="500"
              data-range-value-min="100"
              id="input-slider-range"
            ></div>
            <Row className="d-none">
              <Col xs="6">
                <span
                  className="range-slider-value value-low"
                  data-range-value-low="200"
                  id="input-slider-range-value-low"
                ></span>
              </Col>
              <Col className="text-right" xs="6">
                <span
                  className="range-slider-value value-high"
                  data-range-value-high="400"
                  id="input-slider-range-value-high"
                ></span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CRTS;
