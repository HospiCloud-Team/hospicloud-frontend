import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCheckupsPatient } from "../../../api/checkups";

type PatientProps = {
  id: string;
};

export const PatientRecord = () => {
  const { id } = useParams<PatientProps>();
  const [patientRecord, setPatientRecord] = useState<any>();

  const getAllRecord = async () => {
    const checkups = await getCheckupsPatient(Number(id));
    setPatientRecord(checkups.data);
    console.log(checkups.data);
  };

  useEffect(() => {
    getAllRecord();
  }, []);
  return <></>;
};
