import hospicloudAPIs from "../api/hospicloudAPI";
import routes from "../router/constantRoutes.json";

const loadInterceptors = () => {
  hospicloudAPIs.forEach((api) => {
    api.interceptors.request.use((req) => {
      const authToken = localStorage.getItem("authToken");
      req.headers.common["Authorization"] = `Bearer ${authToken}`;
      return req;
    });

    api.interceptors.response.use(
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
  });
};

export default loadInterceptors;
