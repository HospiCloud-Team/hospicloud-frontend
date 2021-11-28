import { ISpecialty } from "./ISpecialty";

export interface INewDoctor {
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
    specialties: ISpecialty[];
  };
}

export interface IDoctor extends INewDoctor {
  id: number;
  doctor: {
    hospital_id: number;
    schedule: string;
    specialties: ISpecialty[];
    id: number;
  };
}
