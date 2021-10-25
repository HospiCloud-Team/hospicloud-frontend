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

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path={routes.LOGIN}>
        <LoginPage />
      </Route>
      <Route path={routes.REGISTER}>
        <RegisterPage />
      </Route>
      <Route path={routes.REGISTER_HOSPITAL} exact>
        <RegisterHospital/>
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
      <PrivateRoute path={routes.DOCTOR} exact>
        <DashboardDoctor content="CheckupsList" />
      </PrivateRoute>
      <PrivateRoute path={routes.DOCTOR_NEW_CHECKUP}>
        <DashboardDoctor content="AddCheckup" />
      </PrivateRoute>

      <PrivateRoute path={`${routes.DOCTOR_CHECKUPS}/:id`}>
        <DashboardDoctor content="CheckupDetail" />
      </PrivateRoute>
      <PrivateRoute path={routes.ADMIN}>
        <DashboardAdmin content="AddTemplate" />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
