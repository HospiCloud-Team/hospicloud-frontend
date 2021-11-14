import LandingLayout from "../../layout/LandingLayout";
import {
  MultiBg,
  FixedBoxLogin,
  Icon,
  LoginTitle,
} from "../../layout/RegisterAndLoginLayout";
import HospiCloudLogo from "../../resources/HospiCloudLogo.svg";
import { useHistory } from "react-router";
import routes from "../../router/constantRoutes.json";

const LoginPage = () => {
  const history = useHistory();
  return (
    <LandingLayout>
      <MultiBg>
        <FixedBoxLogin>
          <div className="row my-auto w-100">
            <div className="col d-flex">
              <Icon className="mx-auto" src={HospiCloudLogo} alt="Logo" />
            </div>
            <div className="col d-block">
              <LoginTitle className="d-flex justify-content-center mb-3">
                Login
              </LoginTitle>
              <form>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group d-flex justify-content-between mb-3">
                  <a href="/ForgetPassword">Olvidaste tu contraseña</a>
                  <button
                    onClick={() => {
                      localStorage.setItem("authToken", "123");
                      localStorage.setItem("userRole", "doctor");
                      localStorage.setItem("doctorId", "1");
                      history.push(routes.HOME);
                    }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Iniciar Sesión
                  </button>
                </div>
                <div className="form-group d-flex justify-content-end">
                  <a href="/Register">Register</a>
                </div>
              </form>
            </div>
          </div>
        </FixedBoxLogin>
      </MultiBg>
    </LandingLayout>
  );
};

export default LoginPage;
