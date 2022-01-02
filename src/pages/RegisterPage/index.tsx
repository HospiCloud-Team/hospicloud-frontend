import LandingLayout from "../../layout/LandingLayout";
import {
  MultiBg,
  FixedBox,
  Icon,
  RegisterTitle,
} from "../../layout/RegisterAndLoginLayout";
import HospiCloudLogo from "../../resources/HospiCloudLogo.svg";
import { registerPatient } from "../../api/users/index";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import DocumentType from "../../constants/document-type.json";
import BloodyType from "../../constants/blood-type.json";
import { INewPatient } from "../../models/IPatient";
import { useHistory } from "react-router";
import routes from "../../router/constantRoutes.json";
import { ErrorMessage } from "../../components";
import { validateSelectoin } from "../../utils";

const RegisterPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      document_type: "",
      name: "",
      last_name: "",
      email: "",
      document_number: "",
      date_of_birth: new Date(),
      patient: {
        blood_type: "",
        medical_background: "",
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      // This would be a GET call to an endpoint
      reset({
        document_type: "Tipo de Documento",
        patient: {
          blood_type: "Tipo de Sangre",
          medical_background: "",
        },
      });
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (data: any) => {
    try {
      const patientData: INewPatient = {
        user_role: "patient",
        document_type: data.document_type,
        name: data.name,
        last_name: data.last_name,
        email: data.email,
        document_number: data.document_number,
        date_of_birth: data.date_of_birth,
        patient: {
          blood_type: data.patient?.blood_type,
          medical_background: data.patient?.medical_background,
        },
      };
      registerPatient(patientData)
        .then(() => history.push(routes.LOGIN))
        .catch((error) => {
          if (error.response) {
            console.log(error);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox width="60" height="40">
          <div
            className="d-flex flex-row my-auto w-100 justify-content-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="d-flex flex-column justify-content-center w-75">
              <Icon className="mx-auto" src={HospiCloudLogo} alt="Logo" />
            </div>
            <div className="d-flex flex-column w-100">
              <div className="d-flex flex-row h-100 align-items-center m-2 pt-5">
                <form className="d-flex flex-column w-100 pe-3">
                  <RegisterTitle>Registrar</RegisterTitle>
                  <div className="d-flex flex-row w-100">
                    <div className="form-group d-flex flex-column justify-content-start mb-2 me-1 w-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        {...register("name", {
                          required: "Nombre es requerido",
                        })}
                      />
                      {errors.name && (
                        <ErrorMessage message={errors.name.message as string} />
                      )}
                    </div>
                    <div className="form-group d-flex flex-column justify-content-start mb-2 w-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        {...register("last_name", {
                          required: "Apellido es requerido",
                        })}
                      />
                      {errors.last_name && (
                        <ErrorMessage
                          message={errors.last_name.message as string}
                        />
                      )}
                    </div>
                  </div>
                  <div className="form-group d-flex flex-column justify-content-start mb-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo Electrónico"
                      {...register("email", {
                        required: "Correo electrónico es requerido",
                      })}
                    />
                    {errors.email && (
                      <ErrorMessage message={errors.email.message as string} />
                    )}
                  </div>
                  <div className="d-flex flex-row w-100">
                    <div className="d-flex flex-column w-50 mb-2">
                      <select
                        className="form-select d-flex justify-content-start me-1 w-100"
                        {...register("document_type", {
                          required: true,
                          validate: (v) =>
                            validateSelectoin(DocumentType, v) ||
                            "Tipo de documento selecionado no es válido",
                        })}
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
                      {errors.document_type && (
                        <ErrorMessage
                          message={errors.document_type.message as string}
                        />
                      )}
                    </div>
                    <div className="form-group d-flex flex-column justify-content-start mb-2 ms-1 w-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Número de documento"
                        {...register("document_number", {
                          required: "Número de documento es requerido",
                        })}
                      />
                      {errors.document_number && (
                        <ErrorMessage
                          message={errors.document_number.message as string}
                        />
                      )}
                    </div>
                  </div>
                  <div className="form-group d-flex flex-column justify-content-start mb-2">
                    <input
                      type="date"
                      className="form-control"
                      {...register("date_of_birth", {
                        required: "Fecha de nacimiento es requerido",
                      })}
                    />
                    {errors.date_of_birth && (
                      <ErrorMessage
                        message={errors.date_of_birth.message as string}
                      />
                    )}
                  </div>
                  <div className="d-flex flex-column w-100 mb-2">
                    <select
                      className="form-select"
                      aria-label="Bloody Type"
                      {...register("patient.blood_type", {
                        required: true,
                        validate: (v) =>
                          validateSelectoin(BloodyType, v) ||
                          "Tipo de sangre selecionado no es válido",
                      })}
                    >
                      {BloodyType.map((option) => (
                        <option
                          key={option.id}
                          value={option.id}
                          disabled={option.isDisabled}
                        >
                          {option.value}
                        </option>
                      ))}
                    </select>
                    {errors.patient?.blood_type && (
                      <ErrorMessage
                        message={errors.patient.blood_type.message as string}
                      />
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Antecedentes Médicos"
                      {...register("patient.medical_background")}
                    ></textarea>
                  </div>
                  <div className="form-group d-flex justify-content-end mb-3">
                    <button type="submit" className="btn btn-primary ">
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </FixedBox>
      </MultiBg>
    </LandingLayout>
  );
};

export default RegisterPage;
