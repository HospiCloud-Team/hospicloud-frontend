import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { ReactComponent as LongLogo } from "../resources/longLogo.svg";
import routes from "../router/constantRoutes.json";

const Header = styled.nav`
  background-color: #e1e6f0;
`;

const LandingHeader = () => {
  const history = useHistory();
  return (
    <Header>
      <div className="container-fluid d-block d-sm-flex justify-content-between align-items-center">
        <LongLogo />
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
      </div>
    </Header>
  );
};

export default LandingHeader;
