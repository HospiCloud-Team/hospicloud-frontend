import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getCheckupsPatient } from "../../../../api/checkups";
import { ICheckup } from "../../../../models/ICheckup";
import { PatientGeneralInfo } from "./PatientGeneralInfo";
import { PatientRecordItem } from "./PatientRecordItem";

type PatientProps = {
  id: string;
};

export const PatientRecord = () => {
  const { id } = useParams<PatientProps>();
  const [patientRecord, setPatientRecord] = useState<ICheckup[]>();
  let history = useHistory();

  const getAllRecord = async () => {
    const checkups = await getCheckupsPatient(Number(id));
    setPatientRecord(checkups.data);
  };

  useEffect(() => {
    getAllRecord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">
          Historial de
          {patientRecord
            ? ` ${patientRecord[0].patient.user.name} ${patientRecord[0].patient.user.last_name}`
            : "paciente"}
        </h4>
      </div>
      {patientRecord && (
        <>
          <div className="mt-3">
            <PatientGeneralInfo patientRecord={patientRecord[0]} />
          </div>
          {patientRecord.map((checkup) => (
            <PatientRecordItem checkup={checkup} />
          ))}
        </>
      )}
    </>
  );
};
