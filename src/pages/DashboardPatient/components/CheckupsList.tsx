import { useEffect, useState } from "react";
import CheckupItem from "../../../components/CheckupItem";
import { ICheckup } from "../../../models/ICheckup";
import routes from "../../../router/constantRoutes.json";
import { getCheckupsPatient } from "../../../api/checkups";
import { useHistory } from "react-router";
const CheckupsList = () => {
  const [checkups, setCheckups] = useState<ICheckup[]>([]);
  let history = useHistory();

  useEffect(() => {
    const patientId = Number(localStorage.getItem("patientId") as string);
    getCheckupsPatient(patientId).then((retrievedCheckups) =>
      setCheckups(retrievedCheckups.data.reverse())
    );
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="m-0">Consultas</h4>
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={() => history.push(routes.PATIENT_DOCTORS_LIST)}
        >
          Ver lista de doctores
        </button>
      </div>
      {checkups.map((checkup) => (
        <CheckupItem
          key={checkup.id}
          checkup={checkup}
          patientName={`${checkup.doctor.user.name} ${checkup.doctor.user.last_name}`}
          onClick={() => {
            history.push(`${routes.PATIENT_CHECKUPS}/${checkup.id}`, checkup);
          }}
        />
      ))}
    </div>
  );
};

export default CheckupsList;
