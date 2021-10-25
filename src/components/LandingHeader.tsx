import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as LongLogo } from "../resources/longLogo.svg";
import routes from "../router/constantRoutes.json";

const Header = styled.nav`
  background-color: #e1e6f0;
  padding-bottom: 0.5rem;
`;

const LandingHeader = () => {
  const history = useHistory();
  return (
    <Header>
      <div className="container-fluid container-md d-block d-sm-flex justify-content-between align-items-center">
        <Link to={routes.HOME}>
          <LongLogo />
        </Link>
        <div>
          <button 
            className="btn btn-outline-primary btn-sm me-2"
            onClick={() => history.push(routes.REGISTER_HOSPITAL)}>
            Registra tu hospital
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => history.push(routes.LOGIN)}
          >
            Iniciar Sesion / Registrate
          </button>
        </div>
      </div>
    </Header>
  );
};

export default LandingHeader;
