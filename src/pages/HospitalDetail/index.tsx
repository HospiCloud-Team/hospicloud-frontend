import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getHospital, getSpecialtyByHospital } from "../../api/utilities";
import LandingLayout from "../../layout/LandingLayout";
import { IDoctor } from "../../models/IDoctor";
import { IHospital } from "../../models/IHospital";
import { ISpecialty } from "../../models/ISpecialty";
import DoctorsList from "./components/DoctorsList";

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation<IHospital>();
  const [hospital, setHospital] = useState<IHospital | undefined>(state);
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);

  if (!hospital) {
    getHospital(id).then((res) => {
      setHospital(res.data);
    });
  }

  useEffect(() => {
    getSpecialtyByHospital(Number(id)).then((res) => setSpecialties(res.data));
  }, []);

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
          {/* <img
            src={hospital?.image}
            alt={hospital?.name}
            className="img-fluid rounded mb-2"
          /> */}
          <p className="mb-0">
            <span className="fw-bold">Dirección: </span>
            {hospital?.location.address}
          </p>
          <p className="mb-0">
            <span className="fw-bold">Provincia: </span>
            {hospital?.location.province}
          </p>
        </div>
        <div className="col-md-8">
          <h5>Descripción:</h5>
          <p className="mb-4">
            {/* hospital.description */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            facilis esse expedita, quibusdam architecto dolorem officia ex ipsum
            similique dolorum dolores voluptatum totam rerum quod facere ullam
            alias nam repellendus cumque explicabo iusto consequuntur itaque?
            Temporibus omnis cum neque et doloremque praesentium eum consequatur
            commodi? Facere consequatur fugiat porro quae.
          </p>
          {specialties.map((specialty) => (
            <span className="badge bg-primary me-2" key={specialty.id}>
              {specialty.name}
            </span>
          ))}
        </div>
      </div>
      <DoctorsList doctors={doctors} />
    </LandingLayout>
  );
};

export default HospitalDetail;
