import Modal from "react-bootstrap/esm/Modal";
import { removeSpecialtyFromHospital } from "../../../../../api/utilities";
import { ISpecialty } from "../../../../../models/ISpecialty";

interface RemoveSpecialtyModalProps {
  specialty?: ISpecialty;
  show: boolean;
  close: () => void;
}

const RemoveSpecialtyModal = ({
  specialty,
  show,
  close,
}: RemoveSpecialtyModalProps) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>Remover {specialty?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            ¿Está seguro que desea eliminar la especialidad "{specialty?.name}"?
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary btn-sm" onClick={close}>
          Cancelar
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            if (specialty) {
              removeSpecialtyFromHospital(specialty.id).then(() => close());
            }
          }}
        >
          Remover Especialidad
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveSpecialtyModal;
