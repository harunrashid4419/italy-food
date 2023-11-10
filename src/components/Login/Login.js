import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../src/assets/login.json";
import { useForm } from "react-hook-form";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import { toast } from "react-hot-toast";
import LoginBanner from "./LoginBanner";
import SignUpOthers from "../SignUpOthers/SignUpOthers";
import { motion } from "framer-motion";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [eye, setEye] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    login(event.email, event.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <>
      <LoginBanner></LoginBanner>
      <div className="container">
        <div className="login-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="animation"
          >
            <Lottie
              className="anime"
              animationData={loginAnimation}
              loop={true}
            />
          </motion.div>
          <div className="login">
            <motion.h3
              initial={{ y: -30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
            >
              Login
            </motion.h3>
            <form onSubmit={handleSubmit(handleLogin)}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                    duration: 0.5,
                  },
                }}
                className="form-control mb-8 form-icon"
              >
                <input
                  type="email"
                  {...register("email")}
                  className="input"
                  required
                />
                <span>Email</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                className="form-control mb-5 form-icon"
              >
                <input
                  type={eye ? "text" : "password"}
                  {...register("password")}
                  className="input"
                  required
                />
                <div id="eye-icon" onClick={() => setEye(!eye)}>
                  {eye ? <FaEye /> : <FaEyeSlash />}
                </div>
                <span>Password</span>
              </motion.div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="forget-pass">
                <Link>Forget Password?</Link>
              </div>
              <div id="button" className="mt-3">
                <input className="btn w-full" value="Login" type="submit" />
              </div>
            </form>
            <SignUpOthers></SignUpOthers>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              className="singup-link"
            >
              <p>
                Don't have any account{" "}
                <Link to="/signup" className="link">
                  SignUp
                </Link>{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
