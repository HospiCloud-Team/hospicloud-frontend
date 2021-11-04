import { Switch, Route } from "react-router-dom";
import routes from "./constantRoutes.json";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HospitalDetail from "../pages/HospitalDetail";
import RegisterAdmin from "../pages/RegisterHospitalAndAdmin/RegisterAdminPage";
import RegisterHospital from "../pages/RegisterHospitalAndAdmin/RegisterHospitalPage";
import HospitalProvider from "../pages/RegisterHospitalAndAdmin/context/context";

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
        <RegisterHospital />
      </Route>
      <HospitalProvider>
        <Route path={routes.REGISTER_ADMIN} exact>
          <RegisterAdmin />
        </Route>
        <Route path={`${routes.HOSPITALS}/:id`}>
          <HospitalDetail />
        </Route>
      </HospitalProvider>
    </Switch>
  );
};

export default Routes;
