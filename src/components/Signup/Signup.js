import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./Signup.css";
import SignupBanner from "./SignupBanner";
import { useState } from "react";
import SignUpOthers from "../SignUpOthers/SignUpOthers";

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);

  const handleSignUp = (event) => {
    createUser(event.email, event.password)
      .then((result) => {
        const user = result.user;
        toast.success("Sign Up Successfully");
        console.log(user);
        setError("");
        navigate("/");
        userAddToDB(event.name, event.email);
        const userInfo = {
          displayName: event.name,
        };
        updateUser(userInfo)
          .then((result) => {})
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const userAddToDB = (name, email) =>{
    const userInfo = {name, email};
    console.log(userInfo);
    fetch('https://italy-food-server.vercel.app/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

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
                  {...register("name", { required: "Name is Required" })}
                  placeholder="Full Name"
                  className="input"
                />
                {errors?.name && (
                  <p className="text-red-500 mt-3">{errors?.name?.message}</p>
                )}
              </div>
              <div className="form-control mb-5 form-icon">
                <AiOutlineMail className="icon" />
                <input
                  type="email"
                  {...register("email", { required: "Email is Required" })}
                  placeholder="Email"
                  className="input"
                />
                {errors?.email && (
                  <p className="text-red-500 mt-3">{errors?.email?.message}</p>
                )}
              </div>
              <div className="form-control mb-5 form-icon">
                <FaLock className="icon" />
                <input
                  type={eye ? 'text': 'password'}
                  {...register(
                    "password",
                    {
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        message: "1 Uppercase, 1 Special characters, 1 Number",
                      },
                      minLength: {
                        value: 8,
                        message: "Password should be 8 characters!",
                      },
                    },
                    {
                      required: "Password is Required",
                    }
                  )}
                  placeholder="Password"
                  className="input"
                />
                <div id='eye-icon' onClick={() => setEye(!eye)}>
                  {eye ? <FaEye /> : <FaEyeSlash />}
                </div>
                {errors?.password && (
                  <p className="text-red-500 mt-3">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
              <p className="text-red-500">{error}</p>
              <div id="button" className="mt-3">
                <input className="w-full" value="SignUp" type="submit" />
              </div>
            </form>
            <SignUpOthers></SignUpOthers>
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
