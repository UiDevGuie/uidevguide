import React from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";

// Core Components

function ModalSmall() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        className="mb-3"
        color="primary"
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
      >
        Small modal
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-sm"
        modalClassName=" bd-example-modal-sm"
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
          I always felt like I could do anything. That’s the main thing people
          are controlled by! Thoughts- their perception of themselves! They're
          slowed down by their perception of themselves. If you're taught you
          can’t do anything, you won’t do anything. I was taught I could do
          everything.
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

export default ModalSmall;
