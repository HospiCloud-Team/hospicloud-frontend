import { IHospital } from "../../models/IHospital";
import HospitalItem from "./components/HospitalItem";
import LandingLayout from "../../layout/LandingLayout";
import { useEffect, useState } from "react";
import HospitalFilter from "./components/HospitalFilter";

const LandingPage = () => {
  const [searchName, setSearchName] = useState<string | null>(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchName);
      // Send Axios request here
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchName]);

  const topHospitals: IHospital[] = [
    {
      id: 1,
      name: "Hospiten1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis esse expedita, quibusdam architecto dolorem officia ex ipsum similique dolorum dolores voluptatum totam rerum quod facere ullam alias nam repellendus cumque explicabo iusto consequuntur itaque? Temporibus omnis cum neque et doloremque praesentium eum consequatur commodi? Facere consequatur fugiat porro quae.",
      image:
        "https://www.plantadoce.com/files/2017/hospiten/hospiten-hospital-1-728.jpg",
      location: {
        address: "Av. Alma Mater s/n",
        city: "Distrito Nacional",
        province: "Santo Domingo",
      },
      schedule: "",
      specialities: ["Cardiologia", "Neurologia", "Imagenes", "Ginecologia"],
    },
    {
      id: 2,
      name: "Hospiten2",
      description: "Test, test, test, test",
      image:
        "https://www.plantadoce.com/files/2017/hospiten/hospiten-hospital-1-728.jpg",
      location: {
        address: "Calle Gustavo Mejia Ricart 244",
        city: "Distrito Nacional",
        province: "Santo Domingo",
      },
      schedule: "",
      specialities: ["Cardiologia", "Neurologia", "Imagenes", "Ginecologia"],
    },
    {
      id: 3,
      name: "Hospiten3",
      description: "Test, test, test, test",
      image:
        "https://www.plantadoce.com/files/2017/hospiten/hospiten-hospital-1-728.jpg",
      location: {
        address: "Calle Gustavo Mejia Ricart 244",
        city: "Distrito Nacional",
        province: "Santo Domingo",
      },
      schedule: "",
      specialities: ["Cardiologia", "Neurologia", "Imagenes", "Ginecologia"],
    },
  ];

  return (
    <LandingLayout>
      <div className="row">
        <div className="col-12 col-md-2">
          <HospitalFilter />
        </div>
        <div className="col-12 col-md-10">
          <input
            type="search"
            className="form-control mb-3"
            id="hospital-search"
            placeholder="Buscar Centro Medico"
            onChange={(e) => setSearchName(e.target.value)}
          />
          <div className="d-flex flex-wrap">
            {topHospitals.map((hospital) => (
              <HospitalItem key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default LandingPage;
