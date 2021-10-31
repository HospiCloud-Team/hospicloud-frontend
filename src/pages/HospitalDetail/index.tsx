import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { getHospital } from "../../api/users";
import LandingLayout from "../../layout/LandingLayout";
import { IDoctor } from "../../models/IDoctor";
import { IHospital } from "../../models/IHospital";
import DoctorsList from "./components/DoctorsList";

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation<IHospital>();
  const [hospital, setHospital] = useState<IHospital | undefined>(state);

  if (!hospital) {
    getHospital(id).then((res) => {
      setHospital(res);
    });
  }

  const doctors: IDoctor[] = [
    {
      id: 1,
      name: "Test Test",
      email: "test@test.com",
      image:
        "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
      phoneNo: "(809) 000 0000",
      schedule: "",
      specialities: ["Ginecologo", "Obstetra"],
    },
    {
      id: 2,
      name: "Test Test",
      email: "test@test.com",
      image:
        "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
      phoneNo: "(809) 000 0000",
      schedule: "",
      specialities: ["Ginecologo", "Obstetra"],
    },
    {
      id: 3,
      name: "Test Test",
      email: "test@test.com",
      image:
        "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
      phoneNo: "(809) 000 0000",
      schedule: "",
      specialities: ["Ginecologo", "Obstetra"],
    },
    {
      id: 4,
      name: "Test Test",
      email: "test@test.com",
      image:
        "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
      phoneNo: "(809) 000 0000",
      schedule: "",
      specialities: ["Ginecologo", "Obstetra"],
    },
    {
      id: 5,
      name: "Test Test",
      email: "test@test.com",
      image:
        "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg",
      phoneNo: "(809) 000 0000",
      schedule: "",
      specialities: ["Ginecologo", "Obstetra"],
    },
  ];
  return (
    <LandingLayout>
      <h1 className="fs-2">{hospital?.name}</h1>
      <div className="row my-3">
        <div className="col-md-4 mb-3">
          <img
            src={hospital?.image}
            alt={hospital?.name}
            className="img-fluid rounded mb-2"
          />
          <p className="mb-0">
            <span className="fw-bold">Dirección: </span>
            {hospital?.location.address}
          </p>
          <p className="mb-0">
            <span className="fw-bold">Ciudad: </span>
            {hospital?.location.city}
          </p>
          <p className="mb-0">
            <span className="fw-bold">Provincia: </span>
            {hospital?.location.province}
          </p>
        </div>
        <div className="col-md-8">
          <h5>Descripción:</h5>
          <p className="mb-4">{hospital?.description}</p>
          {hospital?.specialities.map((speciality) => (
            <span className="badge bg-primary me-2" key={speciality}>
              {speciality}
            </span>
          ))}
        </div>
      </div>
      <DoctorsList doctors={doctors} />
    </LandingLayout>
  );
};

export default HospitalDetail;
