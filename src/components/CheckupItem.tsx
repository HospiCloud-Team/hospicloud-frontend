import { ICheckup } from "../models/ICheckup";

interface CheckupItemProps {
  patientName: string;
  checkup: ICheckup;
  onClick?: () => void;
}

const CheckupItem = ({ patientName, checkup, onClick }: CheckupItemProps) => {
  return (
    <div className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative">
      <div className="col-1 border-end">
        <button
          className="btn btn-primary btn-sm stretched-link"
          onClick={onClick}
        >
          <i className="bi bi-journal-text"></i>
        </button>
      </div>
      <div className="col-11 d-flex justify-content-between">
        <p className="m-0">{patientName}</p>
        <p className="m-0 fw-bold">By Dr. Cesar Lopez</p>
        <p className="m-0">{new Date(checkup.date).toLocaleString("es-DO")}</p>
      </div>
    </div>
  );
};

export default CheckupItem;
