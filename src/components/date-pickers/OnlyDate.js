import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// Core Components

function SingleDate() {
  const [focus, setFocus] = React.useState("");
  return (
    <>
      <FormGroup className={focus}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-calendar-grid-58"></i>
            </InputGroupText>
          </InputGroupAddon>
          <ReactDatetime
            inputProps={{
              placeholder: "Only Date",
              onFocus: () => setFocus("focused"),
              onBlur: () => setFocus(""),
            }}
            timeFormat={false}
          />
        </InputGroup>
      </FormGroup>
    </>
  );
}

export default SingleDate;
