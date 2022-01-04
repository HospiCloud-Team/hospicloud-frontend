import { Link, useHistory } from "react-router-dom";
import routes from "../../router/constantRoutes.json";
import { ReactComponent as LongLogo } from "../../resources/longLogo.svg";
import styled from "@emotion/styled";
import { ConfirmationModal } from "../../components/ConfirmationModal";

const Header = styled.nav`
  background-color: #e1e6f0;
  padding-bottom: 0.5rem;
`;

const ResetPasswordPage = () => {
  let history = useHistory();
  return (
    <div>
      <Header>
        <div className="container-fluid container-md d-block d-sm-flex justify-content-between align-items-center">
          <Link to={routes.HOME}>
            <LongLogo />
          </Link>
        </div>
      </Header>
      <ConfirmationModal
        title="Olvidaste tu contraseña?"
        state={true}
        additionalCloseMethod={() => {
          history.push(`/login`);
        }}
        button1Text="Cancelar"
        button2Text="Enviar"
      >
        <input></input>
      </ConfirmationModal>
    </div>
  );
};

export default ResetPasswordPage;
