import LandingLayout from "../../../layout/LandingLayout";
import { MultiBg, FixedBox, ContainerDiv } from "./style/index.style";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import routes from "../../../router/constantRoutes.json";

const RegisterHospital = () => {
  const history = useHistory();

  const { reset } = useForm({
    defaultValues: {
      document_type: "",
      name: "",
      last_name: "",
      email: "",
      document_number: "",
      date_of_birth: new Date(),
      admin: {
        hospital_id: 0,
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      // This would be a GET call to an endpoint
      reset({
        document_type: "Tipo de Documento",
      });
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (data: any) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox>
          <div className="w-100 h-100">
            <ContainerDiv>
              <button
                onClick={() => {
                  history.push(`${routes.REGISTER_HOSPITAL}/admin`);
                }}
              >
                Ir a Register Admin Page
              </button>
            </ContainerDiv>
          </div>
        </FixedBox>
      </MultiBg>
    </LandingLayout>
  );
};

export default RegisterHospital;
