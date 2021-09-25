import HospicloudAPI from "../hospicloudAPI";

const login = (email: string, password: string) => {
  return HospicloudAPI.post("/login", { email, password });
};

export { login };
