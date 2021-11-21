export interface IDoctor {
  user_role: "doctor";
  document_type: string;
  name: string;
  last_name: string;
  email: string;
  document_number: string;
  date_of_birth: Date;
  id: number;
  doctor: {
    hospital_id: number;
    schedule: string;
    id: number;
  };
}

export interface IDoctorRegister {
  user_role: "doctor";
  document_type: string;
  name: string;
  last_name: string;
  email: string;
  document_number: string;
  date_of_birth: Date;
  doctor: {
    hospital_id: number;
    schedule: string;
    specialty_ids: number[];
  };
}