import React from "react";
import { Link } from "react-router-dom";
import "./Socket.css";

const Socket = () => {
  return (
    <div className="socket-section">
      <div className="container">
        <div className="socket">
          <div className="left">
            <p>
              Copyright 2015 - <Link>Free Html5 Templates</Link> Designed by
              Zerotheme.com{" "}
            </p>
          </div>
          <div className="right">
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socket;
