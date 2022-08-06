import React from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";

// Core Components

function ModalLarge() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        className="mb-3"
        color="primary"
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
      >
        Large modal
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-lg"
        modalClassName=" bd-example-modal-lg"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalScrollableTitle">
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
          The time is now for it to be okay to be great. People in this world
          shun people for being great. For being a bright color. For standing
          out. But the time is now to be okay to be the greatest you. Would you
          believe in what you believe in, if you were the only one who believed
          it? <br></br>
          <br></br>I always felt like I could do anything. That’s the main thing
          people are controlled by! Thoughts- their perception of themselves!
          They're slowed down by their perception of themselves. If you're
          taught you can’t do anything, you won’t do anything. I was taught I
          could do everything.
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

export default ModalLarge;
