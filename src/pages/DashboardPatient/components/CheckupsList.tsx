import CheckupItem from "../../../components/CheckupItem";
import { ICheckup } from "../../../models/ICheckup";
import routes from "../../../router/constantRoutes.json";

const CheckupsList = () => {
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
      id: 2,
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
        <CheckupItem
          key={checkup.id}
          checkup={checkup}
          name={checkup.doctor.id.toString()}
          route={`${routes.PATIENT_CHECKUPS}/${checkup.id}`}
        />
      ))}
    </div>
  );
};

export default CheckupsList;
