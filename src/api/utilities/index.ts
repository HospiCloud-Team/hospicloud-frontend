import { UtilitiesAPI } from "../hospicloudAPI";
import { AxiosResponse } from "axios";
import { ITemplate } from "../../models/ITemplate";
import { IHospital } from "../../models/IHospital";
import { INewSpecialty, ISpecialty } from "../../models/ISpecialty";

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

const addSpecialtyToHospital = (
  newSpecialty: INewSpecialty
): Promise<AxiosResponse<ISpecialty>> => {
  return UtilitiesAPI.post("/specialties", newSpecialty);
};

const removeSpecialtyFromHospital = (
  id: number
): Promise<AxiosResponse<ISpecialty>> => {
  return UtilitiesAPI.delete(`/specialties/${id}`);
};

// Hospitals
const getAllHospitals = (): Promise<AxiosResponse<IHospital[]>> => {
  return UtilitiesAPI.get(`/hospitals`);
};

const getHospitalsByName = (
  name: string
): Promise<AxiosResponse<IHospital[]>> => {
  return UtilitiesAPI.get(`/hospitals?name=${name}`);
};

const getHospital = (id: number): Promise<AxiosResponse<IHospital>> => {
  return UtilitiesAPI.get(`/hospitals/${id}`);
};

export {
  getTemplatesByHospital,
  getSpecialtyByHospital,
  addSpecialtyToHospital,
  removeSpecialtyFromHospital,
  getAllHospitals,
  getHospitalsByName,
  getHospital,
};
