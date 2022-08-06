import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// Core Components
import ActivityFeed from "components/feed/ActivityFeed.js";

function Comments() {
  return (
    <>
      <div id="comments">
        <h3 className="h4 text-success font-weight-bold mb-5 mt-5">Comments</h3>
        <Row>
          <Col className="mx-auto" md="8">
            <ActivityFeed />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Comments;
