import React from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";

// Core Components

function ModalExtraLarge() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        className="mb-3"
        color="primary"
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
      >
        Extra large modal
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-xl"
        modalClassName=" bd-example-modal-xl"
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
          Society has put up so many boundaries, so many limitations on what’s
          right and wrong that it’s almost impossible to get a pure thought out.
          It’s like a little kid, a little boy, looking at colors, and no one
          told him what colors are good, before somebody tells you you shouldn’t
          like pink because that’s for girls, or you’d instantly become a gay
          two-year-old. Why would anyone pick blue over pink? Pink is obviously
          a better color. Everyone’s born confident, and everything’s taken away
          from you <br></br>
          <br></br>
          As we live, our hearts turn colder. Cause pain is what we go through
          as we become older. We get insulted by others, lose trust for those
          others. We get back stabbed by friends. It becomes harder for us to
          give others a hand. We get our heart broken by people we love, even
          that we give them all we have. Then we lose family over time. What
          else could rust the heart more over time? Blackgold.
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

export default ModalExtraLarge;
