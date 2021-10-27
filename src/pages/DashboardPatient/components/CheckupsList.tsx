import { useEffect, useState } from "react";
import CheckupItem from "../../../components/CheckupItem";
import { ICheckup } from "../../../models/ICheckup";
import routes from "../../../router/constantRoutes.json";
import { getCheckupsPatient } from "../../../api/checkups";
const CheckupsList = () => {
  const [checkups, setCheckups] = useState<ICheckup[]>([]);

  useEffect(() => {
    getCheckupsPatient(1).then((retrievedCheckups) =>
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
          name={`${checkup.doctor.user.name} ${checkup.doctor.user.last_name}`}
          route={`${routes.PATIENT_CHECKUPS}/${checkup.id}`}
        />
      ))}
    </div>
  );
};

export default CheckupsList;
