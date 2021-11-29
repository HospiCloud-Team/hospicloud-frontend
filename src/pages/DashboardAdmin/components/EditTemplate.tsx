import { useHistory, useLocation } from "react-router";
import { ITemplate } from "../../../models/ITemplate";
import TemplateForm from "./AddTemplate/components/TemplateForm";

const EditTemplate = () => {
  const history = useHistory();
  const { state } = useLocation<ITemplate>();

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">Editar Plantilla</h4>
      </div>
      <TemplateForm formType="edit" templateToEdit={state} />
    </div>
  );
};

export default EditTemplate;
