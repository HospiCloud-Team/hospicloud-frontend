import { IHospital2 } from "../../models/IHospital2";
import { UtilitiesAPI } from "../hospicloudAPI";


const registerHospital = (hospitalData: IHospital2) => {
  return UtilitiesAPI.post("/hospitals", hospitalData);
}


export {registerHospital};
