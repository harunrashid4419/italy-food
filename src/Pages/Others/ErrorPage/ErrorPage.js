import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <div>
        <h1>Oops!</h1>
        <h3>404 - Page Not Found</h3>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </p>
        <Link to="/">go to homepage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
