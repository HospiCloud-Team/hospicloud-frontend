import { IAdmin } from "../../models/IAdmin";
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

export { login, registerPatient, registerAdmin };
