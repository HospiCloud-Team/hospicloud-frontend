import { UtilitiesAPI } from "../hospicloudAPI";
import { AxiosResponse } from "axios";
import { ITemplate } from "../../models/ITemplate";
import { IHospital } from "../../models/IHospital";

const getTemplatesByHospital = (
  id: number
): Promise<AxiosResponse<ITemplate[]>> => {
  return UtilitiesAPI.get(`/templates?hospital_id=${id}`);
};

const getHospital = (id: string): Promise<IHospital> => {
  return UtilitiesAPI.get(`/hospitals/${id}`);
};

export { getTemplatesByHospital, getHospital };
