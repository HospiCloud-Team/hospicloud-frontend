import axios from "axios";

const UtilitiesAPI = axios.create({
  baseURL:
    process.env.REACT_APP_UTILITIES_API_URL ??
    "https://hospicloud-api-utilities-bmwxxnwgra-ue.a.run.app",
});

const CheckupsAPI = axios.create({
  baseURL:
    process.env.REACT_APP_CHECKUPS_API_URL ??
    "https://hospicloud-api-checkups-bmwxxnwgra-ue.a.run.app",
});

const UsersAPI = axios.create({
  baseURL:
    process.env.REACT_APP_USERS_API_URL ??
    "https://hospicloud-api-users-bmwxxnwgra-ue.a.run.app",
});

export { UtilitiesAPI, CheckupsAPI, UsersAPI };

const hospicloudAPIs = [UtilitiesAPI, CheckupsAPI, UsersAPI];

export default hospicloudAPIs;
