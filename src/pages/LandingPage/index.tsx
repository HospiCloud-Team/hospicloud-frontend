import { Button } from "@mui/material";
import { testRequest } from "../../api/users";

const LandingPage = () => {
  return (
    <div>
      <div>Main page</div>
      <Button
        variant="outlined"
        onClick={() => {
          localStorage.setItem("authToken", "abc");
        }}
      >
        Set Token
      </Button>
      <Button
        variant="contained"
        onClick={async () => {
          console.log(await testRequest());
        }}
      >
        TEST REQUEST
      </Button>
    </div>
  );
};

export default LandingPage;
