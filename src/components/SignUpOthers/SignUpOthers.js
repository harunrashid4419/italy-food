import React, { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./SignUpOthers.css";
import { AuthContext } from "../../UserContext/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const SignUpOthers = () => {
  const { googleSignup } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignUp = () => {
    googleSignup()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("GoogleSingUp Successfully!");
        navigate(from, { replace: true });
        googleUserAddToDB(user.displayName, user.email, user.photoURL);
      })
      .catch((error) => console.log(error));
  };

  const googleUserAddToDB = (name, email, photoURL) => {
    const googleUser = { name, email, photoURL };
    fetch("https://italy-food-server.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(googleUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.5,
          },
        }}
        onClick={handleGoogleSignUp}
        id="google-signup"
      >
        <FaGoogle id="google" />
        <p>Login with google</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
          },
        }}
        id="facebook-signup"
      >
        <FaFacebookF id="facebook" />
        <p>Login with facebook</p>
      </motion.div>
    </>
  );
};

export default SignUpOthers;
