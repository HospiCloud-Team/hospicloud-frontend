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
