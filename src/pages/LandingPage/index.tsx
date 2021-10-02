import { IHospital } from "../../models/IHospital";
import HospitalItem from "./components/HospitalItem";
import LandingHeader from "../../components/LandingHeader";

const LandingPage = () => {
  const topHospitals: IHospital[] = [
    {
      id: 1,
      name: "Hospiten1",
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
    <>
      <LandingHeader />
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-12 col-md-2">
            <div>Hi</div>
          </div>
          <div className="col-12 col-md-10 d-flex flex-wrap">
            <input
              type="search"
              className="form-control mb-3"
              id="hospital-search"
              placeholder="Buscar Centro Medico"
            />
            {topHospitals.map((hospital) => (
              <HospitalItem key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
