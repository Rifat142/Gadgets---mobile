import Footer2 from "../Components/Footer2";
import Navbar from "../Components/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-white ">
        <div className="hero-content grid">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black">Register Here!</h1>
          </div>
          <div className="card  sm:w-full lg:w-96  max-w-sm shadow-2xl bg-blue-300">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered bg-slate-50"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  className="input input-bordered bg-slate-50"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
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
                <button className="btn btn-primary text-black">Register</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default Register;
