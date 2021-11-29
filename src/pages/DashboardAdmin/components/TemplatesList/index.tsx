import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ITemplate } from "../../../../models/ITemplate";
import { getTemplatesByHospital } from "../../../../api/utilities";
import TemplateItem from "./components/TemplateItem";
import routes from "../../../../router/constantRoutes.json";

const TemplatesList = () => {
  const history = useHistory();
  const [templates, setTemplates] = useState<ITemplate[]>([]);

  useEffect(() => {
    const hospitalId = Number(localStorage.getItem("hospitalId"));
    getTemplatesByHospital(hospitalId).then((res) => setTemplates(res.data));
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center">
          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={history.goBack}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <h4 className="m-0">Manejar Plantillas</h4>
        </div>
        <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => history.push(routes.ADMIN_NEW_TEMPLATE)}
          >
            Agregar Plantillas
          </button>
        </div>
      </div>
      {templates.map((template) => (
        <TemplateItem key={template.id} template={template} />
      ))}
    </div>
  );
};

export default TemplatesList;
