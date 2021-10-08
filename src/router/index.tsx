import { Switch, Route } from "react-router-dom";
import routes from "./constantRoutes.json";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import HospitalDetail from "../pages/HospitalDetail";

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
    </Switch>
  );
};

export default Routes;
