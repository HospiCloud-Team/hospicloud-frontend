export interface INewSpecialty {
  name: string;
  hospital_id: number;
}

export interface ISpecialty extends INewSpecialty {
  id: number;
}
