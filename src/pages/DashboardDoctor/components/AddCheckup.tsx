import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { addCheckup } from "../../../api/checkups";
import { getTemplatesByHospital } from "../../../api/utilities";
import { INewCheckup } from "../../../models/ICheckup";
import { ITemplate } from "../../../models/ITemplate";

const AddCheckup = () => {
  const [template, setTemplate] = useState<ITemplate>();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    const doctorId = Number(localStorage.getItem("doctorId") as string);
    const { patient, ...responses } = data;

    const newCheckup: INewCheckup = {
      doctor_id: doctorId,
      template_id: 1,
      patient_id: Number(patient),
      data: JSON.stringify(responses),
    };

    addCheckup(newCheckup).then(() => history.goBack());
  });

  useEffect(() => {
    getTemplatesByHospital(1).then((res) => setTemplate(res.data[0]));
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">Nueva consulta</h4>
      </div>
      <div className="my-3">
        {template && (
          <form onSubmit={onSubmit}>
            <input
              className="form-control"
              placeholder="Número de identificación del paciente"
              {...register("patient")}
            />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Pregunta</th>
                  <th scope="col">Diagnóstico</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(JSON.parse(template.headers)).map(
                  ([question, type]) => (
                    <tr key={question}>
                      <th scope="row">{question}</th>
                      <td>
                        <input
                          className="form-control"
                          placeholder={question}
                          {...register(question)}
                        />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <button type="submit" className="btn btn-primary float-end">
              Crear consulta
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddCheckup;
