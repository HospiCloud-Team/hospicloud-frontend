import { AxiosResponse } from "axios";
import { ICheckup, INewCheckup } from "../../models/ICheckup";
import { IHospital } from "../../models/IHospital";
import { UtilitiesAPI } from "../hospicloudAPI";

const getCheckupsPatient = (id: number): Promise<AxiosResponse<ICheckup[]>> => {
  return UtilitiesAPI.get(`/checkups/patient/${id}`);
};

const getCheckupsDoctor = (id: number): Promise<AxiosResponse<ICheckup[]>> => {
  return UtilitiesAPI.get(`/checkups/doctor/${id}`);
};

const addCheckup = (newCheckup: INewCheckup) => {
  return UtilitiesAPI.post("/checkups", newCheckup);
};

export { getCheckupsPatient, getCheckupsDoctor, addCheckup };
