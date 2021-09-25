import { Switch, Route } from "react-router-dom";
import routes from "./constantRoutes.json";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div>Main page</div>
      </Route>
      <Route path={routes.LOGIN}>
        <div>Login</div>
      </Route>
    </Switch>
  );
};

export default Routes;
