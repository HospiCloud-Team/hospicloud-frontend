import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getHospital, getSpecialtyByHospital } from "../../../../api/utilities";
import { IHospital } from "../../../../models/IHospital";
import { ISpecialty } from "../../../../models/ISpecialty";
import AddSpecialtyModal from "./components/AddSpecialtyModal";
import RemoveSpecialtyModal from "./components/RemoveSpecialtyModal";
import routes from "../../../../router/constantRoutes.json";

const ManageHospital = () => {
  const history = useHistory();
  const [hospital, setHospital] = useState<IHospital>();
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);
  const [showAddSpecialtyModal, setShowAddSpecialtyModal] = useState(false);
  const [showRemoveSpecialtyModal, setShowRemoveSpecialtyModal] =
    useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<ISpecialty>();

  useEffect(() => {
    const hospitalId = localStorage.getItem("hospitalId");
    getHospital(hospitalId as string).then((res) => setHospital(res.data));
    getSpecialtyByHospital(Number(hospitalId)).then((res) =>
      setSpecialties(res.data)
    );
  }, [showRemoveSpecialtyModal, showAddSpecialtyModal]);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <h1 className="fs-2">{hospital?.name}</h1>
          <div>
            <button
              onClick={() => {
                history.push({
                  pathname: `/admin/hospital-detalle/${hospital?.id}`,
                });
              }}
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
            <p className="mb-4">{hospital?.description}</p>
            {specialties.map((specialty) => (
              <span className="badge bg-primary me-2" key={specialty.id}>
                {specialty.name}
                <i
                  className="bi bi-x ms-2 pointer"
                  onClick={() => {
                    setSelectedSpecialty(specialty);
                    setShowRemoveSpecialtyModal(true);
                  }}
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
            <button
              className="btn btn-secondary"
              onClick={() => {
                history.push(routes.PERSONNEL_LIST);
              }}
            >
              Manejar Personal
            </button>
          </div>
          <div className="col-6 d-grid">
            <button
              className="btn btn-secondary"
              onClick={() => history.push(routes.ADMIN_TEMPLATES)}
            >
              Manejar Plantillas
            </button>
          </div>
        </div>
      </div>
      <AddSpecialtyModal
        show={showAddSpecialtyModal}
        close={() => setShowAddSpecialtyModal(false)}
      />
      <RemoveSpecialtyModal
        show={showRemoveSpecialtyModal}
        close={() => setShowRemoveSpecialtyModal(false)}
        specialty={selectedSpecialty}
      />
    </>
  );
};

export default ManageHospital;
