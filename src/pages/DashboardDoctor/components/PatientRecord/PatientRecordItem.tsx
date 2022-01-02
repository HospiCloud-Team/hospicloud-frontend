import { useState } from "react";
import { Collapse } from "react-bootstrap";
import CheckupItem from "../../../../components/CheckupItem";
import { ICheckup } from "../../../../models/ICheckup";

type PatientRecordItemProps = {
  checkup: ICheckup;
};

export const PatientRecordItem = ({ checkup }: PatientRecordItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        aria-controls="collapse-patient-record"
        aria-expanded={open}
      >
        <CheckupItem
          key={checkup.id}
          checkup={checkup}
          patientName={`${checkup.patient.user.name} ${checkup.patient.user.last_name}`}
          doctorName={`${checkup.doctor.user.name} ${checkup.doctor.user.last_name}`}
        />
      </div>
      <Collapse in={open}>
        <div id="collapse-patient-record">
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
  );
};
