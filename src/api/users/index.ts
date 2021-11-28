import { AxiosResponse } from "axios";
import { INewAdmin } from "../../models/IAdmin";
import { INewDoctor } from "../../models/IDoctor";
import { IPatient } from "../../models/IPatient";
import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const getParticularUser = (userId: number) => {
  return UsersAPI.get(`/users/${userId}`);
};

const registerPatient = (patientData: IPatient) => {
  return UsersAPI.post("/users", patientData);
};

const registerAdmin = (adminData: INewAdmin) => {
  return UsersAPI.post("/users", adminData);
};

const registerDoctor = (doctorData: INewDoctor) => {
  return UsersAPI.post("/users", doctorData);
};

export {
  login,
  registerPatient,
  registerAdmin,
  registerDoctor,
  getParticularUser,
};
