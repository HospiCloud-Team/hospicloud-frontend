import { IHospital } from "../../models/IHospital";
import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const testRequest = () => {
  return UsersAPI.get("/");
};

const getHospital = (id: string): Promise<IHospital> => {
  return UsersAPI.get(`/hospitals/${id}`);
};

export { login, testRequest, getHospital };
