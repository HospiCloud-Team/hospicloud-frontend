import LandingLayout from "../../layout/LandingLayout";
import { MultiBg, FixedBox, Icon, ContainerDiv, LoginTitle} from "./style/index.style";
import HospiCloudLogo from '../../resources/HospiCloudLogo.svg'
import {registerPatient} from '../../api/users/index';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import DocumentType from './document-type.json';
import BloodyType from './blood-type.json';

const RegisterPage = () => {
    const { register, handleSubmit, reset } = useForm({
    defaultValues: {
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
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      // This would be a GET call to an endpoint
      reset({
        userDocumentType: 'Tipo de Documento',
        patient: {
          blood_type: 'Tipo de Sangre',
          medical_background: '',
        }
      });
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (data: any) => {
    try{
      const res = await registerPatient(data.userDocumentNumber, data.userName, data.userLastName, data.userEmail, data.userDocumentNumber, data.userDateOfBirth, data.patient);
      console.log(res.data.patient);
    } catch (err){
      console.log(err);
    }
  }

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox>
                <div className="w-100 h-100">
                  <ContainerDiv>
                      <div className="row d-flex h-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-5">
                          <Icon className="mx-auto align-middle h-100" src={HospiCloudLogo} alt="Logo"/>
                        </div>
                        <div className="col-7 h-100">
                          <div className="row d-flex h-100 align-items-center m-2 pt-5">
                            <form className="d-flex flex-column w-100 pe-3" onSubmit={handleSubmit(onSubmit)}>
                              <LoginTitle>Register</LoginTitle>
                              <div className="d-flex flex-row w-100">
                                <div className="form-group d-flex justify-content-start mb-2 me-1 w-50">
                                  <input type="text" className="form-control" placeholder="Nombre" {...register("userName")}/>
                                </div>
                                <div className="form-group d-flex justify-content-start mb-2 w-50">
                                  <input type="text" className="form-control" placeholder="Apellido" {...register("userLastName")}/>
                                </div>
                              </div>
                              <div className="form-group d-flex justify-content-start mb-2">
                                <input type="text" className="form-control" placeholder="Correo Electrónico" {...register("userEmail")}/>
                              </div>
                              <div className="d-flex flex-row w-100">
                                <select className="form-select d-flex justify-content-start mb-2 me-1 w-50" {...register("userDocumentType")}>
                                    {DocumentType.map(option => (
                                      <option key={option.id} value={option.id} disabled={option.isDisabled}>
                                        {option.value}
                                      </option>
                                    ))}
                                </select>
                                <div className="form-group d-flex justify-content-start mb-2 w-50">
                                  <input type="text" className="form-control" placeholder="Número de documento" {...register("userDocumentNumber")}/>
                                </div>
                              </div>
                              <div className="form-group d-flex justify-content-start mb-2">
                                <input type="date" className="form-control" {...register("userDateOfBirth")}/>
                              </div>
                              <select className="form-select mb-2" aria-label="Bloody Type" {...register("patient.blood_type")}>
                                {BloodyType.map(option => (
                                  <option key={option.id} value={option.id} disabled={option.isDisabled}>
                                    {option.value}
                                  </option>
                                ))}
                              </select>
                              <div className="form-group mb-4">
                                <textarea className="form-control" placeholder="Antecedentes Médicos" {...register("patient.medical_background")}></textarea>
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
