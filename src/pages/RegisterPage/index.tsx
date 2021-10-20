import LandingLayout from "../../layout/LandingLayout";
import { MultiBg, FixedBox, Icon, ContainerDiv, LoginTitle} from "./style/index.style";
import HospiCloudLogo from '../../resources/HospiCloudLogo.svg'
import {testRequest, registerPatient} from '../../api/users/index';

const RegisterPage = () => {
    console.log(testRequest());
  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox>
                <div className="card-block my-5 py-2">
                  <ContainerDiv>
                    <div className="row my-auto">
                      <div className="col d-block">
                        <Icon className="mx-auto" src={HospiCloudLogo} alt="Logo"/>
                      </div>
                      <div className="col d-block m-3">
                        <LoginTitle className="d-flex justify-content-start mb-3">Register</LoginTitle>
                        <form>
                          <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group mb-4">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group d-flex justify-content-between mb-3">
                                <a href="/ForgetPassword">Olvidaste tu contraseña</a>
                                <button type="submit" className="btn btn-primary ">Iniciar Sesion</button>
                            </div>
                            <div className="form-group d-flex justify-content-end">
                                <a href="/Register">Register</a>
                            </div>
                        </form>
                      </div>
                    </div>
                </ContainerDiv>
              </div>
        </FixedBox>
      </MultiBg>
    </LandingLayout>
  );
};

export default RegisterPage;
