import LandingLayout from "../../layout/LandingLayout";

const LoginPage = () => {
  
  return (
    <LandingLayout>
      <h1 className="fs-2">Login</h1>
      <form>
        <div className="mb-3">
          <label id="labelEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label id="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <form>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password"/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </LandingLayout>
  );
};

export default LoginPage;
