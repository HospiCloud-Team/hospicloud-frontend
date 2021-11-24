import { FC } from "react";
import { Modal, Button } from "react-bootstrap";

type ConfirmationModalProps = {
  state: boolean;
  title: string;
  content: string;
  button1Text: string;
  button2Text: string;
  handleShow: (state: boolean) => void;
};

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  state,
  title,
  content,
  button1Text,
  button2Text,
  handleShow,
}) => {
  const handleCloseClick = () => {
    handleShow(false);
  };

  return (
    <>
      <Modal show={state} onHide={handleCloseClick}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseClick}>
            {button1Text}
          </Button>
          <button type="submit" className="btn btn-primary" form="hook-form">
            {button2Text}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
