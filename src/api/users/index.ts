import { AxiosResponse } from "axios";
import { IAdmin, INewAdmin, IUpdateAdmin } from "../../models/IAdmin";
import { IDoctor, INewDoctor, IUpdateDoctor } from "../../models/IDoctor";
import { INewPatient, IPatient, IUpdatePatient } from "../../models/IPatient";
import { UsersAPI } from "../hospicloudAPI";
import auth from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import routes from "../../router/constantRoutes.json";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email, {
    url: window.location.origin + routes.LOGIN,
  })
    .then(() => {
      alert("Su correo de restablecimiento de contraseña ha sido enviado");
    })
    .catch((error) => {
      return error;
    });
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
  userId: string
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
  resetPassword,
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
