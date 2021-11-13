import { INewHospital } from "../../../models/IHospital";

export type HospitalContextType = {
  hospitalData?: INewHospital;
  saveHospitalData: (HospitalData: INewHospital) => void;
};
