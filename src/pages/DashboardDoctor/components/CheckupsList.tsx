import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getCheckupsDoctor } from "../../../api/checkups";
import CheckupItem from "../../../components/CheckupItem";
import { ICheckup } from "../../../models/ICheckup";
import routes from "../../../router/constantRoutes.json";

const CheckupsList = () => {
  const [checkups, setCheckups] = useState<ICheckup[]>([]);
  const history = useHistory();

  useEffect(() => {
    getCheckupsDoctor(1).then((retrievedCheckups) =>
      setCheckups(retrievedCheckups.data)
    );
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="m-0">Consultas</h4>
        <div>
          <button className="btn btn-secondary btn-sm me-2">
            Ver lista de Pacientes
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => history.push(routes.DOCTOR_NEW_CHECKUP)}
          >
            Agregar Consulta
          </button>
        </div>
      </div>
      {checkups.map((checkup) => (
        <CheckupItem
          key={checkup.id}
          checkup={checkup}
          name={`${checkup.patient.user.name} ${checkup.patient.user.last_name}`}
          route={`${routes.DOCTOR_CHECKUPS}/${checkup.id}`}
        />
      ))}
    </div>
  );
};

export default CheckupsList;
