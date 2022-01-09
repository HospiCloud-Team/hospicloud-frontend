import { IDoctor } from "../models/IDoctor";
import { IPatient } from "../models/IPatient";

interface PersonItemProps {
  person: IPatient | IDoctor;
  onClick?: () => void;
}

const PersonItem = ({ person, onClick }: PersonItemProps) => {
  return (
    <div className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative">
      <div className="col-1 border-end">
        <button
          className="btn btn-primary btn-sm stretched-link"
          onClick={onClick}
        >
          <i className="bi bi-person"></i>
        </button>
      </div>
      <div className="col-11 d-flex justify-content-between">
        <p className="m-0">{`${person.name} ${person.last_name}`}</p>
        <p className="m-0">{person.email}</p>
      </div>
    </div>
  );
};

export default PersonItem;
