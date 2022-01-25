import { AxiosResponse } from "axios";
import { ICheckup, INewCheckup } from "../../models/ICheckup";
import { CheckupsAPI } from "../hospicloudAPI";

const getCheckupsPatient = (
  id: number,
  doctorId?: number
): Promise<AxiosResponse<ICheckup[]>> => {
  return CheckupsAPI.get(
    doctorId
      ? `/checkups/patient/${id}?doctor_id=${doctorId}`
      : `/checkups/patient/${id}`
  );
};

const getCheckupsDoctor = (
  id: number,
  patientId?: number
): Promise<AxiosResponse<ICheckup[]>> => {
  return CheckupsAPI.get(
    patientId
      ? `/checkups/doctor/${id}?patient_id=${patientId}`
      : `/checkups/doctor/${id}`
  );
};

const addCheckup = (newCheckup: INewCheckup) => {
  return CheckupsAPI.post("/checkups/", newCheckup);
};

export { getCheckupsPatient, getCheckupsDoctor, addCheckup };
