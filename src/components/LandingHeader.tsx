import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as LongLogo } from "../resources/longLogo.svg";
import routes from "../router/constantRoutes.json";
import roles from "../constants/constantsRoles.json";

const Header = styled.nav`
  background-color: #e1e6f0;
  padding-bottom: 0.5rem;
`;

const LandingHeader = () => {
  const history = useHistory();

  const userRole: string | null = localStorage.getItem("userRole") ?? null;

  return (
    <Header>
      <div className="container-fluid container-md d-block d-sm-flex justify-content-between align-items-center">
        <Link to={routes.HOME}>
          <LongLogo />
        </Link>
        {localStorage.getItem("authToken") ? (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              if (userRole === roles.PATIENT) history.push(routes.PATIENT);
              else if (userRole === roles.DOCTOR) history.push(routes.DOCTOR);
              else if (userRole === roles.ADMIN) history.push(routes.ADMIN);
            }}
          >
            Ir a perfil de {userRole}
          </button>
        ) : (
          <div>
            <button className="btn btn-outline-primary btn-sm me-2">
              Registra tu hospital
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => history.push(routes.LOGIN)}
            >
              Iniciar Sesion / Registrate
            </button>
          </div>
        )}
      </div>
    </Header>
  );
};

export default LandingHeader;
