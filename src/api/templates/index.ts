import { TemplatesAPI } from "../hospicloudAPI";
import { AxiosResponse } from "axios";
import { ITemplate } from "../../models/ITemplate";

const getTemplatesByHospital = (
  id: number
): Promise<AxiosResponse<ITemplate[]>> => {
  return TemplatesAPI.get(`/templates?hospital_id=${id}`);
};

export { getTemplatesByHospital };
