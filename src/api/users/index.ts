import { AxiosResponse } from "axios";
import { INewAdmin, IUpdateAdmin } from "../../models/IAdmin";
import { INewDoctor, IUpdateDoctor } from "../../models/IDoctor";
import { IPatient } from "../../models/IPatient";
import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const getParticularUser = (userId: string) => {
  return UsersAPI.get(`/users/${userId}`);
};

const updateParticularDoctor = (userId: string, doctorData: IUpdateDoctor) => {
  return UsersAPI.put(`/users/${userId}`, doctorData);
};

const updateParticularAdmin = (userId: string, adminData: IUpdateAdmin) => {
  return UsersAPI.put(`/users/${userId}`, adminData);
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
  updateParticularDoctor,
  updateParticularAdmin,
};
