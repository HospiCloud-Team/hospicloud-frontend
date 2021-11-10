export interface INewHospital {
  name: string;
  schedule: string;
  location: {
    address: string;
    province: string;
  };
  description: string;
}

export interface IHospital extends INewHospital {
  id: number;
  created_at: string;
  updated_at: string | null;
  location: {
    address: string;
    province: string;
    id: number;
  };
}
