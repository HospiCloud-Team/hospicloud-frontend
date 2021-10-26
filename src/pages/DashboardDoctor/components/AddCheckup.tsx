import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { addCheckup } from "../../../api/checkups";
import { getTemplatesByHospital } from "../../../api/templates";
import { INewCheckup } from "../../../models/ICheckup";
import { ITemplate } from "../../../models/ITemplate";

const AddCheckup = () => {
  const [template, setTemplate] = useState<ITemplate>();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    const newCheckup: INewCheckup = {
      doctor_id: 1,
      template_id: 1,
      patient_id: 1,
      data: JSON.stringify(data),
    };
    addCheckup(newCheckup);
  });

  useEffect(() => {
    getTemplatesByHospital(1).then((res) => setTemplate(res.data[0]));
  });

  return (
    <div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">Detalle de consulta</h4>
      </div>
      <div className="my-3">
        {template && (
          <form onSubmit={onSubmit}>
            {Object.entries(JSON.parse(template.headers)).map(
              ([key, value]) => (
                <div key={key}>
                  <label>{key}</label>
                  <input {...register(key)} />
                </div>
              )
            )}
            <input type="submit" />
          </form>
        )}
      </div>
    </div>
  );
};

export default AddCheckup;
