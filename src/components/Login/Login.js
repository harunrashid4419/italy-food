import React, { useContext } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../src/assets/login.json";
import { useForm } from "react-hook-form";
import "./Login.css";
import { FaUser, FaLock, FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event =>{
    console.log(event)
    login(event.email, event.password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        toast.success('Successfully Login');
        navigate(from, {replace: true});
      })
      .catch(error => console.error)
  }

  return (
    <div className="container">
      <div className="login-section">
        <div className="animation">
          <Lottie
            className="anime"
            animationData={loginAnimation}
            loop={true}
          />
        </div>
        <div className="login">
          <h3>Login</h3>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control mb-5 form-icon">
              <label className="label">
                <span className="label-text text-white">UserName</span>
              </label>
              <FaUser className="icon" />
              <input
                type="email"
                {...register("email")}
                placeholder="Type your username"
                className="input"
              />
            </div>
            <div className="form-control mb-5 form-icon">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <FaLock className="icon" />
              <input
                type="password"
                {...register("password")}
                placeholder="Type your password"
                className="input"
              />
            </div>
            <div className="forget-pass">
              <Link>Forget Password?</Link>
            </div>
            <div id="button" className="mt-3">
              <input className="btn w-full" value="Login" type="submit" />
            </div>
          </form>
          <div className="social-login">
            <Link><FaGoogle className="social-icon" /></Link>
            <Link><FaGithub className="social-icon" /></Link>
            <Link><FaTwitter className="social-icon" /></Link>
          </div>
          <div className="singup-link">
            <p>Don't have any account <Link to='/signup' className="link">SignUp</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
