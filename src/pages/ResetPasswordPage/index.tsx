import { Link, useHistory } from "react-router-dom";
import routes from "../../router/constantRoutes.json";
import { ReactComponent as LongLogo } from "../../resources/longLogo.svg";
import { FixedBox, MultiBg } from "../../layout/RegisterAndLoginLayout";
import { useForm } from "react-hook-form";
import { ButtonsContainer, CardTitle, Header } from "./style";
import { resetPassword } from "../../api/users/index";

const ResetPasswordPage = () => {
  let history = useHistory();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    resetPassword(data.email, window.location.origin + routes.LOGIN, "Su correo de restablecimiento de contraseña ha sido enviado");
  };

  return (
    <div>
      <Header>
        <div className="container-fluid container-md d-block d-sm-flex justify-content-between align-items-center">
          <Link to={routes.HOME}>
            <LongLogo />
          </Link>
        </div>
      </Header>
      <div className="container-fluid container-md my-4">
        <MultiBg>
          <FixedBox width="30" height="20" style={{ textAlign: "center" }}>
            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex border-bottom align-items-center h-25">
                <CardTitle>Olvidaste tu contraseña?</CardTitle>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center h-50 border-bottom">
                <p>
                  Digite su correo eléctronico y le enviaremos un enlace para
                  restablecer la contraseña de su cuenta.
                </p>
                <div className="d-flex flex-row justify-content-center w-75">
                  <div className="form-group input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      {...register("email")}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex h-25 align-items-center">
                <ButtonsContainer>
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => {
                      history.push(routes.LOGIN);
                    }}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary me-3">
                    Enviar
                  </button>
                </ButtonsContainer>
              </div>
            </form>
          </FixedBox>
        </MultiBg>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
