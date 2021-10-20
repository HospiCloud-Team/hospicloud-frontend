import { useHistory } from "react-router";
import { ICheckup } from "../../../models/ICheckup";
import routes from "../../../router/constantRoutes.json";

const CheckupsList = () => {
  const history = useHistory();

  const checkups: ICheckup[] = [
    {
      data: `{"Estado fisico":"saludable", "latidos por segundo": "120/40"}`,
      date: "2021-10-18T18:41:53.024Z",
      doctor: { id: 1 },
      id: 1,
      patient: {
        id: 1,
        id_blood_type: "o_plus",
        medical_background: "aefaefefwef",
      },
    },
    {
      data: `{"hello":"bye"}`,
      date: "2021-10-18T18:41:53.024Z",
      doctor: { id: 1 },
      id: 1,
      patient: {
        id: 1,
        id_blood_type: "o_plus",
        medical_background: "aefaefefwef",
      },
    },
  ];

  return (
    <div>
      <h4>Consultas</h4>
      {checkups.map((checkup) => (
        <div className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative">
          <div className="col-1 border-end">
            <button
              className="btn btn-primary btn-sm stretched-link"
              onClick={() =>
                history.push(
                  `${routes.PATIENT_CHECKUPS}/${checkup.id}`,
                  checkup
                )
              }
            >
              <i className="bi bi-journal-text"></i>
            </button>
          </div>
          <div className="col-11 d-flex justify-content-between">
            <p className="m-0">{checkup.patient.id}</p>
            <p className="m-0">{checkup.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckupsList;
