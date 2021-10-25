import LandingLayout from "../../../layout/LandingLayout";
import { MultiBg, FixedBox, Icon, ContainerDiv, LoginTitle} from "./style/index.style";
import HospiCloudLogo from '../../../resources/HospiCloudLogo.svg';
import {registerAdmin} from '../../../api/users/index';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import DocumentType from './document-type.json';
import { IAdmin } from "../../../models/IAdmin";

const RegisterAdmin = () => {
    const { register, handleSubmit, reset} = useForm({
    defaultValues: {
      document_type: '',
      name: '',
      last_name: '',
      email: '',
      document_number: '',
      date_of_birth: new Date(),
      admin: {
        hospital_id: 0,
      }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      // This would be a GET call to an endpoint
      reset({
        document_type: 'Tipo de Documento',
      });
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (data: any) => {
    console.log(data);
    try{
      const adminData : IAdmin = {
        user_role: 'admin',
        document_type: data.document_type, 
        name: data.name, 
        last_name: data.last_name,
        email: data.email, 
        document_number: data.document_number, 
        date_of_birth: data.date_of_birth, 
        admin: {
          hospital_id: data.admin?.hospital_id,
        }
      }

      registerAdmin(adminData);
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
                            <form className="d-flex flex-column w-100 pe-3">
                              <LoginTitle>Register Admin</LoginTitle>
                              <div className="d-flex flex-row w-100">
                                <div className="form-group d-flex justify-content-start mb-2 me-1 w-50">
                                  <input type="text" className="form-control" placeholder="Nombre" {...register("name", {required: true})}/>
                                </div>
                                <div className="form-group d-flex justify-content-start mb-2 w-50">
                                  <input type="text" className="form-control" placeholder="Apellido" {...register("last_name", {required: true})}/>
                                </div>
                              </div>
                              <div className="form-group d-flex justify-content-start mb-2">
                                <input type="text" className="form-control" placeholder="Correo Electrónico" {...register("email", {required: true})}/>
                              </div>
                              <div className="d-flex flex-row w-100">
                                <select className="form-select d-flex justify-content-start mb-2 me-1 w-50" {...register("document_type", {required: true})}>
                                    {DocumentType.map(option => (
                                      <option key={option.id} value={option.id} disabled={option.isDisabled}>
                                        {option.value}
                                      </option>
                                    ))}
                                </select>
                                <div className="form-group d-flex justify-content-start mb-2 w-50">
                                  <input type="text" className="form-control" placeholder="Número de documento" {...register("document_number", {required: true})}/>
                                </div>
                              </div>
                              <div className="form-group d-flex justify-content-start mb-2">
                                <input type="date" className="form-control" {...register("date_of_birth", {required: true})}/>
                              </div>
                              <div className="form-group mb-4">
                                <input className="form-control" placeholder="Hospital" {...register("admin.hospital_id")}></input>
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

export default RegisterAdmin;