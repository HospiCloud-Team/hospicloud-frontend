import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getParticularUser, updateParticularDoctor } from "../../../api/users";
import { IDoctor } from "../../../models/IDoctor";
import { BackIcon } from "../../DashboardAdmin/styles/AddPersonnel.style";
import ArrowLeft from "../../../resources/ArrowLeft.svg";
import { useHistory, useParams } from "react-router";
import { ConfirmationModal } from "../../../components/ConfirmationModal";
import Documents from "../../../constants/document-type.json";

type doctorParams = {
  id: string;
};

export const DoctorProfile = () => {
  const { id } = useParams<doctorParams>();
  let history = useHistory();
  const [doctorData, setDoctorData] = useState<IDoctor>();
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

  const getParticularDoctor = async () => {
    const doctor = await getParticularUser(id);
    setDoctorData(doctor.data);
    getDocumentType(doctor.data.document_type);
  };

  const handleEditClick = () => {
    setReadOnly(false);
  };

  const handleCancelClick = () => {
    setReadOnly(true);
    reset({
      name: doctorData?.name,
      last_name: doctorData?.last_name,
      document_number: doctorData?.document_number,
      date_of_birth: doctorData?.date_of_birth,
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
      name: doctorData?.name,
      last_name: doctorData?.last_name,
      document_number: doctorData?.document_number,
      date_of_birth: doctorData?.date_of_birth,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const updatedDoctorData = {
        name: data.name,
        last_name: data.last_name,
        document_number: data.document_number,
        date_of_birth: data.date_of_birth,
      };
      if (updatedDoctorData) {
        await updateParticularDoctor(
          doctorData?.id.toString() as string,
          updatedDoctorData
        );
      }
      updateModal(false);
      setReadOnly(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParticularDoctor();
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
      <form id="personnel-doctor-form" onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={doctorData?.name}
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
              defaultValue={doctorData?.last_name}
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
              defaultValue={doctorData?.user_role}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorRole">
              Correo
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorRole"
              className="form-control form-control-lg"
              type="text"
              placeholder="Correo"
              defaultValue={doctorData?.email}
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
              type="date"
              className="form-control form-control-lg"
              placeholder="Fecha de Nacimiento"
              defaultValue={doctorData?.date_of_birth.toLocaleString()}
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
              Número de Documento
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorDocNumber"
              className="form-control form-control-lg"
              type="text"
              placeholder="Documento"
              defaultValue={doctorData?.document_number}
              readOnly={readOnly}
              {...register("document_number")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorSchedule">
              Horario
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorSchedule"
              className="form-control form-control-lg"
              type="text"
              placeholder="Horario"
              defaultValue={doctorData?.doctor.schedule}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-3">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorSpecialties">
              Especialidades
            </label>
          </div>
          <div className="col-9">
            <select
              id="doctorSpecialties"
              className="form-control form-control-lg"
              placeholder="Especialidades"
              multiple
              disabled
            >
              {doctorData?.doctor.specialties.map((option) => {
                return <option value={option.id}>{option.name}</option>;
              })}
            </select>
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
              type="button"
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
            title="Confirmación"
            content="Deseas guardar las nuevas informaciones del doctor?"
            button1Text="Cancelar"
            button2Text="Confirmar"
            handleShow={updateModal}
            formId={"personnel-doctor-form"}
          />
        )}
      </form>
    </div>
  );
};
