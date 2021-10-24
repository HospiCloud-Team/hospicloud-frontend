import { IHospital } from "../../models/IHospital";
import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const testRequest = () => {
  return UsersAPI.get("/users?user_role=patient");
};

const USERS_ROLES: string[] = [
  'patient',
  'admin',
  'doctor'
]

// lo importante aqui es document_type, name, last_name, email, document_number, date_of_bith, created_at, updated_at, patient
const registerPatient = (document_type: string, name: string, last_name: string, email: string, document_number: string, date_of_birth: Date, patient: {blood_type: string, medical_background: string,}) => {
  const user_role = USERS_ROLES[0];
  return UsersAPI.post("/users", {user_role, document_type, name, last_name, email, document_number, date_of_birth, patient});
}

const registerAdmin = (document_type: string, name: string, last_name: string, email: string, document_number: string, date_of_birth: Date, admin: {hospital_id: number}) => {
  const user_role = USERS_ROLES[1];
  return UsersAPI.post("/users", {user_role, document_type, name, last_name, email, document_number, date_of_birth, admin});
}

const getHospital = (id: string): Promise<IHospital> => {
  return UsersAPI.get(`/hospitals/${id}`);
};

export { login, testRequest, getHospital, registerPatient, registerAdmin };
