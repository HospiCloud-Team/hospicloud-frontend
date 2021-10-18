import { Switch, Route } from "react-router-dom";
import routes from "./constantRoutes.json";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import HospitalDetail from "../pages/HospitalDetail";
import PrivateRoute from "./PrivateRoute";
import DashboardPatient from "../pages/DashboardPatient";
import DashboardDoctor from "../pages/DashboardDoctor";
import DashboardAdmin from "../pages/DashboardAdmin";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path={routes.LOGIN}>
        <LoginPage />
      </Route>
      <Route path={`${routes.HOSPITALS}/:id`}>
        <HospitalDetail />
      </Route>
      <PrivateRoute path={routes.PATIENT}>
        <DashboardPatient />
      </PrivateRoute>
      <PrivateRoute path={routes.DOCTOR}>
        <DashboardDoctor />
      </PrivateRoute>
      <PrivateRoute path={routes.ADMIN}>
        <DashboardAdmin />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
