import { Route, Redirect, RouteProps } from "react-router-dom";
import routes from "./constantRoutes.json";

const PrivateRoute = ({ children, ...rest }: RouteProps<string>) => {
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("authToken") ? (
          children
        ) : (
          <Redirect to={routes.HOME} />
        );
      }}
    />
  );
};

export default PrivateRoute;
