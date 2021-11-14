import LandingLayout from "../../../layout/LandingLayout";
import {
  MultiBg,
  FixedBox,
  Icon,
  RegisterTitle,
} from "../../../layout/RegisterAndLoginLayout";
import HospiCloudLogo from "../../../resources/HospiCloudLogo.svg";
import { useForm } from "react-hook-form";
import Province from "./province.json";
import { useHistory } from "react-router";
import routes from "../../../router/constantRoutes.json";
import { useContext } from "react";
import { HospitalContext } from "../context/context";
import { INewHospital } from "../../../models/IHospital";

const RegisterHospital = () => {
  const history = useHistory();
  const { saveHospitalData } = useContext(HospitalContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      schedule: "",
      description: "",
      location: {
        address: "",
        province: "Provincia",
      },
    },
  });

  const onSubmit = async (hospitalData: INewHospital) => {
    try {
      saveHospitalData(hospitalData);
      history.push(`${routes.REGISTER_HOSPITAL}/admin`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox width="55" height="35">
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
                  <RegisterTitle>Registra tu Centro Médico</RegisterTitle>
                  <div className="form-group d-flex justify-content-start mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="form-group d-flex justify-content-start mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Horario"
                      {...register("schedule", { required: true })}
                    />
                  </div>
                  <div className="form-group d-flex justify-content-start mb-2">
                    <textarea
                      className="form-control"
                      placeholder="Descripción"
                      {...register("description", { required: true })}
                    />
                  </div>
                  <div className="form-group d-flex justify-content-start mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dirección"
                      {...register("location.address", { required: true })}
                    />
                  </div>
                  <select
                    className="form-select d-flex justify-content-start mb-2 me-1 w-100"
                    {...register("location.province", { required: true })}
                  >
                    {Province.map((option) => (
                      <option
                        key={option.id}
                        value={option.id}
                        disabled={option.isDisabled}
                      >
                        {option.value}
                      </option>
                    ))}
                  </select>
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

export default RegisterHospital;
