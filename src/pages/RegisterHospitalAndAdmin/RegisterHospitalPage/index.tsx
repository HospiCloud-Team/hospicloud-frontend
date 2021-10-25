import LandingLayout from "../../../layout/LandingLayout";
import { MultiBg, FixedBox, Icon, ContainerDiv, LoginTitle} from "./style/index.style";
import HospiCloudLogo from '../../../resources/HospiCloudLogo.svg';
import {registerAdmin} from '../../../api/users/index';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import routes from "../../../router/constantRoutes.json";

const RegisterHospital = () => {
    const history = useHistory();

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
      const res = await registerAdmin(data.document_type, data.name, data.last_name, data.email, data.document_number, data.date_of_birth, data.admin);
      console.log(res.data);
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
                      <button onClick={() => {history.push(`${routes.REGISTER_HOSPITAL}/admin`)}}>Ir a Register Admin Page</button>
                </ContainerDiv>
              </div>
        </FixedBox>
      </MultiBg>
    </LandingLayout>
  );
};

export default RegisterHospital;
