import React from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";

// Core Components

function ModalLong() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        block
        className="mb-3"
        color="danger"
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
      >
        Long Modal
      </Button>
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            onClick={() => setModalOpen(!modalOpen)}
            type="button"
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          I always felt like I could do anything. That’s the main thing people
          are controlled by! Thoughts- their perception of themselves! They're
          slowed down by their perception of themselves. If you're taught you
          can’t do anything, you won’t do anything. I was taught I could do
          everything. <br></br>
          <br></br>
          As we live, our hearts turn colder. Cause pain is what we go through
          as we become older. We get insulted by others, lose trust for those
          others. We get back stabbed by friends. It becomes harder for us to
          give others a hand. We get our heart broken by people we love, even
          that we give them all we have. Then we lose family over time. What
          else could rust the heart more over time? Blackgold. <br></br>
          <br></br>
          We’re not always in the position that we want to be at. We’re
          constantly growing. We’re constantly making mistakes. We’re constantly
          trying to express ourselves and actualize our dreams. If you have the
          opportunity to play this game of life you need to appreciate every
          moment. A lot of people don’t appreciate the moment until it’s passed.{" "}
          <br></br>
          <br></br>
          There’s nothing I really wanted to do in life that I wasn’t able to
          get good at. That’s my skill. I’m not really specifically talented at
          anything except for the ability to learn. That’s what I do. That’s
          what I’m here for. Don’t be afraid to be wrong because you can’t learn
          anything from a compliment. <br></br>
          <br></br>
          It really matters and then like it really doesn’t matter. What matters
          is the people who are sparked by it. And the people who are like
          offended by it, it doesn’t matter. Because it's about motivating the
          doers. Because I’m here to follow my dreams and inspire other people
          to follow their dreams, too. <br></br>
          <br></br>
          The time is now for it to be okay to be great. People in this world
          shun people for being great. For being a bright color. For standing
          out. But the time is now to be okay to be the greatest you. Would you
          believe in what you believe in, if you were the only one who believed
          it?
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            onClick={() => setModalOpen(!modalOpen)}
            type="button"
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalLong;
