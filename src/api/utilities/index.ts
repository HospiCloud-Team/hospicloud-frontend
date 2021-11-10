import { IHospital2 } from "../../models/IHospital2";
import { UtilitiesAPI } from "../hospicloudAPI";
import { AxiosResponse } from "axios";
import { ITemplate } from "../../models/ITemplate";
import { IHospital } from "../../models/IHospital";
import { ISpecialty } from "../../models/ISpecialty";

// Templates
const getTemplatesByHospital = (
  id: number
): Promise<AxiosResponse<ITemplate[]>> => {
  return UtilitiesAPI.get(`/templates?hospital_id=${id}`);
};

// Specialties
const getSpecialtyByHospital = (
  id: number
): Promise<AxiosResponse<ISpecialty[]>> => {
  return UtilitiesAPI.get(`/specialties?hospital_id=${id}`);
};

// Hospitals
const getAllHospitals = (): Promise<AxiosResponse<IHospital[]>> => {
  return UtilitiesAPI.get(`/hospitals`);
};

const registerHospital = (hospitalData: IHospital2) => {
  return UtilitiesAPI.post("/hospitals", hospitalData);
}

const getHospitalsByName = (
  name: string
): Promise<AxiosResponse<IHospital[]>> => {
  return UtilitiesAPI.get(`/hospitals?name=${name}`);
};

const getHospital = (id: string): Promise<AxiosResponse<IHospital>> => {
  return UtilitiesAPI.get(`/hospitals/${id}`);
};

export {
  getTemplatesByHospital,
  getSpecialtyByHospital,
  getAllHospitals,
  getHospitalsByName,
  getHospital,
  registerHospital,
};
