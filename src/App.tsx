import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import loadInterceptors from "./utils/loadInterceptors";

loadInterceptors();

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
