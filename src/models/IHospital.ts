export interface IHospital {
  id: number;
  name: string;
  description: string;
  image: string;
  schedule: any;
  specialities: string[];
  location: {
    address: string;
    city: string;
    province: string;
  };
}
