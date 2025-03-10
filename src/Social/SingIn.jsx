import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Social.css";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const SingIn = () => {
  const { signIn, googleSignin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGoogleSignIn = () => {
    googleSignin()
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in with Google!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google Sign-In failed. Please try again.");
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
        toast.success("Successfully Login");
      })
      .catch((error) => {
        // console.log(error.code);

        if (password.length < 5) {
          toast.error("Password length ares not matched");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Failed to login. Please try again later.");
        } else {
          toast.error("Incorrect password. Please try again.");
        }
      });
  };

  return (
    <div className="flex flex-col lg:flex-row w-10/12 mx-auto bg-slate-500 p-10 rounded-xl  items-center space-y-6  lg:space-y-0 lg:space-x-10">
      <div className="card glass-effect bg-base-100 w-full shrink-0 shadow-2xl lg:w-5/12 mx-auto">
        <form onSubmit={handleSignIn} className="card-body">
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn rounded-full btn-ghost"
            >
              Google
            </button>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <p className="label-text-alt link link-hover">
              Don&apos;t have an account, please&nbsp;
              <Link to="/signUp" className="text-red-700">
                Register
              </Link>
            </p>
          </label>

          <div className="form-control mt-6 space-y-3">
            <button className="btn btn-primary">Login</button>
          </div>
          <div></div>
        </form>
        <button className="-mt-10 p-2">
          <Link to={`/reset?email=${encodeURIComponent(email)}`}>
            Forget Password
          </Link>
        </button>
      </div>
      <div className="w-full lg:w-5/12 h-[200px] lg:h-[300px] mx-auto">
        <DotLottieReact
          src="https://lottie.host/9bf4a1e3-41a9-436d-98f4-668c56ee7889/ihUSIIuKxU.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default SingIn;
