import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import './SignUpOthers.css';

const SignUpOthers = () => {
  return (
    <>
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
    </>
  );
};

export default SignUpOthers;
