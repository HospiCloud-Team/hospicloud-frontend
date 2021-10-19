import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import routes from "../router/constantRoutes.json";
import { ReactComponent as LongLogo } from "../resources/longLogo.svg";

const Header = styled.nav`
  background-color: #e1e6f0;
  padding-bottom: 0.5rem;
`;

interface DashboardHeaderProps {
  userRole: string;
}

const DashboardHeader = ({ userRole }: DashboardHeaderProps) => {
  const history = useHistory();
  return (
    <Header>
      <div className="container-fluid container-md d-block d-sm-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link to={routes.HOME}>
            <LongLogo />
          </Link>
          <h5 className="m-0">- {userRole}</h5>
        </div>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => history.push(routes.HOME)}
        >
          Cerrar sesión
        </button>
      </div>
    </Header>
  );
};

export default DashboardHeader;
