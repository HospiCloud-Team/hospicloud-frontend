import { Switch, Route } from "react-router-dom";
import routes from "./constantRoutes.json";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HospitalDetail from "../pages/HospitalDetail";
import PrivateRoute from "./PrivateRoute";
import DashboardPatient from "../pages/DashboardPatient";
import DashboardDoctor from "../pages/DashboardDoctor";
import DashboardAdmin from "../pages/DashboardAdmin";
import RegisterAdmin from "../pages/RegisterHospitalAndAdmin/RegisterAdminPage";
import RegisterHospital from "../pages/RegisterHospitalAndAdmin/RegisterHospitalPage";
import HospitalProvider from "../pages/RegisterHospitalAndAdmin/context/context";
import ResetPasswordPage from "../pages/ResetPasswordPage";
const Routes = () => {
  return (
    <HospitalProvider>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path={routes.RESET_PASSWORD}>
          <ResetPasswordPage />
        </Route>
        <Route path={routes.LOGIN}>
          <LoginPage />
        </Route>
        <Route path={routes.REGISTER}>
          <RegisterPage />
        </Route>
        <Route path={routes.REGISTER_HOSPITAL} exact>
          <RegisterHospital />
        </Route>
        <Route path={routes.REGISTER_ADMIN} exact>
          <RegisterAdmin />
        </Route>
        <Route path={`${routes.HOSPITALS}/:id`}>
          <HospitalDetail />
        </Route>

        <PrivateRoute path={routes.PATIENT} exact>
          <DashboardPatient content="CheckupsList" />
        </PrivateRoute>
        <PrivateRoute path={`${routes.PATIENT_CHECKUPS}/:id`}>
          <DashboardPatient content="CheckupDetail" />
        </PrivateRoute>
        <PrivateRoute path={routes.PATIENT_PROFILE} exact>
          <DashboardPatient content="PatientProfile" />
        </PrivateRoute>
        <PrivateRoute path={routes.PATIENT_DOCTORS_LIST} exact>
          <DashboardPatient content="DoctorsList" />
        </PrivateRoute>
        <PrivateRoute path={routes.PATIENT_DOCTOR_RECORD} exact>
          <DashboardPatient content="DoctorRecord" />
        </PrivateRoute>

        <PrivateRoute path={routes.DOCTOR} exact>
          <DashboardDoctor content="CheckupsList" />
        </PrivateRoute>
        <PrivateRoute path={routes.DOCTOR_NEW_CHECKUP}>
          <DashboardDoctor content="AddCheckup" />
        </PrivateRoute>
        <PrivateRoute path={`${routes.DOCTOR_CHECKUPS}/:id`}>
          <DashboardDoctor content="CheckupDetail" />
        </PrivateRoute>
        <PrivateRoute path={routes.DOCTOR_PROFILE} exact>
          <DashboardDoctor content="DoctorProfile" />
        </PrivateRoute>
        <PrivateRoute path={routes.DOCTOR_PATIENTS_LIST} exact>
          <DashboardDoctor content="PatientsList" />
        </PrivateRoute>
        <PrivateRoute path={routes.DOCTOR_PATIENT_RECORD} exact>
          <DashboardDoctor content="PatientRecord" />
        </PrivateRoute>

        <PrivateRoute path={routes.ADMIN} exact>
          <DashboardAdmin content="ManageHospital" />
        </PrivateRoute>
        <PrivateRoute path={routes.ADMIN_TEMPLATES} exact>
          <DashboardAdmin content="TemplatesList" />
        </PrivateRoute>
        <PrivateRoute path={routes.ADMIN_NEW_TEMPLATE}>
          <DashboardAdmin content="AddTemplate" />
        </PrivateRoute>
        <PrivateRoute path={`${routes.ADMIN_TEMPLATES}/:id/editar`}>
          <DashboardAdmin content="EditTemplate" />
        </PrivateRoute>
        <PrivateRoute path={routes.PERSONNEL_LIST} exact>
          <DashboardAdmin content="PersonnelList" />
        </PrivateRoute>
        <PrivateRoute path={routes.REGISTER_ADMIN_PERSONNEL} exact>
          <DashboardAdmin content="AddAdminPersonnel" />
        </PrivateRoute>
        <PrivateRoute path={routes.REGISTER_DOCTOR_PERSONNEL} exact>
          <DashboardAdmin content="AddDoctorPersonnel" />
        </PrivateRoute>
        <PrivateRoute path={routes.PERSONNEL_DOCTOR_DETAIL} exact>
          <DashboardAdmin content="PersonnelDoctorDetail" />
        </PrivateRoute>
        <PrivateRoute path={routes.PERSONNEL_ADMIN_DETAIL} exact>
          <DashboardAdmin content="PersonnelAdminDetail" />
        </PrivateRoute>
        <PrivateRoute path={routes.HOSPITAL_DETAIL} exact>
          <DashboardAdmin content="HospitalDetail" />
        </PrivateRoute>
        <PrivateRoute path={routes.ADMIN_PROFILE} exact>
          <DashboardAdmin content="AdminProfile" />
        </PrivateRoute>
      </Switch>
    </HospitalProvider>
  );
};

export default Routes;
