import { useHistory } from "react-router";
import { ITemplate } from "../../../../../models/ITemplate";
import routes from "../../../../../router/constantRoutes.json";

interface TemplateItemProps {
  template: ITemplate;
}

const TemplateItem = ({ template }: TemplateItemProps) => {
  const history = useHistory();

  return (
    <div className="row bg-white mx-0 my-3 p-3 rounded-2">
      <div className="col-10">
        <p className="m-0 fw-bold">{template.title}</p>
        <p className="m-0">{`Alfanumericos: ${template.alphanumeric_fields}`}</p>
        <p className="m-0">{`Numericos: ${template.numeric_fields}`}</p>
      </div>
      <div className="col-2 d-flex justify-content-evenly align-items-center">
        <button
          className="btn btn-warning me-3"
          onClick={() =>
            history.push(
              `${routes.ADMIN_TEMPLATES}/${template.id}/editar`,
              template
            )
          }
        >
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button className="btn btn-danger" onClick={() => {}}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TemplateItem;
