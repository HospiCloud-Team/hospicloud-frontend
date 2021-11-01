import { IHospital } from "../../models/IHospital";
import HospitalItem from "./components/HospitalItem";
import LandingLayout from "../../layout/LandingLayout";
import { useEffect, useState } from "react";
import { getAllHospitals } from "../../api/utilities";

const LandingPage = () => {
  const [searchName, setSearchName] = useState<string | null>(null);
  const [hospitals, setHospitals] = useState<IHospital[]>([]);

  useEffect(() => {
    getAllHospitals().then((res) => setHospitals(res.data));
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchName);
      // Send Axios request here
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchName]);

  return (
    <LandingLayout>
      <input
        type="search"
        className="form-control mb-3"
        id="hospital-search"
        placeholder="Buscar Centro Medico"
        onChange={(e) => setSearchName(e.target.value)}
      />
      <div className="row m-0">
        {hospitals.map((hospital) => (
          <HospitalItem key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
