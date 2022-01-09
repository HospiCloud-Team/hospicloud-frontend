import { useEffect, useState } from "react";
import CheckupItem from "../../../components/CheckupItem";
import { ICheckup } from "../../../models/ICheckup";
import routes from "../../../router/constantRoutes.json";
import { getCheckupsPatient } from "../../../api/checkups";
import { useHistory, useParams } from "react-router";

const CheckupsListForDoctor = () => {
  const [checkups, setCheckups] = useState<ICheckup[]>([]);
  const { id: doctorId } = useParams<{ id: string }>();
  let history = useHistory();

  useEffect(() => {
    const patientId = Number(localStorage.getItem("patientId") as string);
    getCheckupsPatient(patientId, Number(doctorId)).then((retrievedCheckups) =>
      setCheckups(retrievedCheckups.data.reverse())
    );
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
        <h4 className="m-0">Consultas</h4>
      </div>
      {checkups.map((checkup) => (
        <CheckupItem
          key={checkup.id}
          checkup={checkup}
          patientName={`Dr. ${checkup.doctor.user.name} ${checkup.doctor.user.last_name}`}
          onClick={() => {
            history.push(`${routes.PATIENT_CHECKUPS}/${checkup.id}`, checkup);
          }}
        />
      ))}
    </div>
  );
};

export default CheckupsListForDoctor;
