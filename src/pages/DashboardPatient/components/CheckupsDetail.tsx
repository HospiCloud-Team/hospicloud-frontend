import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { ICheckup } from "../../../models/ICheckup";
import routes from "../../../router/constantRoutes.json";

const CheckupsDetail = () => {
  const history = useHistory();
  const { state } = useLocation<ICheckup>();
  const [checkup, setCheckup] = useState<ICheckup | undefined>(state);

  if (!checkup) {
    // Get checkup from API
  }

  return (
    <div>
      <h4>Detalle de consulta</h4>
      <div className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative">
        <div className="col-1 border-end">
          <button
            className="btn btn-primary btn-sm stretched-link"
            onClick={() =>
              history.push(`${routes.PATIENT_CHECKUPS}/${checkup?.id}`, checkup)
            }
          >
            <i className="bi bi-journal-text"></i>
          </button>
        </div>
        <div className="col-11 d-flex justify-content-between">
          <p className="m-0">{checkup?.patient.id}</p>
          <p className="m-0">{checkup?.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckupsDetail;
