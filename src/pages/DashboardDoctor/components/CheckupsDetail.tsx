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
      <div className="d-flex align-items-center">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">Detalle de consulta</h4>
      </div>
      <div className="row bg-white mx-0 my-3 p-3 rounded-2">
        <div className="col border-end">
          <p className="fw-bold m-0">Doctor:</p>
          <p className="m-0">{checkup?.patient.id}</p>
        </div>
        <div className="col">
          <p className="fw-bold m-0">Dia de la consulta:</p>
          <p className="m-0">{checkup?.date}</p>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Pregunta</th>
            <th scope="col">Diagnostico</th>
          </tr>
        </thead>
        <tbody>
          {checkup?.data &&
            Object.entries(JSON.parse(checkup.data)).map(
              ([question, answer]) => (
                <tr>
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
