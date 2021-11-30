import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BackIcon } from "../../../styles/AddPersonnel.style";
import ArrowLeft from "../../../../../resources/ArrowLeft.svg";
import { useHistory, useParams } from "react-router";
import { IHospital } from "../../../../../models/IHospital";
import { ConfirmationModal } from "../../../../../components/ConfirmationModal";
import { getHospital, updateHospital } from "../../../../../api/utilities";
import Province from "../../../../RegisterHospitalAndAdmin/RegisterHospitalPage/province.json";

type hospitalParams = {
  id: string;
};

export const HospitalDetailByAdmin = () => {
  const { id } = useParams<hospitalParams>();
  let history = useHistory();
  const [hospitalData, setHospitalData] = useState<IHospital>();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [isShowModal, setIsShowModal] = useState(false);

  const getParticularHospital = async () => {
    const hospital = await getHospital(id);
    setHospitalData(hospital.data);
  };

  const handleEditClick = () => {
    setReadOnly(false);
  };

  const handleCancelClick = () => {
    setReadOnly(true);
    reset({
      name: hospitalData?.name,
      schedule: hospitalData?.schedule,
      location: {
        address: hospitalData?.location.address,
        province: hospitalData?.location.province,
      },
      description: hospitalData?.description,
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
      name: hospitalData?.name,
      schedule: hospitalData?.schedule,
      location: {
        address: hospitalData?.location.address,
        province: hospitalData?.location.province,
      },
      description: hospitalData?.description,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const updateHospitalData = {
        name: data.name,
        schedule: data.schedule,
        location: {
          address: data.location.address,
          province: data.location.province,
        },
        description: data.description,
      };

      if (updateHospitalData) {
        await updateHospital(
          hospitalData?.id.toString() as string,
          updateHospitalData
        ).then((res) => {
          console.log(res);
        });
      }
      updateModal(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParticularHospital();
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
      <form id="hospital-detail-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorName">
              Nombre
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorName"
              className="form-control form-control-lg"
              type="text"
              placeholder="Nombre"
              defaultValue={hospitalData?.name}
              readOnly={readOnly}
              {...register("name")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorLastName">
              Descripción
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorLastName"
              className="form-control form-control-lg"
              type="text"
              placeholder="Apellido"
              defaultValue={hospitalData?.description}
              readOnly={readOnly}
              {...register("description")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorRole">
              Horario
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorRole"
              className="form-control form-control-lg"
              type="text"
              placeholder="Rol"
              defaultValue={hospitalData?.schedule}
              readOnly={readOnly}
              {...register("schedule")}
            />
          </div>
        </div>
        <div className="d-flex flex-row form-group mb-2">
          <div className="col-3">
            <label style={{ fontSize: "24px" }} htmlFor="doctorBirthDate">
              Dirección
            </label>
          </div>
          <div className="col-9">
            <input
              id="doctorBirthDate"
              className="form-control form-control-lg"
              type="text"
              placeholder="Dirección"
              defaultValue={hospitalData?.location.address}
              readOnly={readOnly}
              {...register("location.address")}
            />
          </div>
        </div>
        {readOnly && (
          <div className="d-flex flex-row form-group mb-2">
            <div className="col-3">
              <label style={{ fontSize: "24px" }} htmlFor="doctorDocType">
                Provincia
              </label>
            </div>
            <div className="col-9">
              <input
                id="doctorDocType"
                className="form-control form-control-lg"
                type="text"
                placeholder="Provincia"
                defaultValue={hospitalData?.location.province}
                readOnly
              />
            </div>
          </div>
        )}
        {!readOnly && (
          <div className="d-flex flex-row form-group mb-2">
            <div className="col-3">
              <label style={{ fontSize: "24px" }} htmlFor="doctorDocType">
                Provincia
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select form-select-lg d-flex justify-content-start mb-2 me-1 w-100"
                {...register("location.province", { required: true })}
              >
                {Province.map((option) => (
                  <option
                    key={option.id}
                    value={option.id}
                    defaultValue={hospitalData?.location.province}
                  >
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
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
            title="Confirmación"
            content="Deseas guardar los cambios del hospital?"
            button1Text="Cancelar"
            button2Text="Confirmar"
            handleShow={updateModal}
            formId={"hospital-detail-form"}
          />
        )}
      </form>
    </div>
  );
};
