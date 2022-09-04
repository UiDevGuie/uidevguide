import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


const blogs = [
  {
    title: "Javascript Bundle",
    url: 'javascript.png'
  },
  {
    title: "Angular Bundle",
    url: 'angular.png'
  },
  {
    title: "React Bundle",
    url: 'React.png'
  },
  {
    title: "HTML/CSS Bundle",
    url: 'CSS3_and_HTML5_logos_and_wordmarks.svg.png'
  },
  {
    title: "Ngrx",
    url: 'ngrx.svg'
  },
  {
    title: "Redux",
    url: 'redux.svg'
  },
  {
    title: "Coding Bundle",
    url: 'coding.jpg'
  },
  {
    title: "Learning Resources",
    url: 'resources.jpg'
  },
  {
    title: "Free Mock Interviews",
    url: 'mock-interviews.jpg'
  },
  {
    title: "One on doubt session and job guidence",
    url: 'doubt.jpg'
  },
  {
    title: "Life-time access for private group",
    url: 'private-group.jpg'
  },
  {
    title: "Resume guidence",
    url: 'resume.jpg'
  },

]
function Blogs2() {
  return (
    <>
      <section className="blogs-2">
        <Container fluid className="p-3">
          <h3 className="display-3 text-center">What we are offering you in single bundle</h3>
          <Row className="p-5">
            {blogs.map(element => (

              <Col lg="3" key={element.title}>
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{
                      backgroundImage: "url(" + require(`assets/img/${element.url}`) + ")",
                    }}
                  ></div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <CardBody>
                      <div className="content-bottom">
                        <CardTitle tag="h5">{element.title}</CardTitle>
                      </div>
                    </CardBody>
                  </a>
                </Card>
              </Col>

            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs2;
