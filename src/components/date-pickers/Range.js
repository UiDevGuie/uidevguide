import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row,
} from "reactstrap";

function Range() {
  const [startFocus, setStartFocus] = React.useState("");
  const [endFocus, setEndFocus] = React.useState("");
  const [startDate, setStartDate] = React.useState(undefined);
  const [endDate, setEndDate] = React.useState(undefined);
  return (
    <>
      <Row>
        <Col sm={6}>
          <FormGroup className={startFocus}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: "Choose Start Date",
                  onFocus: () => setStartFocus("focused"),
                  onBlur: () => setStartFocus(""),
                }}
                timeFormat={false}
                renderDay={(props, currentDate, selectedDate) => {
                  let classes = props.className;
                  if (
                    startDate &&
                    endDate &&
                    startDate._d + "" === currentDate._d + ""
                  ) {
                    classes += " start-date";
                  } else if (
                    startDate &&
                    endDate &&
                    new Date(startDate._d + "") <
                      new Date(currentDate._d + "") &&
                    new Date(endDate._d + "") > new Date(currentDate._d + "")
                  ) {
                    classes += " middle-date";
                  } else if (
                    endDate &&
                    endDate._d + "" === currentDate._d + ""
                  ) {
                    classes += " end-date";
                  }
                  return (
                    <td {...props} className={classes}>
                      {currentDate.date()}
                    </td>
                  );
                }}
                onChange={(e) => setStartDate(e)}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup className={endFocus}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-calendar-grid-58" />
                </InputGroupText>
              </InputGroupAddon>
              <ReactDatetime
                inputProps={{
                  placeholder: "Choose End Date",
                  onFocus: () => setEndFocus("focused"),
                  onBlur: () => setEndFocus(""),
                }}
                timeFormat={false}
                renderDay={(props, currentDate, selectedDate) => {
                  let classes = props.className;
                  if (
                    startDate &&
                    endDate &&
                    startDate._d + "" === currentDate._d + ""
                  ) {
                    classes += " start-date";
                  } else if (
                    startDate &&
                    endDate &&
                    new Date(startDate._d + "") <
                      new Date(currentDate._d + "") &&
                    new Date(endDate._d + "") > new Date(currentDate._d + "")
                  ) {
                    classes += " middle-date";
                  } else if (
                    endDate &&
                    endDate._d + "" === currentDate._d + ""
                  ) {
                    classes += " end-date";
                  }
                  return (
                    <td {...props} className={classes}>
                      {currentDate.date()}
                    </td>
                  );
                }}
                onChange={(e) => setEndDate(e)}
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default Range;
