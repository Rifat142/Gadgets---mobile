import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer2 from "../Components/Footer2";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    console.log(form.get("email"));
    console.log(form.get("password"));
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        
        console.error(error);
        alert(error)
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="hero min-h-screen bg-white ">
        <div className="hero-content grid">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">Login now!</h1>
          </div>
          <div className="card  sm:w-full lg:w-96  max-w-sm shadow-2xl bg-blue-300">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-slate-50"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-slate-50"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-black"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-black">Login</button>
              </div>
              <div>
                <p className="text-black">
                  If u don't have an account,{" "}
                  <NavLink
                    className={"link link-hover font-bold"}
                    to="/register"
                  >
                    Register Now!
                  </NavLink>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Login;
