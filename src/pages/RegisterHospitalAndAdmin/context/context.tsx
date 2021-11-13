import React from "react";
import { INewHospital } from "../../../models/IHospital";
import { HospitalContextType } from "./types";

export const HospitalContext = React.createContext<HospitalContextType>(
  {} as HospitalContextType
);

const HospitalProvider = ({ children }: any) => {
  const [hospitalData, setHospitalData] = React.useState<
    INewHospital | undefined
  >();

  const saveHospitalData = (hospitalData: INewHospital) => {
    setHospitalData(hospitalData);
  };

  return (
    <HospitalContext.Provider value={{ hospitalData, saveHospitalData }}>
      {children}
    </HospitalContext.Provider>
  );
};

// export const WorkstreamProvider = WorkstreamContext.Provider
export default HospitalProvider;
