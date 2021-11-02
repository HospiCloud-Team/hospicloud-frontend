import axios from "axios";

const UtilitiesAPI = axios.create({
  baseURL: process.env.REACT_APP_UTILITIES_API_URL,
});

const CheckupsAPI = axios.create({
  baseURL: process.env.REACT_APP_CHECKUPS_API_URL,
});

const UsersAPI = axios.create({
  baseURL: process.env.REACT_APP_USERS_API_URL,
});

export { UtilitiesAPI, CheckupsAPI, UsersAPI };

const hospicloudAPIs = [UtilitiesAPI, CheckupsAPI, UsersAPI];

export default hospicloudAPIs;
