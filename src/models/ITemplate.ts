export interface INewTemplate {
  title: string;
  headers: string; // JSON object of template fields
  specialty_id: number;
  hospital_id: number;
}

export interface ITemplate extends INewTemplate {
  numeric_fields: number;
  alphanumeric_fields: number;
  created_at: string;
  id: number;
}
