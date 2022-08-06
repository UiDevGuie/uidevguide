import React from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";

// Core Components

function ModalDefault() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        block
        className="mb-3"
        color="primary"
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
      >
        Default
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-dialog-centered"
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-default">
            Type your modal title
          </h6>
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
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div className="modal-footer">
          <Button color="primary" type="button">
            Save changes
          </Button>
          <Button
            className="ml-auto"
            color="link"
            onClick={() => setModalOpen(!modalOpen)}
            type="button"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalDefault;
