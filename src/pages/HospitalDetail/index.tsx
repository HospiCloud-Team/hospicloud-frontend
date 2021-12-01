import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getDoctorsByHospitalId } from "../../api/utilities";
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
  const [doctors, setDoctors] = useState<IDoctor[]>([]);

  if (!hospital) {
    getHospital(id).then((res) => {
      setHospital(res.data);
    });
  }

  useEffect(() => {
    getSpecialtyByHospital(Number(id)).then((res) => setSpecialties(res.data));
    getDoctorsByHospitalId(Number(id)).then((res) => setDoctors(res.data));
  }, [id]);

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
          <p>
            <span className="fw-bold">Provincia: </span>
            {hospital?.location.province}
          </p>
          <p className="mb-0 fw-bold">Horario:</p>
          <p className="mb-0">{hospital?.schedule}</p>
        </div>
        <div className="col-md-8">
          <h5>Descripción:</h5>
          <p className="mb-4">{hospital?.description}</p>
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
