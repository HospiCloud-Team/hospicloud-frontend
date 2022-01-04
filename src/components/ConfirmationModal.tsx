import { FC } from "react";
import { Modal, Button } from "react-bootstrap";

type ConfirmationModalProps = {
  state: boolean;
  title: string;
  children: any;
  button1Text: string;
  button2Text: string;
  handleShow?: (state: boolean) => void;
  formId?: string;
  additionalCloseMethod?: () => void;
};

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  state,
  title,
  children,
  button1Text,
  button2Text,
  handleShow,
  formId,
  additionalCloseMethod,
}) => {
  const handleCloseClick = () => {
    if (additionalCloseMethod) {
      additionalCloseMethod();
    }
    if (handleShow) {
      handleShow(false);
    }
  };

  return (
    <>
      <Modal show={state} onHide={handleCloseClick}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseClick}>
            {button1Text}
          </Button>
          <button type="submit" className="btn btn-primary" form={formId}>
            {button2Text}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
