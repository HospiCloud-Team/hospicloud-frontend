import { IDoctor } from "../../../models/IDoctor";
import DoctorItem from "./DoctorItem";

interface DoctorsListProps {
  doctors: IDoctor[];
}

const DoctorsList = ({ doctors }: DoctorsListProps) => {
  return (
    <div>
      {doctors.length > 0 && (
        <>
          <h5 className="mb-2">Doctores</h5>

          <div className="row g-2">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="col-md-6 col-12">
                <DoctorItem doctor={doctor} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorsList;
