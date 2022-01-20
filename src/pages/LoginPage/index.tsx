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
import { ErrorMessage } from "../../components";
import { getParticularUser } from "../../api/users";
import { storeUserData } from "../../utils/storeUserData";

const LoginPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IAuthUser>();

  const onSubmit = handleSubmit(({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>
        getIdTokenResult(user).then((tokenRes) => {
          const userId = tokenRes.claims.id as string;
          localStorage.setItem("authToken", tokenRes.token);
          getParticularUser(userId).then((userData) => {
            storeUserData(userData.data);
            history.push(routes.HOME);
          });
        })
      )
      .catch(() =>
        setError("loginError", {
          type: "login",
          message: "El correo electrónico y la contraseña no coinciden",
        })
      );
  });

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox width="50" height="30">
          <div className="row my-auto w-100">
            <div className="col d-flex align-items-center">
              <Icon className="mx-auto" src={HospiCloudLogo} alt="Logo" />
            </div>
            <div className="col d-block">
              <LoginTitle className="d-flex justify-content-center mb-3">
                Iniciar Sesión
              </LoginTitle>
              <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Correo Electrónico"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <ErrorMessage message="Correo electrónico es requerido" />
                  )}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <ErrorMessage message="Contraseña es requerida" />
                  )}
                </div>
                {errors.loginError && (
                  <div className="mb-4 d-flex justify-content-center">
                    <ErrorMessage
                      message={errors.loginError.message as string}
                    />
                  </div>
                )}
                <div className="form-group d-flex justify-content-between mb-3">
                  <Link to="/contraseña/reestablecer">
                    Olvidaste tu contraseña
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </div>
                <div className="form-group d-flex justify-content-end">
                  <Link to={routes.REGISTER}>Regístrate</Link>
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
