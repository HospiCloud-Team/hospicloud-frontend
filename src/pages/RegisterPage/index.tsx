import LandingLayout from "../../layout/LandingLayout";
import {
  MultiBg,
  FixedBox,
  Icon,
  RegisterTitle,
} from "../../layout/RegisterAndLoginLayout";
import HospiCloudLogo from "../../resources/HospiCloudLogo.svg";
import { registerPatient, resetPassword } from "../../api/users/index";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DocumentType from "../../constants/document-type.json";
import BloodyType from "../../constants/blood-type.json";
import { INewPatient } from "../../models/IPatient";
import routes from "../../router/constantRoutes.json";
import { useHistory } from "react-router";
import { ErrorMessage } from "../../components";
import { validateSelection, blockInvalidChar } from "../../utils";

const RegisterPage = () => {
  const [isNationalId, setIsNationalId] = useState<boolean>(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<Partial<INewPatient>>({
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

  const validateDocumentLength = (documentNumber: any) => {
    if (!isNationalId) {
      return true;
    }

    if (isNationalId && documentNumber.length === 11) {
      return true;
    } else {
      return false;
    }
  };

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
        .then(() => {
          history.push(routes.LOGIN);
          resetPassword(patientData.email, window.location.origin, "Se ha enviado un correo para configurar su contrase??a a su direcci??n de correo");
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          if (error.response.data.message === "Email is already used") {
            setError("email", {
              type: "emailUsed",
              message: "El correo electr??nico ya est?? en uso",
            });
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
                      placeholder="Correo Electr??nico"
                      {...register("email", {
                        required: "Correo electr??nico es requerido",
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
                          validate: (v) => {
                            return (
                              validateSelection(DocumentType, v) ||
                              "Tipo de documento selecionado no es v??lido"
                            );
                          },
                          onChange: (event) => {
                            if (event.target.value === "national_id") {
                              setIsNationalId(true);
                            } else {
                              setIsNationalId(false);
                            }
                          },
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
                        type={isNationalId ? `number` : `text`}
                        onKeyDown={isNationalId ? blockInvalidChar : undefined}
                        className="form-control"
                        placeholder="N??mero de documento"
                        {...register("document_number", {
                          required: "N??mero de documento es requerido",
                          validate: (v) =>
                            validateDocumentLength(v) ||
                            "C??dula debe de ser por lo menos o como m??ximo 11 n??meros",
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
                          validateSelection(BloodyType, v) ||
                          "Tipo de sangre selecionado no es v??lido",
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
                      placeholder="Antecedentes M??dicos"
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
