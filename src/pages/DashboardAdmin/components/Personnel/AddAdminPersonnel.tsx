import {
  FixedBox,
  LoginTitle,
  BackIcon,
} from "../../styles/AddPersonnel.style";
import { addPersonnel, resetPassword } from "../../../../api/users/index";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DocumentType from "../../../../constants/document-type.json";
import { INewAdmin } from "../../../../models/IAdmin";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { ConfirmationModal } from "../../../../components/ConfirmationModal";
import ArrowLeft from "../../../../resources/ArrowLeft.svg";
import routes from "../../../../router/constantRoutes.json";

const AddAdminPersonnel = () => {
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

  const goToPreviousPageClick = () => {
    history.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      reset({
        document_type: "Tipo de Documento",
      });
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (data: any) => {
    try {
      const adminData: INewAdmin = {
        user_role: "admin",
        ...data,
        admin: {
          hospital_id: Number(localStorage.getItem("hospitalId")),
        },
      };

      if (adminData) {
        addPersonnel(adminData)
          .catch((err) => {
            console.log(err);
          })
          .then(() => {
            setIsShowModal(false);
            history.push(routes.PERSONNEL_LIST);
            resetPassword(adminData.email, window.location.origin, "Se ha enviado un correo para configurar contraseña a la dirección de este nuevo miembro del personal");
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-100">
        <BackIcon
          src={ArrowLeft}
          alt="Go Back Icon"
          onClick={goToPreviousPageClick}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <FixedBox>
          <form
            id="add-admin-form"
            className="row d-flex h-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-7 h-100 w-100">
              <div className="row d-flex h-100 align-items-center m-2 pt-5">
                <form className="d-flex flex-column w-100 pe-3">
                  <LoginTitle>Registrar Admin</LoginTitle>
                  <div className="form-group d-flex justify-content-start mb-2 me-1 w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="form-group d-flex justify-content-start mb-2 w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                      {...register("last_name", { required: true })}
                    />
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
                children="¿Está seguro que desea registrar este nuevo administrador?"
                button1Text="Cancelar"
                button2Text="Confirmar"
                handleShow={updateModal}
                formId={"add-admin-form"}
              />
            )}
          </form>
        </FixedBox>
      </div>
    </div>
  );
};

export default AddAdminPersonnel;
