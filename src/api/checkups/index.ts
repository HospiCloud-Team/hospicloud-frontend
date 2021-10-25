import { AxiosResponse } from "axios";
import { ICheckup, INewCheckup } from "../../models/ICheckup";
import { CheckupsAPI } from "../hospicloudAPI";

const getCheckupsPatient = (id: number): Promise<AxiosResponse<ICheckup[]>> => {
  return CheckupsAPI.get(`/checkups/patient/${id}`);
};

const getCheckupsDoctor = (id: number): Promise<AxiosResponse<ICheckup[]>> => {
  return CheckupsAPI.get(`/checkups/doctor/${id}`);
};

const addCheckup = (newCheckup: INewCheckup) => {
  return CheckupsAPI.post("/checkups", newCheckup);
};

export { getCheckupsPatient, getCheckupsDoctor, addCheckup };
