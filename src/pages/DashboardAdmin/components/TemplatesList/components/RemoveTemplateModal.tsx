import Modal from "react-bootstrap/esm/Modal";
import { removeTemplate } from "../../../../../api/utilities";
import { ITemplate } from "../../../../../models/ITemplate";

interface RemoveTemplateModalProps {
  template?: ITemplate;
  show: boolean;
  close: () => void;
}

const RemoveTemplateModal = ({
  template,
  show,
  close,
}: RemoveTemplateModalProps) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>Remover {template?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            ¿Está seguro que desea eliminar la plantilla "{template?.title}"?
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
            if (template) {
              removeTemplate(template.id).then(() => close());
            }
          }}
        >
          Remover Plantilla
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveTemplateModal;
