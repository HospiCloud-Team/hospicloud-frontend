import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  getParticularUser,
  updateParticularAdmin,
} from "../../../../api/users";
import { BackIcon } from "../../styles/AddPersonnel.style";
import ArrowLeft from "../../../../resources/ArrowLeft.svg";
import { useHistory, useParams } from "react-router";
import { IAdmin } from "../../../../models/IAdmin";
import { ConfirmationModal } from "../../../../components/ConfirmationModal";
import Documents from "../../../../constants/document-type.json";

type adminParams = {
  id: string;
};

export const PersonnelAdminDetail = () => {
  const { id } = useParams<adminParams>();
  let history = useHistory();
  const [adminData, setAdminData] = useState<IAdmin>();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [documentType, setDocumentType] = useState<string>("");

  const getDocumentType = (documentType: any) => {
    // eslint-disable-next-line array-callback-return
    Documents.map((document) => {
      if (document.id === documentType) {
        setDocumentType(document.value);
      }
    });
  };

  const getParticularAdmin = async () => {
    const admin = await getParticularUser(id);
    setAdminData(admin.data as IAdmin);
    getDocumentType(admin.data.document_type);
  };

  const handleEditClick = () => {
    setReadOnly(false);
  };

  const handleCancelClick = () => {
    setReadOnly(true);
    reset({
      name: adminData?.name,
      last_name: adminData?.last_name,
      document_number: adminData?.document_number,
      date_of_birth: adminData?.date_of_birth,
    });
  };

  const goToPreviousPageClick = () => {
    history.goBack();
  };

  const showModal = () => {
    setIsShowModal(true);
  };

  const updateModal = (state: boolean) => {
    setIsShowModal(state);
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: adminData?.name,
      last_name: adminData?.last_name,
      document_number: adminData?.document_number,
      date_of_birth: adminData?.date_of_birth,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const updatedAdminData = {
        name: data.name ? data.name : adminData?.name,
        last_name: data.last_name ? data.last_name : adminData?.last_name,
        document_number: data.document_number
          ? data.document_number
          : adminData?.document_number,
        date_of_birth: data.date_of_birth
          ? data.date_of_birth
          : adminData?.date_of_birth,
      };

      if (updatedAdminData) {
        await updateParticularAdmin(
          adminData?.id.toString() as string,
          updatedAdminData
        );
      }
      updateModal(false);
      setReadOnly(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParticularAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="d-flex flex-row justify-content-between w-100 mb-3">
        <BackIcon
          src={ArrowLeft}
          alt="Go Back Icon"
          onClick={goToPreviousPageClick}
        />
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleEditClick}
        >
          Editar
        </button>
      </div>
      <form id="personnel-admin-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorName">
              Nombres
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorName"
              className="form-control form-control-lg"
              type="text"
              placeholder="Nombre"
              defaultValue={adminData?.name}
              readOnly={readOnly}
              {...register("name")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorLastName">
              Apellidos
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorLastName"
              className="form-control form-control-lg"
              type="text"
              placeholder="Apellido"
              defaultValue={adminData?.last_name}
              readOnly={readOnly}
              {...register("last_name")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorRole">
              Rol
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorRole"
              className="form-control form-control-lg"
              type="text"
              placeholder="Rol"
              defaultValue={adminData?.user_role}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorRole">
              Correo Electr??nico
            </label>
          </div>
          <div className="col-9">
            <input
              id="adminEmail"
              className="form-control form-control-lg"
              type="text"
              placeholder="Correo Electr??nico"
              defaultValue={adminData?.email}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorBirthDate">
              Fecha de Nacimiento
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorBirthDate"
              className="form-control form-control-lg"
              type="date"
              placeholder="Fecha de Nacimiento"
              defaultValue={adminData?.date_of_birth.toLocaleString()}
              readOnly={readOnly}
              {...register("date_of_birth")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorDocType">
              Tipo de Documento
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorDocType"
              className="form-control form-control-lg"
              type="text"
              placeholder="Tipo de Documento"
              defaultValue={documentType}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorDocNumber">
              N??mero de Documento
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorDocNumber"
              className="form-control form-control-lg"
              type="text"
              placeholder="Documento"
              defaultValue={adminData?.document_number}
              readOnly={readOnly}
              {...register("document_number")}
            />
          </div>
        </div>
        {!readOnly && (
          <div className="text-end">
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={showModal}
            >
              Guardar
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={handleCancelClick}
            >
              Cancelar
            </button>
          </div>
        )}
        {isShowModal && (
          <ConfirmationModal
            state={isShowModal}
            title="Confirmaci??n"
            children="??Deseas guardar las nuevas informaciones del administrador?"
            button1Text="Cancelar"
            button2Text="Confirmar"
            handleShow={updateModal}
            formId={"personnel-admin-form"}
          />
        )}
      </form>
    </div>
  );
};
