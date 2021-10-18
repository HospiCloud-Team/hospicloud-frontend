import styled from "@emotion/styled";
import { useHistory } from "react-router";
import routes from "../router/constantRoutes.json";

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
        <h5>Dashboard - {userRole}</h5>
        <button
          className="btn btn-outline-primary btn-sm me-2"
          onClick={() => history.push(routes.HOME)}
        >
          Regresar a inicio
        </button>
      </div>
    </Header>
  );
};

export default DashboardHeader;
