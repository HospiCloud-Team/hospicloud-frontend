export interface IHospital2 {
  id?: number;
    name: string;
    schedule: string;
    location: ILocation;
  }

export interface ILocation {
  address: string;
  province: string;
}
  
  export type ContextType = {
    hospitalData: IHospital2
    saveHospitalData: (HospitalData: IHospital2) => void
  }