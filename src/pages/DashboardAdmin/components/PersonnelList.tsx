import { useEffect, useState } from "react";
import {
  getAdminsByHospitalId,
  getDoctorsByHospitalId,
} from "../../../api/utilities";
import { IAdmin } from "../../../models/IAdmin";
import { IDoctor } from "../../../models/IDoctor";
import { PersonnelContainer } from "../styles/PersonnelList.style";

const PersonnelList = () => {
  const [admins, setAdmins] = useState<IAdmin[]>([]);
  const [doctors, setDoctors] = useState<IDoctor[]>([]);

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
      <PersonnelContainer>
        <h2>Admins</h2>
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
      <PersonnelContainer>
        <h2>Doctors</h2>
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
    </div>
  );
};

export default PersonnelList;
