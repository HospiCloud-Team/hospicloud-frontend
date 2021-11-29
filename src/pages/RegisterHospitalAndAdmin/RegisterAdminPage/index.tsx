import LandingLayout from "../../../layout/LandingLayout";
import {
  MultiBg,
  LoginTitle,
  FixedBox,
  Icon,
} from "../../../layout/RegisterAndLoginLayout";
import HospiCloudLogo from "../../../resources/HospiCloudLogo.svg";
import { registerAdmin } from "../../../api/users/index";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DocumentType from "./document-type.json";
import { INewAdmin } from "../../../models/IAdmin";
import { HospitalContext } from "../context/context";
import { registerHospital } from "../../../api/utilities";
import { AxiosError } from "axios";
import { Button } from "react-bootstrap";
import { ConfirmationModal } from "../../../components/ConfirmationModal";
import { useHistory } from "react-router";
import routes from "../../../router/constantRoutes.json";
import { IHospital } from "../../../models/IHospital";

const RegisterAdmin = () => {
  const { hospitalData } = useContext(HospitalContext);
  const [isShowModal, setIsShowModal] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm({
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

  const showModal = () => {
    setIsShowModal(true);
  };

  const updateModal = (state: boolean) => {
    setIsShowModal(state);
  };

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
      let newHospitalData: IHospital;
      if (hospitalData) {
        registerHospital(hospitalData)
          .then((res) => {
            newHospitalData = res.data;
          })
          .catch((error: AxiosError) => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          })
          .then(() => {
            const adminData: INewAdmin = {
              user_role: "admin",
              ...data,
              admin: {
                hospital_id: newHospitalData.id as number,
              },
            };
            registerAdmin(adminData).then(() => {
              setIsShowModal(false);
              history.push(routes.LOGIN);
            });
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox width="55" height="35">
          <form
            id="register-hospital-and-admin-form"
            className="d-flex flex-row my-auto w-100 justify-content-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="d-flex flex-column justify-content-center w-75">
              <Icon className="mx-auto" src={HospiCloudLogo} alt="Logo" />
            </div>
            <div className="d-flex flex-column w-100">
              <div className="d-flex flex-row h-100 align-items-center m-2 pt-5">
                <form className="d-flex flex-column w-100 pe-3">
                  <LoginTitle>Register Admin</LoginTitle>
                  <div className="d-flex flex-row w-100">
                    <div className="form-group d-flex justify-content-start mb-2 me-1 w-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="form-group d-flex justify-content-start mb-2 w-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        {...register("last_name", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-start mb-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo Electrónico"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="d-flex flex-row w-100">
                    <select
                      className="form-select d-flex justify-content-start mb-2 me-1 w-50"
                      {...register("document_type", { required: true })}
                    >
                      {DocumentType.map((option) => (
                        <option
                          key={option.id}
                          value={option.id}
                          disabled={option.isDisabled}
                        >
                          {option.value}
                        </option>
                      ))}
                    </select>
                    <div className="form-group d-flex justify-content-start mb-2 w-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Número de documento"
                        {...register("document_number", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-start mb-2">
                    <input
                      type="date"
                      className="form-control"
                      {...register("date_of_birth", { required: true })}
                    />
                  </div>

                  <div className="form-group d-flex justify-content-end mb-3">
                    <Button variant="primary" onClick={showModal}>
                      Registrar
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            {isShowModal && (
              <ConfirmationModal
                state={isShowModal}
                title="Confirmación"
                content="¿Está seguro que desea registrar su Hospital y el respectivo administrador?"
                button1Text="Cancelar"
                button2Text="Confirmar"
                handleShow={updateModal}
                formId={"register-hospital-and-admin-form"}
              />
            )}
          </form>
        </FixedBox>
      </MultiBg>
    </LandingLayout>
  );
};

export default RegisterAdmin;
