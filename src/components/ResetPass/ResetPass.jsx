import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const { user, forgetPassword } = useAuth();

  const emailUri = new URLSearchParams(location.search);
  const fillEmail = emailUri.get("email") || "";
  const [email, setEmail] = useState(fillEmail || user?.email || "");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please provide an email address.");
      return;
    }

    forgetPassword(email)
      .then((res) => {
        setEmail(res);
        navigate("/signIn");
        toast.success("Password reset email sent successfully!");
      })
      .catch((error) => {
        setEmail(error);
        toast.error("Failed to send reset email. Please try again.");
      });
  };

  return (
    <div>
      <div
        className="md:w-6/12 mx-auto bg-[#C2FFC7] p-20 rounded-lg"
        data-aos="zoom-in-up"
      >
        <h3 className="font-bold text-lg mb-2">Get Reset Email!</h3>
        <form onSubmit={handleResetPassword}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <button className="btn btn-outline outline-dotted mt-5 ml-4">
            <a>Reset</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
