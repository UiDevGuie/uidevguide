import React from "react";

// reactstrap components
import { Button, Label, FormGroup, Form, Input, Modal } from "reactstrap";

// Core Components

function ModalMessage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        block
        className="mb-3"
        color="success"
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
      >
        Message Modal
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-dialog-centered"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            New message to CT
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
        <div className="modal-body bg-secondary">
          <Form>
            <FormGroup>
              <Label htmlFor="recipient-name" className="col-form-label">
                Recipient:
              </Label>
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  defaultValue="Creative Tim"
                  id="recipient-name"
                  type="text"
                ></Input>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message-text" className="col-form-label">
                Message:
              </Label>
              <Input
                className="form-control-alternative"
                id="message-text"
                type="textarea"
              ></Input>
            </FormGroup>
          </Form>
        </div>
        <div className="modal-footer bg-secondary">
          <Button
            color="secondary"
            onClick={() => setModalOpen(!modalOpen)}
            type="button"
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Send message
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalMessage;
