import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderBlogPost from "components/headers/HeaderBlogPost.js";
import ActivityFeed from "components/feed/ActivityFeed.js";
import Blogs3 from "components/blogs/Blogs3.js";

function BlogPost() {
  React.useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();
    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <HeaderBlogPost />
        <section className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h6 className="category">March 1, 2019</h6>
                <h3 className="title">
                  The Castle Looks Different at Night...
                </h3>
                <p>
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more. We are here to make life better.{" "}
                  <br></br>
                  <br></br>
                  And now I look and look around and there’s so many Kanyes I've
                  been trying to figure out the bed design for the master
                  bedroom at our Hidden Hills compound... and thank you for
                  turning my personal jean jacket into a couture piece.
                </p>
                <br></br>
                <br></br>
                <p className="blockquote">
                  “And thank you for turning my personal jean jacket into a
                  couture piece.” <br></br>
                  <br></br>
                  <small>Kanye West, Producer.</small>
                </p>
                <h3 className="title">Using Video Games To Generate Clicks</h3>
                <br></br>
                <p>
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more. We are here to make life better.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={require("assets/img/theme/sofia-kuniakina.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={require("assets/img/theme/sacha-styles.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={require("assets/img/theme/victor-garcia.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={require("assets/img/theme/doyoun-seo.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={require("assets/img/theme/ayo-ogunseinde.jpg")}
                    width="450"
                  ></img>
                </li>
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <i className="ni ni-bold-left"></i>
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <i className="ni ni-bold-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section className="section mt-5">
          <Container>
            <Row>
              <Col className="mx-auto" md="8">
                <h3 className="title">Rest of the Story:</h3>
                <p>
                  We are here to make life better. And now I look and look
                  around and there’s so many Kanyes I've been trying to figure
                  out the bed design for the master bedroom at our Hidden Hills
                  compound... and thank you for turning my personal jean jacket
                  into a couture piece. <br></br>I speak yell scream directly at
                  the old guard on behalf of the future. daytime All respect
                  prayers and love to Phife’s family Thank you for so much
                  inspiration.
                </p>
                <br></br>
                <p>
                  Thank you Anna for the invite thank you to the whole Vogue
                  team And I love you like Kanye loves Kanye Pand Pand Panda
                  I've been trying to figure out the bed design for the master
                  bedroom at our Hidden Hills compound...The Pablo pop up was
                  almost a pop up of influence. All respect prayers and love to
                  Phife’s family Thank you for so much inspiration daytime I
                  love this new Ferg album! The Life of Pablo is now available
                  for purchase I have a dream. Thank you to everybody who made
                  The Life of Pablo the number 1 album in the world! I'm so
                  proud of the nr #1 song in the country. Panda! Good music
                  2016!
                </p>
                <br></br>
                <p>
                  I love this new Ferg album! The Life of Pablo is now available
                  for purchase I have a dream. Thank you to everybody who made
                  The Life of Pablo the number 1 album in the world! I'm so
                  proud of the nr #1 song in the country. Panda! Good music
                  2016!
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-blog-info">
          <Container>
            <Row>
              <Col className="mx-auto" md="8">
                <ActivityFeed />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <Blogs3 />
        </section>
        <DemoFooter />
      </div>
    </>
  );
}

export default BlogPost;
