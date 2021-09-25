import { BrowserRouter as Router } from "react-router-dom";
import HospicloudAPI from "./api/hospicloudAPI";
import Routes from "./router";
import routes from "./router/constantRoutes.json";

HospicloudAPI.interceptors.request.use((req) => {
  const authToken = localStorage.getItem("authToken");
  req.headers.common.authorization = authToken;
});

HospicloudAPI.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");

      window.location.href = routes.LOGIN;
    }

    return Promise.reject(error);
  }
);

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
