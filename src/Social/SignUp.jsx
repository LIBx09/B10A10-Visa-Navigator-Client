import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";

const SignUp = () => {
  const { createUser, setUser, manageUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.name.value;
    console.log(email, password, name, photo);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        manageUserProfile(name, photo);
        navigate("/");
        e.target.reset();
        toast.success("Successfully registered!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Email already in use");
      });
  };

  return (
    <div className="flex flex-col lg:flex-row w-10/12 mx-auto bg-slate-500 p-10 rounded-xl items-center space-y-6  lg:space-y-0 lg:space-x-10">
      <div className="card glass-effect bg-base-100  shrink-0 shadow-2xl w-full lg:w-5/12 mx-auto">
        <form onSubmit={handleSignUp} className="card-body">
          <div>
            <button className="btn rounded-full btn-outline btn-accent">
              Google
            </button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">
              Have an Account, please&nbsp;
              <span className="text-red-700">Login</span>
            </Link>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <button className="-mt-10 p-2">
          <Link>Forget Password</Link>
        </button>
      </div>
      <div className="w-full lg:w-5/12 h-[400px] mx-auto">
        <DotLottieReact
          src="https://lottie.host/9bf4a1e3-41a9-436d-98f4-668c56ee7889/ihUSIIuKxU.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default SignUp;
