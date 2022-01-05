import { IUser } from "./IUser";

export interface INewCheckup {
  data: string; // Stringified JSON object
  document_number: string;
  template_id: number;
  doctor_id: number;
}

export interface ICheckup {
  data: string; // Stringified JSON object
  template_id: number;
  doctor_id: number;
  patient_id: number;
  id: number;
  patient: {
    id: number;
    blood_type: string;
    medical_background: string | null;
    user_id: number;
    user: IUser;
  };
  doctor: {
    id: number;
    hospital_id: number | null;
    schedule_id: number | null;
    user_id: number;
    user: IUser;
  };
  date: string;
}
