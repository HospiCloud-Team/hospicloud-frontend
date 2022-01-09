import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getPatientHistory } from "../../../api/users";
import PersonItem from "../../../components/PersonItem";
import { IDoctor } from "../../../models/IDoctor";
import routes from "../../../router/constantRoutes.json";

const PatientDoctorsList = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const history = useHistory();

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    getPatientHistory(userId as string).then((doctors) =>
      setDoctors(doctors.data)
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
        <h4 className="m-0">Listado de doctores</h4>
      </div>
      {doctors.map((doctor) => (
        <PersonItem
          person={doctor}
          onClick={() =>
            history.push(`${routes.PATIENT_DOCTORS_LIST}${doctor.doctor?.id}`)
          }
        />
      ))}
    </div>
  );
};

export default PatientDoctorsList;
