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
const PersonnelList = () => {
  const [admins, setAdmins] = useState<IAdmin[]>([]);
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [isAdminList, setIsAdminList] = useState<boolean>(true);
  const [isDocotrList, setIsDoctorList] = useState<boolean>(false);
  let history = useHistory();

  const handleAdminListClick = () => {
    setIsDoctorList(false);
    setIsAdminList(true);
  };

  const handleDoctorListClick = () => {
    setIsAdminList(false);
    setIsDoctorList(true);
  };

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
      <div className="d-flex flex-row w-100 justify-content-around">
        <button className="btn btn-secondary" onClick={handleAdminListClick}>
          Administradores
        </button>
        <button className="btn btn-secondary" onClick={handleDoctorListClick}>
          Doctores
        </button>
      </div>
      {isAdminList && (
        <PersonnelContainer>
          <div className="d-flex flex-column w-100">
            <div className="d-flex flex-row align-items-center">
              <Title>Admins</Title>
              <div className="w-100 d-flex justify-content-end">
                <AddButton
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    history.push(routes.REGISTER_ADMIN_PERSONNEL);
                  }}
                >
                  <div className="buttonText">+</div>
                  <div className="TextAfterHover">+ Agregar Admin</div>
                </AddButton>
              </div>
            </div>
            <Border />
          </div>
          {admins.map((admin) => {
            return (
              <div className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative">
                <div className="col-1 border-end">
                  <button className="btn btn-primary btn-sm stretched-link">
                    <i className="bi bi-person-badge"></i>
                  </button>
                </div>
                <div className="col-11 d-flex justify-content-between">
                  <p className="m-0">{admin.name}</p>
                  <p className="m-0">{admin.email}</p>
                </div>
              </div>
            );
          })}
        </PersonnelContainer>
      )}
      {isDocotrList && (
        <PersonnelContainer>
          <div className="d-flex flex-column w-100">
            <div className="d-flex flex-row align-items-center">
              <Title>Doctors</Title>
              <div className="w-100 d-flex justify-content-end">
                <AddButton
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    history.push(routes.REGISTER_DOCTOR_PERSONNEL);
                  }}
                >
                  <div className="buttonText">+</div>
                  <div className="TextAfterHover">+ Agregar Doctor</div>
                </AddButton>
              </div>
            </div>
            <Border />
          </div>
          {doctors.map((doctor) => {
            return (
              <div className="row bg-white mx-0 my-3 p-3 rounded-2 position-relative">
                <div className="col-1 border-end">
                  <button className="btn btn-primary btn-sm stretched-link">
                    <i className="bi bi-person-badge"></i>
                  </button>
                </div>
                <div className="col-11 d-flex justify-content-between">
                  <p className="m-0">{doctor.name}</p>
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
