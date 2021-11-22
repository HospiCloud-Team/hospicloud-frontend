import { useHistory } from "react-router";
import TemplateForm from "./components/TemplateForm";

const AddTemplate = () => {
  const history = useHistory();
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">Nueva Plantilla</h4>
      </div>
      <TemplateForm />
    </div>
  );
};

export default AddTemplate;
