import { UsersAPI } from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return UsersAPI.post("/login", { email, password });
};

const testRequest = () => {
  return UsersAPI.get("/");
};

export { login, testRequest };
