import React from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";

// Core Components

function ModalNotification() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        block
        className="mb-3"
        color="warning"
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
      >
        Notification
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        contentClassName="bg-gradient-danger"
        className="modal-dialog-centered modal-danger"
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-notification">
            Your attention is required
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
          <div className="py-3 text-center">
            <i className="ni ni-bell-55 ni-3x"></i>
            <h4 className="heading mt-4">You should read this!</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <Button className="btn-white" color="default" type="button">
            Ok, Got it
          </Button>
          <Button
            className="text-white ml-auto"
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

export default ModalNotification;
