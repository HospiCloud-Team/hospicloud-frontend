export interface ICheckup {
  data: string;
  id: number;
  patient: {
    id_blood_type: string;
    medical_background: string;
    id: number;
  };
  doctor: {
    id: number;
  };
  date: string;
}
