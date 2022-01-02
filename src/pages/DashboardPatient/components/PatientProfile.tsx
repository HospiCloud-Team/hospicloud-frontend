import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getParticularUser, updateParticularDoctor } from "../../../api/users";
import { BackIcon } from "../../DashboardAdmin/styles/AddPersonnel.style";
import ArrowLeft from "../../../resources/ArrowLeft.svg";
import { useHistory, useParams } from "react-router";
import { ConfirmationModal } from "../../../components/ConfirmationModal";
import { IPatient } from "../../../models/IPatient";
import Documents from "../../../constants/document-type.json";
import BloodType from "../../../constants/blood-type.json";

type patientParams = {
  id: string;
};

export const PatientProfile = () => {
  const { id } = useParams<patientParams>();
  let history = useHistory();
  const [patientData, setPatientData] = useState<IPatient>();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [documentType, setDocumentType] = useState<string>("");
  const [bloodType, setBloodType] = useState<string>("");

  const getDocumentType = (documentType: any) => {
    // eslint-disable-next-line array-callback-return
    Documents.map((document) => {
      if (document.id === documentType) {
        setDocumentType(document.value);
      }
    });
  };

  const getBloodType = (bloodType: any) => {
    // eslint-disable-next-line array-callback-return
    BloodType.map((blood) => {
      if (blood.id === bloodType) {
        setBloodType(blood.value);
      }
    });
  };

  const getParticularPatient = async () => {
    const patient = await getParticularUser(id);
    setPatientData(patient.data);
    getDocumentType(patient.data.document_type);
    getBloodType(patient.data.patient.blood_type);
  };

  const handleEditClick = () => {
    setReadOnly(false);
  };

  const handleCancelClick = () => {
    setReadOnly(true);
    reset({
      name: patientData?.name,
      last_name: patientData?.last_name,
      document_number: patientData?.document_number,
      date_of_birth: patientData?.date_of_birth,
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
      name: patientData?.name,
      last_name: patientData?.last_name,
      document_number: patientData?.document_number,
      date_of_birth: patientData?.date_of_birth,
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
          patientData?.id.toString() as string,
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
    getParticularPatient();
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
      <form id="patient-profile-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientName">
              Nombres
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientName"
              className="form-control form-control-lg"
              type="text"
              placeholder="Nombre"
              defaultValue={patientData?.name}
              readOnly={readOnly}
              {...register("name")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientLastName">
              Apellidos
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientLastName"
              className="form-control form-control-lg"
              type="text"
              placeholder="Apellido"
              defaultValue={patientData?.last_name}
              readOnly={readOnly}
              {...register("last_name")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientRole">
              Rol
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientRole"
              className="form-control form-control-lg"
              type="text"
              placeholder="Rol"
              defaultValue={patientData?.user_role}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientEmail">
              Correo
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientEmail"
              className="form-control form-control-lg"
              type="text"
              placeholder="Correo"
              defaultValue={patientData?.email}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientBirthDate">
              Fecha de Nacimiento
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientBirthDate"
              type="date"
              className="form-control form-control-lg"
              placeholder="Fecha de Nacimiento"
              defaultValue={patientData?.date_of_birth.toLocaleString()}
              readOnly={readOnly}
              {...register("date_of_birth")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientDocType">
              Tipo de Documento
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientDocType"
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
            <label style={{ fontSize: "24px" }} htmlFor="patientDocNumber">
              Número de Documento
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientDocNumber"
              className="form-control form-control-lg"
              type="text"
              placeholder="Documento"
              defaultValue={patientData?.document_number}
              readOnly={readOnly}
              {...register("document_number")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientBloodType">
              Tipo de Sangre
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientBloodType"
              className="form-control form-control-lg"
              type="text"
              placeholder="Tipo de Sangre"
              defaultValue={bloodType}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="patientMedBackground">
              Antecedentes Medicos
            </label>
          </div>
          <div className="col-9">
            <input
              id="patientMedBackground"
              className="form-control form-control-lg"
              type="text"
              placeholder="Antecedentes Medicos"
              defaultValue={patientData?.patient.medical_background}
              readOnly
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
            content="Deseas guardar los cambios?"
            button1Text="Cancelar"
            button2Text="Confirmar"
            handleShow={updateModal}
            formId={"patient-profile-form"}
          />
        )}
      </form>
    </div>
  );
};
