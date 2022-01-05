import { IAdmin } from "../models/IAdmin";
import { IDoctor } from "../models/IDoctor";
import { IPatient } from "../models/IPatient";

const storeUserData = (userData: IDoctor | IPatient | IAdmin) => {
  if (userData.user_role === "admin") {
    localStorage.setItem("adminId", `${userData.admin.id}`);
    localStorage.setItem("hospitalId", `${userData.admin.hospital_id}`);
  }
  if (userData.user_role === "doctor") {
    localStorage.setItem("doctorId", `${userData.doctor.id}`);
    localStorage.setItem("hospitalId", `${userData.doctor.hospital_id}`);
  }
  if (userData.user_role === "patient") {
    localStorage.setItem("patientId", `${userData.patient.id}`);
  }

  localStorage.setItem("userId", `${userData.id}`);
  localStorage.setItem("userRole", userData.user_role);
};

export { storeUserData };
