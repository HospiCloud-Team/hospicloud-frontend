import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import routes from "../router/constantRoutes.json";
import { ReactComponent as LongLogo } from "../resources/longLogo.svg";
import { useState } from "react";

const Header = styled.nav`
  background-color: #e1e6f0;
  padding-bottom: 0.5rem;
`;

interface DashboardHeaderProps {
  userRole: string;
  userId?: string;
}

const DashboardHeader = ({ userRole, userId }: DashboardHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Header>
      <div className="container-fluid container-md d-block d-sm-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link to={routes.HOME}>
            <LongLogo />
          </Link>
          <h5 className="m-0">- {userRole}</h5>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={toggleOpen}
          >
            Dropdown button
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link
              className="dropdown-item"
              to={{ pathname: `/admin/admin-detalle/${userId as string}` }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Perfil
            </Link>
            <Link
              className="dropdown-item"
              to={routes.HOME}
              onClick={() => {
                localStorage.clear();
              }}
            >
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DashboardHeader;
