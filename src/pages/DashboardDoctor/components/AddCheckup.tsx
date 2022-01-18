import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { addCheckup } from "../../../api/checkups";
import { getPatientByDocumentNumber } from "../../../api/users";
import { INewCheckup } from "../../../models/ICheckup";
import { IPatient } from "../../../models/IPatient";
import { ITemplate } from "../../../models/ITemplate";
import BloodType from "../../../constants/blood-type.json";

const AddCheckup = () => {
  const [documentNumber, setDocumentNumber] = useState<string>("");
  const [patient, setPatient] = useState<IPatient>();
  const [isSubmitAllowed, setIsSubmitAllowed] = useState(false);
  const { state: template } = useLocation<ITemplate>();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (isSubmitAllowed) {
      const doctorId = Number(localStorage.getItem("doctorId") as string);
      const { document_number, ...responses } = data;

      const newCheckup: INewCheckup = {
        doctor_id: doctorId,
        template_id: template.id,
        document_number: document_number,
        data: JSON.stringify(responses),
      };

      addCheckup(newCheckup).then(() => history.goBack());
    }
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (documentNumber) {
        getPatientByDocumentNumber(documentNumber)
          .then((res) => {
            setPatient(res.data);
            setIsSubmitAllowed(true);
          })
          .catch(() => {
            setPatient(undefined);
            setIsSubmitAllowed(false);
          });
      }
    }, 750);

    return () => clearTimeout(delayDebounceFn);
  }, [documentNumber]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={history.goBack}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <h4 className="m-0">Nueva consulta</h4>
        </div>
        <p className="m-0">{template.title}</p>
      </div>
      <div className="my-3">
        {patient && (
          <div className="row bg-white mx-0 my-3 p-3 rounded-2">
            <p className="m-0 fw-bold">Detalles del paciente:</p>
            <div className="col-6 border-end">
              <p className="m-0">{`Nombre: ${patient.name} ${patient.last_name}`}</p>
              <p className="m-0">{`Correo: ${patient.email}`}</p>
            </div>
            <div className="col-6">
              <p className="m-0">{`Tipo de sangre: ${
                BloodType.filter((x) => x.id === patient.patient.blood_type)[0]
                  .value
              }`}</p>
              <p className="m-0">{`Fecha de nacimiento: ${patient.date_of_birth}`}</p>
            </div>
          </div>
        )}
        {template && (
          <form onSubmit={onSubmit}>
            <input
              className="form-control"
              placeholder="Número de identificación del paciente"
              {...register("document_number", { required: true })}
              onChange={(e) => setDocumentNumber(e.target.value)}
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
                          {...register(question, { required: true })}
                        />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <button
              type="submit"
              className="btn btn-primary float-end"
              disabled={!isSubmitAllowed}
            >
              Crear consulta
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddCheckup;
