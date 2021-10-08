import { IDoctor } from "../../../models/IDoctor";

interface DoctorItemProps {
  doctor: IDoctor;
}

const DoctorItem = ({ doctor }: DoctorItemProps) => {
  return (
    <div className="box row p-2 m-0">
      <div className="col-2">
        <img className="img-fluid" src={doctor.image} alt={doctor.name} />
      </div>
      <div className="col-10">
        <h6>{doctor.name}</h6>
        <p className="m-0 text-muted">{doctor.phoneNo}</p>
        <p className="m-0 text-muted">{doctor.email}</p>
      </div>
    </div>
  );
};

export default DoctorItem;
