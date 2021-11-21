import { FixedBox, LoginTitle, BackIcon } from "../styles/AddPersonnel.style";
import { registerDoctor } from "../../../api/users/index";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DocumentType from "./constants/document-type.json";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { ConfirmationModal } from "../../RegisterHospitalAndAdmin/components/confirmationModal";
import ArrowLeft from "../../../resources/ArrowLeft.svg";
import { getSpecialtyByHospital } from "../../../api/utilities";
import { IDoctorRegister } from "../../../models/IDoctor";
import Select from "react-select";

type SelectSpecialty = {
  label: string;
  value: number;
};

const AddDoctorPersonnel = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [specialties, setSpecialties] = useState<SelectSpecialty[]>([
    { label: "", value: 0 },
  ]);
  const history = useHistory();
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      document_type: "",
      name: "",
      last_name: "",
      email: "",
      document_number: "",
      date_of_birth: new Date(),
      doctor: {
        hospital_id: 0,
        schedule: "",
        special_ids: [0],
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

  const getSpecialties = async () => {
    const hospitalSpecialties = await getSpecialtyByHospital(
      Number(localStorage.getItem("hospitalId"))
    );
    console.log(hospitalSpecialties.data);
    let specialties = hospitalSpecialties.data.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
    setSpecialties(specialties);
  };

  // const getSelectedSpecialties = () => {
  //   return selectedItems.current.get();
  // };

  useEffect(() => {
    const fetchData = async () => {
      // This would be a GET call to an endpoint
      reset({
        document_type: "Tipo de Documento",
      });
    };

    fetchData();
    getSpecialties();
  }, [reset]);

  const onSubmit = async (data: any) => {
    try {
      console.log("this is data", data);
      const doctorData: IDoctorRegister = {
        user_role: "doctor",
        ...data,
        doctor: {
          hospital_id: Number(localStorage.getItem("hospitalId")),
          schedule: data.doctor.schedule,
          specialty_ids: data.doctor.special_ids,
        },
      };
      console.log("this is doctorData", doctorData);

      if (doctorData) {
        registerDoctor(doctorData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .then(() => {
            setIsShowModal(false);
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
            id="hook-form"
            className="row d-flex h-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-7 h-100 w-100">
              <div className="row d-flex h-100 align-items-center m-2 pt-5">
                <form className="d-flex flex-column w-100 pe-3">
                  <LoginTitle>Register Doctor</LoginTitle>
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
                  <div className="form-group d-flex justify-content-start mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Horario"
                      {...register("doctor.schedule", { required: true })}
                    />
                  </div>
                  <select
                    className="form-select"
                    multiple
                    {...register("doctor.special_ids", { required: true })}
                  >
                    {specialties.map((option) => {
                      return (
                        <option value={option.value}>{option.label}</option>
                      );
                    })}
                  </select>
                  {/* <Controller
                    control={control}
                    name="doctor.special_ids"
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Especialidad/es"
                        value={specialties.filter((c) =>
                          field.value.includes(c.value)
                        )}
                        onChange={(val: MultiValue<SelectSpecialty>) =>
                          field.onChange(
                            setSelectedSpecialties(val.map((c) => c.value))
                          )
                        }
                        options={specialties}
                        isMulti
                      />
                    )}
                  /> */}
                  <div className="form-group d-flex justify-content-end mb-3 mt-4">
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
                content="Estas seguro de registrar este nuevo administrador?"
                button1Text="Cancelar"
                button2Text="Confirmar"
                handleShow={updateModal}
              />
            )}
          </form>
        </FixedBox>
      </div>
    </div>
  );
};

export default AddDoctorPersonnel;