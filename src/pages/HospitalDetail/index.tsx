import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { getHospital } from "../../api/users";
import { IHospital } from "../../models/IHospital";

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation<IHospital>();
  const [hospital, setHospital] = useState<IHospital | undefined>(state);

  if (!hospital) {
    getHospital(id).then((res) => {
      setHospital(res);
    });
  }
  console.log("Hi", hospital);

  return <div>Hospital {hospital?.name}</div>;
};

export default HospitalDetail;
