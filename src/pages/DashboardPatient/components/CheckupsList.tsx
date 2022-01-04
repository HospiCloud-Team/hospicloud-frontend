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
      <h4>Consultas</h4>
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
