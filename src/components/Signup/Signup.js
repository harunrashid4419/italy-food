import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGithub, FaGoogle, FaLock, FaTwitter, FaUser, FaUserTie } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./Signup.css";

const Signup = () => {
  const { handleSubmit, register } = useForm();
  const {createUser, updateUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = event =>{
    console.log(event)
    createUser(event.email, event.password)
      .then(result =>{
        const user = result.user;
        toast.success('Sign Up Successfully');
        console.log(user);
        navigate('/');
        const userInfo = {
          displayName: event.name
        };
        updateUser(userInfo)
          .then(result => {console.log(result.user)})
          .catch(error => console.error(error)) 
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="container">
      <div className="main-singup">
        <div className="signup">
          <h3>SingUp</h3>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control mb-5 form-icon">
              <label className="label">
                <span className="label-text text-white">Full Name</span>
              </label>
              <FaUserTie className="icon" />
              <input
                type="text"
                {...register("name")}
                placeholder="Type your Full Name"
                className="input"
              />
            </div>
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
            <div id="button" className="mt-3">
              <input className="btn w-full" value="SignUp" type="submit" />
            </div>
          </form>
          <div className="social-login">
            <Link>
              <FaGoogle className="social-icon" />
            </Link>
            <Link>
              <FaGithub className="social-icon" />
            </Link>
            <Link>
              <FaTwitter className="social-icon" />
            </Link>
          </div>
          <div className="singup-link">
            <p>
              Already have an account <Link className="link">LogIn</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
