import { UtilitiesAPI } from "../hospicloudAPI";
import { AxiosResponse } from "axios";
import { INewTemplate, ITemplate } from "../../models/ITemplate";
import { IHospital, INewHospital } from "../../models/IHospital";
import { INewSpecialty, ISpecialty } from "../../models/ISpecialty";
import { IDoctor } from "../../models/IDoctor";
import { IAdmin } from "../../models/IAdmin";

// Templates
const getTemplatesByHospital = (
  id: number
): Promise<AxiosResponse<ITemplate[]>> => {
  return UtilitiesAPI.get(`/templates?hospital_id=${id}`);
};

const addTemplateToHospital = (
  newTemplate: INewTemplate
): Promise<AxiosResponse<ITemplate[]>> => {
  return UtilitiesAPI.post(`/templates`, newTemplate);
};

const editTemplateOfHospital = (
  id: number,
  updatedTemplate: INewTemplate
): Promise<AxiosResponse<ITemplate[]>> => {
  return UtilitiesAPI.put(`/templates/${id}`, updatedTemplate);
};

const removeTemplate = (id: number): Promise<AxiosResponse<ITemplate[]>> => {
  return UtilitiesAPI.delete(`/templates/${id}`);
};

const getTemplatesByDoctor = (
  id: number
): Promise<AxiosResponse<ITemplate[]>> => {
  return UtilitiesAPI.get(`/templates/doctors/${id}`);
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

const registerHospital = (
  hospitalData: INewHospital
): Promise<AxiosResponse<IHospital>> => {
  return UtilitiesAPI.post("/hospitals", hospitalData);
};

const getHospitalsByName = (
  name: string
): Promise<AxiosResponse<IHospital[]>> => {
  return UtilitiesAPI.get(`/hospitals?name=${name}`);
};

const getHospital = (id: number): Promise<AxiosResponse<IHospital>> => {
  return UtilitiesAPI.get(`/hospitals/${id}`);
};

//Users
const getDoctorsByHospitalId = (
  id: number
): Promise<AxiosResponse<IDoctor[]>> => {
  return UtilitiesAPI.get(`/hospitals/${id}/doctors`);
};

const getAdminsByHospitalId = (
  id: number
): Promise<AxiosResponse<IAdmin[]>> => {
  return UtilitiesAPI.get(`/hospitals/${id}/admins`);
};

export {
  getTemplatesByHospital,
  addTemplateToHospital,
  editTemplateOfHospital,
  getTemplatesByDoctor,
  removeTemplate,
  getSpecialtyByHospital,
  addSpecialtyToHospital,
  removeSpecialtyFromHospital,
  getAllHospitals,
  getHospitalsByName,
  getHospital,
  registerHospital,
  getDoctorsByHospitalId,
  getAdminsByHospitalId,
};
