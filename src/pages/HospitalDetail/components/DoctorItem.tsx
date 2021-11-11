import { IDoctor } from "../../../models/IDoctor";

interface DoctorItemProps {
  doctor: IDoctor;
}

const DoctorItem = ({ doctor }: DoctorItemProps) => {
  return (
    <div className="box row p-3 m-0">
      <div>
        <h6>{`${doctor.name} ${doctor.last_name}`}</h6>
        <p className="m-0 text-muted">{doctor.email}</p>
        <p className="m-0 text-muted">{doctor.doctor.schedule}</p>
      </div>
    </div>
  );
};

export default DoctorItem;
