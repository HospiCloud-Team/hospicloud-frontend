import LandingLayout from "../../layout/LandingLayout";
import { MultiBg, FixedBox, Icon, ContainerDiv, LoginTitle} from "./style/index.style";
import HospiCloudLogo from '../../resources/HospiCloudLogo.svg'
import {testRequest, registerPatient} from '../../api/users/index';
import { useState } from "react";

const RegisterPage = () => {
  const [documentType, setDocumentType] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [bloodyType, setBloodType] = useState('');
  const [medicalBackground, setMedicalBackground] = useState('');

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox>
                <div className="w-100 h-100">
                  <ContainerDiv>
                    <div className="row d-flex h-100">
                      <div className="col-5">
                        <Icon className="mx-auto align-middle h-100" src={HospiCloudLogo} alt="Logo"/>
                      </div>
                      <div className="col-7 h-100">
                        <div className="row d-flex h-100 align-items-center m-2 pt-5">
                          <form className="d-flex flex-column w-100 pe-3">
                            <LoginTitle>Register</LoginTitle>
                            <div className="d-flex flex-row w-100">
                              <div className="form-group d-flex justify-content-start mb-2 me-1 w-50">
                                <input type="text" className="form-control" placeholder="Nombre"/>
                              </div>
                              <div className="form-group d-flex justify-content-start mb-2 w-50">
                                <input type="text" className="form-control" placeholder="Apellido"/>
                              </div>
                            </div>
                            <div className="form-group d-flex justify-content-start mb-2">
                              <input type="text" className="form-control" placeholder="Correo Electrónico"/>
                            </div>
                            <div className="d-flex flex-row w-100">
                              <select className="form-select d-flex justify-content-start mb-2 me-1 w-50" aria-label="Document Type" >
                                <option selected>Tipo de Documento</option>
                                <option value="1">Cédula</option>
                                <option value="2">Pasaporte</option>
                              </select>
                              <div className="form-group d-flex justify-content-start mb-2 w-50">
                                <input type="text" className="form-control" placeholder="Número de documento"/>
                              </div>
                            </div>
                            <div className="form-group d-flex justify-content-start mb-2">
                              <input type="date" className="form-control"/>
                            </div>
                            <select className="form-select mb-2" aria-label="Bloody Type">
                              <option selected>Tipo de Sangre</option>
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
                              <textarea className="form-control" placeholder="Antecedentes Médicos"></textarea>
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
