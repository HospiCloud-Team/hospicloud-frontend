import { ICheckup } from "../../models/ICheckup";
import { CheckupsAPI } from "../hospicloudAPI";

const getCheckupsPatient = (id: number): Promise<ICheckup[]> => {
  return CheckupsAPI.get(`/checkups/patient/${id}`);
};

const getCheckupsDoctor = (id: number): Promise<ICheckup[]> => {
  return CheckupsAPI.get(`/checkups/doctor/${id}`);
};

export { getCheckupsPatient, getCheckupsDoctor };
