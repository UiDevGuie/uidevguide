import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderBlogPosts from "components/headers/HeaderBlogPosts.js";
import BlogCard10 from "components/cards/BlogCard10.js";
import BlogCard11 from "components/cards/BlogCard11.js";
import BlogCard12 from "components/cards/BlogCard12.js";
import Blogs3 from "components/blogs/Blogs3.js";
import Blogs4 from "components/blogs/Blogs4.js";
import Team2 from "components/teams/Team2.js";
import PreFooter2 from "components/pre-footers/PreFooter2.js";
import PreFooter5 from "components/pre-footers/PreFooter5.js";

function BlogPosts() {
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <HeaderBlogPosts />
        <div className="main main-raised">
          <Container>
            <Row>
              <Col lg="4" md="6">
                <BlogCard10 />
              </Col>
              <Col lg="4" md="6">
                <BlogCard11 />
              </Col>
              <Col lg="4" md="6">
                <BlogCard12 />
              </Col>
            </Row>
          </Container>
          <section className="section">
            <Blogs3 />
          </section>
          <section>
            <Blogs4 />
          </section>
          <div className="section bg-default">
            <Team2 />
          </div>
          <div className="title text-center bg-default">
            <h3 className="text-white mb-0 pb-3">Show us some love</h3>
          </div>
          <div className="bg-default">
            <PreFooter2 />
          </div>
          <PreFooter5 />
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default BlogPosts;
