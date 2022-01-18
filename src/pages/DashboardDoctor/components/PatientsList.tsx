import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getDoctorHistory } from "../../../api/users";
import PersonItem from "../../../components/PersonItem";
import { IPatient } from "../../../models/IPatient";
import routes from "../../../router/constantRoutes.json";

const PatientsList = () => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const history = useHistory();

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    getDoctorHistory(userId as string).then((patients) =>
      setPatients(patients.data)
    );
  }, [userId]);

  return (
    <div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">Listado de pacientes</h4>
      </div>
      {patients.map((patient) => (
        <PersonItem
          person={patient}
          onClick={() =>
            history.push(`${routes.DOCTOR_PATIENTS_LIST}${patient.patient?.id}`)
          }
        />
      ))}
    </div>
  );
};

export default PatientsList;
