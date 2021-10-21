import axios from "axios";

const TemplatesAPI = axios.create({
  baseURL: process.env.TEMPLATES_API_URL,
});

const CheckupsAPI = axios.create({
  baseURL: process.env.CHECKUPS_API_URL,
});

const UsersAPI = axios.create({
  // baseURL: process.env.USERS_API_URL,
  baseURL: "http://localhost:8082",
});

export { TemplatesAPI, CheckupsAPI, UsersAPI };

const hospicloudAPIs = [TemplatesAPI, CheckupsAPI, UsersAPI];

export default hospicloudAPIs;
