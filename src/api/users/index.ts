import { AxiosResponse } from "axios";
import { IAdmin } from "../../models/IAdmin";
import { IDoctor } from "../../models/IDoctor";
import { IPatient } from "../../models/IPatient";
import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const registerPatient = (patientData: IPatient) => {
  return UsersAPI.post("/users", patientData);
};

const registerAdmin = (adminData: IAdmin) => {
  return UsersAPI.post("/users", adminData);
};

const getDoctorsByHospitalId = (
  id: number
): Promise<AxiosResponse<IDoctor[]>> => {
  return UsersAPI.get(`/users/doctors?hospital_id=${id}`);
};

export { login, registerPatient, registerAdmin, getDoctorsByHospitalId };
