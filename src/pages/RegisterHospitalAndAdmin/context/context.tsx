import React from "react";
import { IHospital2, ILocation, ContextType } from "../../../models/IHospital2";

export const HospitalContext = React.createContext<ContextType>(
  {} as ContextType
);

const HospitalProvider = ({ children }: any) => {
  const [locationData] = React.useState<ILocation>({
    address: "",
    province: "",
  });

  const [hospitalData, setHospitalData] = React.useState<IHospital2>({
    id: 0,
    name: "",
    schedule: "",
    location: locationData,
  });

  const saveHospitalData = (hospitalData: IHospital2) => {
    const newHospitalData: IHospital2 = {
      id: hospitalData.id,
      name: hospitalData.name,
      schedule: hospitalData.schedule,
      location: hospitalData.location,
    };
    setHospitalData(newHospitalData);
  };

  return (
    <HospitalContext.Provider value={{ hospitalData, saveHospitalData }}>
      {children}
    </HospitalContext.Provider>
  );
};

// export const WorkstreamProvider = WorkstreamContext.Provider
export default HospitalProvider;
