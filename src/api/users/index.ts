import { IHospital } from "../../models/IHospital";
import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const testRequest = () => {
  return UsersAPI.get("/users?user_role=patient");
};

// lo importante aqui es document_type, name, last_name, email, document_number, date_of_bith, created_at, updated_at, patient
const registerPatient = (user_role: string, document_type: string, name: string, last_name: string, email: string, document_number: string, date_of_birth: string, created_at: Date, updated_at: Date, patient: {blood_type: string, medical_background: string,}) => {
  user_role = "patient";
  return UsersAPI.post("/users", {user_role, document_type, name, last_name, email, document_number, date_of_birth, created_at, updated_at, patient});
}

const getHospital = (id: string): Promise<IHospital> => {
  return UsersAPI.get(`/hospitals/${id}`);
};

export { login, testRequest, getHospital, registerPatient };
