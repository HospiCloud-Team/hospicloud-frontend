import LandingLayout from "../../layout/LandingLayout";
import {
  MultiBg,
  FixedBox,
  Icon,
  LoginTitle,
} from "../../layout/RegisterAndLoginLayout";
import HospiCloudLogo from "../../resources/HospiCloudLogo.svg";
import { useHistory } from "react-router";
import routes from "../../router/constantRoutes.json";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, getIdTokenResult } from "firebase/auth";
import auth from "../../firebase";
import { useForm } from "react-hook-form";
import { IAuthUser } from "../../models/IUser";

const LoginPage = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<IAuthUser>();

  const onSubmit = handleSubmit(({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
      getIdTokenResult(user).then((tokenRes) => {
        const role = tokenRes.claims.role as string | undefined;
        localStorage.setItem("authToken", tokenRes.token);
        localStorage.setItem("userRole", role ?? "");
        localStorage.setItem("doctorId", "1");
        localStorage.setItem("patientId", "1");
        localStorage.setItem("hospitalId", "1");
        history.push(routes.HOME);
      })
    );
  });

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox width="50" height="30">
          <div className="row my-auto w-100">
            <div className="col d-flex">
              <Icon className="mx-auto" src={HospiCloudLogo} alt="Logo" />
            </div>
            <div className="col d-block">
              <LoginTitle className="d-flex justify-content-center mb-3">
                Login
              </LoginTitle>
              <form onSubmit={onSubmit}>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    {...register("email")}
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>
                <div className="form-group d-flex justify-content-between mb-3">
                  <Link to="/ForgetPassword">Olvidaste tu contraseña</Link>
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </div>
                <div className="form-group d-flex justify-content-end">
                  <Link to="/Register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </FixedBox>
      </MultiBg>
    </LandingLayout>
  );
};

export default LoginPage;
