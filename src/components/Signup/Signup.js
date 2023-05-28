import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle, FaLock, FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./Signup.css";
import SignupBanner from "./SignupBanner";

const Signup = () => {
  const { handleSubmit, register } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    console.log(event);
    createUser(event.email, event.password)
      .then((result) => {
        const user = result.user;
        toast.success("Sign Up Successfully");
        console.log(user);
        navigate("/");
        const userInfo = {
          displayName: event.name,
        };
        updateUser(userInfo)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <SignupBanner></SignupBanner>
      <div className="container">
        <div className="main-singup">
          <div className="signup">
            <h3>SingUp</h3>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control mb-5 form-icon">
                <FaUser className="icon" />
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Full Name"
                  className="input"
                />
              </div>
              <div className="form-control mb-5 form-icon">
                <AiOutlineMail className="icon" />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="form-control mb-5 form-icon">
                <FaLock className="icon" />
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="input"
                />
              </div>
              <div id="button" className="mt-3">
                <input className="btn w-full" value="SignUp" type="submit" />
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <div id="google-signup">
              <FaGoogle id="google" />
              <p>Login with google</p>
            </div>
            <div id="facebook-signup">
              <FaFacebookF id="facebook" />
              <p>Login with facebook</p>
            </div>
            <div className="singup-link">
              <p>
                Already have an account{" "}
                <Link to="/login" className="link">
                  LogIn
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
