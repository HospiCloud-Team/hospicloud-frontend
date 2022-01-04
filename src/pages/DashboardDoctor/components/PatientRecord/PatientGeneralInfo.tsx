import { ICheckup } from "../../../../models/ICheckup";
import Documents from "../../../../constants/document-type.json";
import BloodType from "../../../../constants/blood-type.json";
import { useEffect, useState } from "react";

type PatientInfoProps = {
  patientRecord: ICheckup;
};

export const PatientGeneralInfo = ({ patientRecord }: PatientInfoProps) => {
  const [documentType, setDocumentType] = useState<string>("");
  const [bloodType, setBloodType] = useState<string>("");

  const getDocumentType = (documentType: any) => {
    // eslint-disable-next-line array-callback-return
    Documents.map((document) => {
      if (document.id === documentType) {
        setDocumentType(document.value);
      }
    });
  };

  const getBloodType = (bloodType: any) => {
    // eslint-disable-next-line array-callback-return
    BloodType.map((blood) => {
      if (blood.id === bloodType) {
        setBloodType(blood.value);
      }
    });
  };

  useEffect(() => {
    getDocumentType(patientRecord.patient.user.document_type);
    getBloodType(patientRecord.patient.blood_type);
  }, []);

  return (
    <table className="table bg-white rounded-2 border border-dark">
      {patientRecord && (
        <tbody>
          <tr>
            <th scope="row">Nombre</th>
            <td className="border-end border-dark">
              {patientRecord.patient.user.name}
            </td>
            <th scope="row">Apellido</th>
            <td>{patientRecord.patient.user.last_name}</td>
          </tr>
          <tr>
            <th scope="row">Correo Electrónico</th>
            <td className="border-end border-dark">
              {patientRecord.patient.user.email}
            </td>
            <th scope="row">Fecha de Nacimiento</th>
            <td>{patientRecord.patient.user.date_of_birth}</td>
          </tr>
          <tr>
            <th scope="row">Tipo de Documento</th>
            <td className="border-end border-dark">{documentType}</td>
            <th scope="row">Número de Documento</th>
            <td>{patientRecord.patient.user.document_number}</td>
          </tr>
          <tr>
            <th scope="row">Tipo de Sangre</th>
            <td className="border-end border-dark">{bloodType}</td>
            <th scope="row">Antecedentes Médicos</th>
            <td>{patientRecord.patient.medical_background}</td>
          </tr>
        </tbody>
      )}
    </table>
  );
};
