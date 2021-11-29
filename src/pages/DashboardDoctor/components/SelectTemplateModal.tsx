import Modal from "react-bootstrap/esm/Modal";
import { ITemplate } from "../../../models/ITemplate";

interface SelectTemplateModalProps {
  templates: ITemplate[];
  selectTemplate: (template: ITemplate) => void;
  show: boolean;
  close: () => void;
}

const SelectTemplateModal = ({
  templates,
  selectTemplate,
  show,
  close,
}: SelectTemplateModalProps) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>Seleccionar Plantilla</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>¿Qué plantilla desea utilizar?</p>
          <div className="row">
            {templates.map((template) => (
              <div key={template.id} className="col-12 d-grid mb-2">
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                  onClick={() => selectTemplate(template)}
                >
                  {template.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary btn-sm" onClick={close}>
          Cancelar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectTemplateModal;
