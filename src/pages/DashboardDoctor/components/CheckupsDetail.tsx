import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { ICheckup } from "../../../models/ICheckup";

const CheckupsDetail = () => {
  const history = useHistory();
  const { state } = useLocation<ICheckup>();
  const [checkup, setCheckup] = useState<ICheckup | undefined>(state);

  if (!checkup) {
    // Get checkup from API
  }

  return (
    <div>
      <div className="d-flex justify-content-between w-100">
        <div className="d-flex align-items-center">
          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={history.goBack}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <h4 className="m-0">Detalle de consulta</h4>
        </div>
        <button type="button" className="btn btn-primary btn-sm flex-end">
          Historial del paciente
        </button>
      </div>
      <div className="row bg-white mx-0 my-3 p-3 rounded-2">
        <div className="col border-end">
          <p className="fw-bold m-0">Paciente:</p>
          <p className="m-0">{`${checkup?.patient.user.name} ${checkup?.patient.user.last_name}`}</p>
        </div>
        <div className="col">
          <p className="fw-bold m-0">Día de la consulta:</p>
          <p className="m-0">
            {checkup ? new Date(checkup.date).toLocaleString("es-DO") : ""}
          </p>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Pregunta</th>
            <th scope="col">Diagnóstico</th>
          </tr>
        </thead>
        <tbody>
          {checkup?.data &&
            Object.entries(JSON.parse(checkup.data)).map(
              ([question, answer]) => (
                <tr key={question}>
                  <th scope="row">{question}</th>
                  <td>{answer as string}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default CheckupsDetail;
