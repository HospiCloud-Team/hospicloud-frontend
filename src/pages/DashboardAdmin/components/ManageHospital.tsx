import { useEffect, useState } from "react";
import { getHospital, getSpecialtyByHospital } from "../../../api/utilities";
import { IHospital } from "../../../models/IHospital";
import { ISpecialty } from "../../../models/ISpecialty";
import AddSpecialtyModal from "./AddSpecialtyModal";

const ManageHospital = () => {
  const [hospital, setHospital] = useState<IHospital>();
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);
  const [showAddSpecialtyModal, setShowAddSpecialtyModal] = useState(false);

  useEffect(() => {
    const hospitalId = Number(localStorage.getItem("hospitalId"));
    getHospital(hospitalId).then((res) => setHospital(res.data));
    getSpecialtyByHospital(hospitalId).then((res) => setSpecialties(res.data));
  }, [showAddSpecialtyModal]);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <h1 className="fs-2">{hospital?.name}</h1>
          <div>
            <button
              onClick={() => {}}
              className="btn btn-outline-secondary btn-sm"
            >
              Editar información de hospital
            </button>
          </div>
        </div>
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
            <p className="mb-4">
              {/* hospital.description */}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              facilis esse expedita, quibusdam architecto dolorem officia ex
              ipsum similique dolorum dolores voluptatum totam rerum quod facere
              ullam alias nam repellendus cumque explicabo iusto consequuntur
              itaque? Temporibus omnis cum neque et doloremque praesentium eum
              consequatur commodi? Facere consequatur fugiat porro quae.
            </p>
            {specialties.map((specialty) => (
              <span className="badge bg-primary me-2" key={specialty.id}>
                {specialty.name}
                <i
                  className="bi bi-x ms-2 pointer"
                  onClick={() => console.log("Hi")}
                ></i>
              </span>
            ))}
            <button
              className="badge bg-secondary"
              onClick={() => setShowAddSpecialtyModal(true)}
            >
              Agregar Nueva Especialidad
            </button>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-6 d-grid">
            <button className="btn btn-secondary">Manejar Personal</button>
          </div>
          <div className="col-6 d-grid">
            <button className="btn btn-secondary">Manejar Plantillas</button>
          </div>
        </div>
      </div>
      <AddSpecialtyModal
        show={showAddSpecialtyModal}
        close={() => setShowAddSpecialtyModal(false)}
      />
    </>
  );
};

export default ManageHospital;
