import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// Core Components
import Upload from "components/upload/Upload.js";

function FileUpload() {
  return (
    <>
      <h3 className="h4 text-success font-weight-bold mt-md mb-4 mt-5">
        File Upload
      </h3>
      <Row>
        <Col md="5" sm="8">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Regular Image
          </small>
          <Upload />
        </Col>
        <Col md="5" sm="8">
          <small className="d-block text-uppercase font-weight-bold mb-3">
            Avatar
          </small>
          <Upload avatar />
        </Col>
      </Row>
    </>
  );
}

export default FileUpload;
