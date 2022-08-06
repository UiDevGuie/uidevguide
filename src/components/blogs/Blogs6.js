import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function Blogs6() {
  return (
    <>
      <section className="blogs-6">
        <Container>
          <Row>
            <Col className="mx-auto" lg="10">
              <h3 className="display-3 mb-5">Latest Blogposts</h3>
              <Card
                className="card-blog card-background card-grande"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/unsplashs.jpg") +
                      ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  {" "}
                </a>
                <CardBody className="mb-4">
                  <CardTitle tag="h2">Miami Vice</CardTitle>
                  <p className="card-description text-white">
                    The simplest visual description uses ordinary words to
                    convey what the writer sees. First he or she must look at
                    the subject – slowly, carefully, and repeatedly, if possible
                    – to identify the parts that make the whole
                  </p>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/faces/team-4.jpg")}
                    ></img>
                    <span className="text-white">by Johanna Zmud</span>
                  </div>
                  <br></br>
                  <Button color="primary">Read more...</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs6;
