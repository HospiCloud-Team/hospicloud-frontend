import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  getAdminsByHospitalId,
  getDoctorsByHospitalId,
} from "../../../api/utilities";
import { IAdmin } from "../../../models/IAdmin";
import { IDoctor } from "../../../models/IDoctor";
import {
  AddButton,
  PersonnelContainer,
  Title,
  Border,
} from "../styles/PersonnelList.style";
import routes from "../../../router/constantRoutes.json";
import { Link } from "react-router-dom";
const PersonnelList = () => {
  const [admins, setAdmins] = useState<IAdmin[]>([]);
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [isAdminList, setIsAdminList] = useState(true);
  const history = useHistory();

  const handleAdminListClick = () => setIsAdminList(true);

  const handleDoctorListClick = () => setIsAdminList(false);

  useEffect(() => {
    const getAll = async () => {
      const hospitalId = Number(localStorage.getItem("hospitalId"));
      getDoctorsByHospitalId(hospitalId).then((res) => {
        setDoctors(res.data);
      });
      const adminsResponse = await getAdminsByHospitalId(hospitalId);
      setAdmins(adminsResponse.data);
    };
    getAll();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={history.goBack}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <h4 className="m-0">Manejar Personal</h4>
      </div>
      <div className="row">
        <div className="col-6 d-grid">
          <button
            className={`btn btn-${isAdminList ? "primary" : "secondary"}`}
            onClick={handleAdminListClick}
          >
            Administradores
          </button>
        </div>
        <div className="col-6 d-grid">
          <button
            className={`btn btn-${!isAdminList ? "primary" : "secondary"}`}
            onClick={handleDoctorListClick}
          >
            Doctores
          </button>
        </div>
      </div>
      {isAdminList && (
        <PersonnelContainer>
          <div className="d-flex flex-column w-100">
            <div className="d-flex flex-row align-items-center mt-3">
              <Title>Administradores</Title>
              <div className="w-100 d-flex justify-content-end">
                <AddButton
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    history.push(routes.REGISTER_ADMIN_PERSONNEL);
                  }}
                >
                  <div className="buttonText">
                    <i className="bi bi-plus"></i>
                  </div>
                  <div className="TextAfterHover">Agregar Admininstrador</div>
                </AddButton>
              </div>
            </div>
            <Border />
          </div>
          {admins.map((admin) => {
            return (
              <div
                className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative"
                onClick={() => {
                  history.push({
                    pathname: `/admin/admin-detail/${admin.id}`,
                  });
                }}
                key={admin.id}
              >
                <div className="col-1 border-end">
                  <button className="btn btn-primary btn-sm stretched-link">
                    <i className="bi bi-person-badge"></i>
                  </button>
                </div>
                <div className="col-11 d-flex justify-content-between">
                  <p className="m-0">{`${admin.name} ${admin.last_name}`}</p>
                  <p className="m-0">{admin.email}</p>
                </div>
              </div>
            );
          })}
        </PersonnelContainer>
      )}
      {!isAdminList && (
        <PersonnelContainer>
          <div className="d-flex flex-column w-100">
            <div className="d-flex flex-row align-items-center mt-3">
              <Title>Doctores</Title>
              <div className="w-100 d-flex justify-content-end">
                <AddButton
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    history.push(routes.REGISTER_DOCTOR_PERSONNEL);
                  }}
                >
                  <div className="buttonText">
                    <i className="bi bi-plus"></i>
                  </div>
                  <div className="TextAfterHover">Agregar Doctor</div>
                </AddButton>
              </div>
            </div>
            <Border />
          </div>
          {doctors.map((doctor) => {
            return (
              <div
                className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative"
                onClick={() => {
                  history.push({
                    pathname: `/admin/doctor-detail/${doctor.id}`,
                  });
                }}
                key={doctor.id}
              >
                <div className="col-1 border-end">
                  <button className="btn btn-primary btn-sm stretched-link">
                    <i className="bi bi-person-badge"></i>
                  </button>
                </div>
                <div className="col-11 d-flex justify-content-between">
                  <p className="m-0">{`${doctor.name} ${doctor.last_name}`}</p>
                  <p className="m-0">{doctor.email}</p>
                </div>
              </div>
            );
          })}
        </PersonnelContainer>
      )}
    </div>
  );
};

export default PersonnelList;
