import LandingLayout from "../../../layout/LandingLayout";
import { MultiBg, FixedBox, Icon, RegisterTitle } from "./style/index.style";
import HospiCloudLogo from "../../../resources/HospiCloudLogo.svg";
import { registerHospital } from "../../../api/utilities/index";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Province from "./province.json";
import { IHospital2 } from "../../../models/IHospital2";
import { useHistory } from "react-router";
import routes from "../../../router/constantRoutes.json";
import { AxiosError } from "axios";

const RegisterHospital = () => {
  const history = useHistory();
  let hasNoError = true;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      schedule: "",
      location: {
        address: "",
        province: "Provincia",
      },
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const hospitalData: IHospital2 = {
        name: data.name,
        schedule: data.schedule,
        location: {
          address: data.location?.address,
          province: data.location?.province,
        },
      };
      registerHospital(hospitalData)
        .catch((error: AxiosError) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            hasNoError = false;
          }
        })
        .then(() => {
          console.log(hasNoError);
          if (hasNoError) {
            history.push(`${routes.REGISTER_HOSPITAL}/admin`);
          }
          hasNoError = true;
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LandingLayout>
      <MultiBg>
        <FixedBox>
          <div className="row d-flex h-100" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-5">
              <Icon
                className="mx-auto align-middle h-100"
                src={HospiCloudLogo}
                alt="Logo"
              />
            </div>
            <div className="col-7 h-100">
              <div className="row d-flex h-100 align-items-center m-2 pt-5">
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
                    <button type="submit" className="btn btn-primary">
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
