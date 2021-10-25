import axios from "axios";

const TemplatesAPI = axios.create({
  baseURL: process.env.REACT_APP_TEMPLATES_API_URL,
});

const CheckupsAPI = axios.create({
  baseURL: process.env.REACT_APP_CHECKUPS_API_URL,
});

const UsersAPI = axios.create({
  // baseURL: process.env.USERS_API_URL,
  baseURL: process.env.REACT_APP_USERS_API_URL,
});

export { TemplatesAPI, CheckupsAPI, UsersAPI };

const hospicloudAPIs = [TemplatesAPI, CheckupsAPI, UsersAPI];

export default hospicloudAPIs;
