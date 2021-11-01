import { IHospital } from "../../models/IHospital";
import HospitalItem from "./components/HospitalItem";
import LandingLayout from "../../layout/LandingLayout";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [searchName, setSearchName] = useState<string | null>(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchName);
      // Send Axios request here
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchName]);

  const topHospitals: IHospital[] = [
    {
      id: 1,
      name: "Hospiten1",
      location: {
        address: "Av. Alma Mater s/n",
        province: "Santo Domingo",
        id: 1,
      },
      schedule: "",
      created_at: "",
      updated_at: null,
    },
    {
      id: 2,
      name: "Hospiten1",
      location: {
        address: "Av. Alma Mater s/n",
        province: "Santo Domingo",
        id: 1,
      },
      schedule: "",
      created_at: "",
      updated_at: null,
    },
    {
      id: 3,
      name: "Hospiten1",
      location: {
        address: "Av. Alma Mater s/n",
        province: "Santo Domingo",
        id: 1,
      },
      schedule: "",
      created_at: "",
      updated_at: null,
    },
    {
      id: 4,
      name: "Hospiten1",
      location: {
        address: "Av. Alma Mater s/n",
        province: "Santo Domingo",
        id: 1,
      },
      schedule: "",
      created_at: "",
      updated_at: null,
    },
    {
      id: 5,
      name: "Hospiten1",
      location: {
        address: "Av. Alma Mater s/n",
        province: "Santo Domingo",
        id: 1,
      },
      schedule: "",
      created_at: "",
      updated_at: null,
    },
    {
      id: 6,
      name: "Hospiten1",
      location: {
        address: "Av. Alma Mater s/n",
        province: "Santo Domingo",
        id: 1,
      },
      schedule: "",
      created_at: "",
      updated_at: null,
    },
  ];

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
        {topHospitals.map((hospital) => (
          <HospitalItem key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
