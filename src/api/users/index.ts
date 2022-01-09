import { AxiosResponse } from "axios";
import { IAdmin, INewAdmin, IUpdateAdmin } from "../../models/IAdmin";
import { IDoctor, INewDoctor, IUpdateDoctor } from "../../models/IDoctor";
import { INewPatient, IPatient, IUpdatePatient } from "../../models/IPatient";
import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const getParticularUser = (
  userId: string
): Promise<AxiosResponse<IDoctor | IPatient | IAdmin>> => {
  return UsersAPI.get(`/users/${userId}`);
};

const getPatientByDocumentNumber = (
  documentNumber: string
): Promise<AxiosResponse<IPatient>> => {
  return UsersAPI.get(`/users/document-number/${documentNumber}`);
};

const getPatientHistory = (
  userId: Number
): Promise<AxiosResponse<IDoctor[]>> => {
  return UsersAPI.get(`/users/${userId}/history`);
};

const getDoctorHistory = (
  userId: string
): Promise<AxiosResponse<IPatient[]>> => {
  return UsersAPI.get(`/users/${userId}/history`);
};

const updateParticularDoctor = (userId: string, doctorData: IUpdateDoctor) => {
  return UsersAPI.put(`/users/${userId}`, doctorData);
};

const updateParticularAdmin = (userId: string, adminData: IUpdateAdmin) => {
  return UsersAPI.put(`/users/${userId}`, adminData);
};

const updateParticularPatient = (
  userId: string,
  patientData: IUpdatePatient
) => {
  return UsersAPI.put(`/users/${userId}`, patientData);
};

const registerPatient = (patientData: INewPatient) => {
  return UsersAPI.post("/register", patientData);
};

const registerAdmin = (adminData: INewAdmin) => {
  return UsersAPI.post("/register", adminData);
};

const addPersonnel = (adminData: INewAdmin | INewDoctor) => {
  return UsersAPI.post("/users", adminData);
};

export {
  login,
  registerPatient,
  registerAdmin,
  addPersonnel,
  getParticularUser,
  getPatientByDocumentNumber,
  getDoctorHistory,
  getPatientHistory,
  updateParticularDoctor,
  updateParticularAdmin,
  updateParticularPatient,
};
