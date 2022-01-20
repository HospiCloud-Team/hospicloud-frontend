import { INewAdmin, IUpdateAdmin } from "../../models/IAdmin";
import { INewDoctor, IUpdateDoctor } from "../../models/IDoctor";
import { INewPatient, IUpdatePatient } from "../../models/IPatient";
import { UsersAPI } from "../hospicloudAPI";
import auth from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import routes from "../../router/constantRoutes.json";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email, { url: routes.LOGIN })
    .then(() => {
      alert("Su correo de restablecimiento de contraseña ha sido enviado");
    })
    .catch((error) => {
      return error;
    });
};

const getParticularUser = (userId: string) => {
  return UsersAPI.get(`/users/${userId}`);
};

const updateParticularDoctor = (userId: string, doctorData: IUpdateDoctor) => {
  return UsersAPI.put(`/users/${userId}`, doctorData);
};

const updateParticularAdmin = (userId: string, adminData: IUpdateAdmin) => {
  return UsersAPI.put(`/users/${userId}`, adminData);
};

const updateParticularPatient = (
  userId: string,
  patientData: IUpdatePatient
) => {
  return UsersAPI.put(`/users/${userId}`, patientData);
};

const registerPatient = (patientData: INewPatient) => {
  return UsersAPI.post("/users", patientData);
};

const registerAdmin = (adminData: INewAdmin) => {
  return UsersAPI.post("/users", adminData);
};

const registerDoctor = (doctorData: INewDoctor) => {
  return UsersAPI.post("/users", doctorData);
};

export {
  resetPassword,
  login,
  registerPatient,
  registerAdmin,
  registerDoctor,
  getParticularUser,
  updateParticularDoctor,
  updateParticularAdmin,
  updateParticularPatient,
};
