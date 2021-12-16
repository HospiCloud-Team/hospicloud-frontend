import { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { getCheckupsPatient } from "../../../api/checkups";
import CheckupItem from "../../../components/CheckupItem";
import { ICheckup } from "../../../models/ICheckup";

type PatientProps = {
  id: string;
};

export const PatientRecord = () => {
  const { id } = useParams<PatientProps>();
  const [patientRecord, setPatientRecord] = useState<ICheckup[]>();
  const [open, setOpen] = useState(false);
  let history = useHistory();

  const getAllRecord = async () => {
    const checkups = await getCheckupsPatient(Number(id));
    setPatientRecord(checkups.data);
  };

  useEffect(() => {
    getAllRecord();
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
          Historial de{" "}
          {patientRecord
            ? `${patientRecord[0].patient.user.name} ${patientRecord[0].patient.user.last_name}`
            : "paciente"}
        </h4>
      </div>
      {patientRecord &&
        patientRecord.map((checkup) => (
          <>
            <div
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <CheckupItem
                key={checkup.id}
                checkup={checkup}
                patientName={`${checkup.patient.user.name} ${checkup.patient.user.last_name}`}
              />
            </div>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <table className="table bg-white rounded-2">
                  <thead>
                    <tr>
                      <th scope="col">Pregunta</th>
                      <th scope="col">Diagnóstico</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(JSON.parse(checkup.data)).map(
                      ([question, answer]) => (
                        <tr key={question}>
                          <th scope="row">{question}</th>
                          <td>{answer as string}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </Collapse>
          </>
        ))}
    </>
  );
};
