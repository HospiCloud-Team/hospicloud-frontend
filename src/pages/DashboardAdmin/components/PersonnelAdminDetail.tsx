import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getParticularUser } from "../../../api/users";
import { BackIcon } from "../styles/AddPersonnel.style";
import ArrowLeft from "../../../resources/ArrowLeft.svg";
import { useHistory } from "react-router";
import { IAdmin } from "../../../models/IAdmin";

export const PersonnelAdminDetail = () => {
  let history = useHistory();
  const [adminData, setAdminData] = useState<IAdmin>();
  const [readOnly, setReadOnly] = useState<boolean>(true);

  const getParticularAdmin = async () => {
    const admin = await getParticularUser(6);
    setAdminData(admin.data);
    console.log(admin.data);
  };

  const handleEditClick = () => {
    setReadOnly(false);
  };

  const handleCancelClick = () => {
    setReadOnly(true);
  };

  const goToPreviousPageClick = () => {
    history.goBack();
  };

  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {};

  useEffect(() => {
    getParticularAdmin();
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
      <form>
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
              value={adminData?.name}
              readOnly
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
              value={adminData?.last_name}
              readOnly
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
              value={adminData?.user_role}
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
              placeholder="Fecha de Nacimiento"
              value={new Date(
                adminData?.date_of_birth as Date
              ).toLocaleDateString()}
              readOnly
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
              value={adminData?.document_type}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorDocNumber">
              Número de Documento
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorDocNumber"
              className="form-control form-control-lg"
              type="text"
              placeholder="Documento"
              value={adminData?.document_number}
              readOnly
            />
          </div>
        </div>
        {!readOnly && (
          <div className="text-end">
            <button type="button" className="btn btn-primary me-2">
              Guardar
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelClick}
            >
              Cancelar
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
