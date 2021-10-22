import LandingLayout from "../../layout/LandingLayout";
import { MultiBg, FixedBox, Icon, ContainerDiv, LoginTitle} from "./style/index.style";
import HospiCloudLogo from '../../resources/HospiCloudLogo.svg'
import {testRequest, registerPatient} from '../../api/users/index';
import { useEffect, useState } from "react";
import { stringify } from "querystring";
import axios from "axios";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    userDocumentType: '',
    userName: '',
    userLastName: '',
    userEmail: '',
    userDocumentNumber: '',
    userDateOfBirth: new Date(),
    patient: {
      blood_type: '',
      medical_background: '',
    }
  });

  const {userDocumentType, userName, userLastName, userEmail, userDocumentNumber, userDateOfBirth, patient: {blood_type, medical_background}} = userData;

  const onChange = (e:any) => setUserData({ ...userData, [e.target.name]: e.target.value});

  const onSubmit = async (e:any) => {
    e.preventDefault();
    const newUserData = {
      userDocumentType,
      userName,
      userLastName,
      userEmail,
      userDocumentNumber,
      userDateOfBirth,
      patient: {
        blood_type,
        medical_background,
      }
    };
    try{
      const res = await registerPatient(newUserData.userDocumentNumber, newUserData.userName, newUserData.userLastName, newUserData.userEmail, newUserData.userDocumentNumber, newUserData.userDateOfBirth, newUserData.patient);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getResponse(){
      const data = await testRequest();
      console.log(data.data[0]);
    }

    getResponse();
  }, [])

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox>
                <div className="w-100 h-100">
                  <ContainerDiv>
                    <div className="row d-flex h-100" onSubmit={(e) => onSubmit(e)}>
                      <div className="col-5">
                        <Icon className="mx-auto align-middle h-100" src={HospiCloudLogo} alt="Logo"/>
                      </div>
                      <div className="col-7 h-100">
                        <div className="row d-flex h-100 align-items-center m-2 pt-5">
                          <form className="d-flex flex-column w-100 pe-3">
                            <LoginTitle>Register</LoginTitle>
                            <div className="d-flex flex-row w-100">
                              <div className="form-group d-flex justify-content-start mb-2 me-1 w-50">
                                <input type="text" className="form-control" placeholder="Nombre" name="userName" value={userName} onChange={onChange} />
                              </div>
                              <div className="form-group d-flex justify-content-start mb-2 w-50">
                                <input type="text" className="form-control" placeholder="Apellido" name="userLastName" value={userLastName} onChange={onChange} />
                              </div>
                            </div>
                            <div className="form-group d-flex justify-content-start mb-2">
                              <input type="text" className="form-control" placeholder="Correo Electrónico" name="userEmail" value={userEmail} onChange={onChange}/>
                            </div>
                            <div className="d-flex flex-row w-100">
                              <select className="form-select d-flex justify-content-start mb-2 me-1 w-50" aria-label="Document Type" name="userDocumentType" value={userDocumentType} onChange={onChange}>
                                <option>Tipo de Documento</option>
                                <option value="1">Cédula</option>
                                <option value="2">Pasaporte</option>
                              </select>
                              <div className="form-group d-flex justify-content-start mb-2 w-50">
                                <input type="text" className="form-control" placeholder="Número de documento" name="userDocumentNumber" value={userDocumentNumber} onChange={onChange}/>
                              </div>
                            </div>
                            <div className="form-group d-flex justify-content-start mb-2">
                              <input type="date" className="form-control" name="userDateOfBirth" onChange={onChange}/>
                            </div>
                            <select className="form-select mb-2" aria-label="Bloody Type" name="blood_type" value={blood_type} onChange={onChange}>
                              <option>Tipo de Sangre</option>
                              <option value="1">A+</option>
                              <option value="2">A-</option>
                              <option value="3">B+</option>
                              <option value="4">B-</option>
                              <option value="5">O+</option>
                              <option value="6">O-</option>
                              <option value="7">AB+</option>
                              <option value="8">AB-</option>
                            </select>
                            <div className="form-group mb-4">
                              <input className="form-control" placeholder="Antecedentes Médicos" name="medical_background" value = {medical_background} onChange={onChange}></input>
                            </div>
                            <div className="form-group d-flex justify-content-end mb-3">
                              <button type="submit" className="btn btn-primary ">Registrar</button>
                            </div>
                          </form>
                        </div>
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
