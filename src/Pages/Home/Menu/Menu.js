import React from "react";
import "./Menu.css";
import previewImg from "../../../assets/preview.jpg";
import reservationImg from "../../../assets/reservation.jpg";
import menuImg from "../../../assets/menu.jpg";
import fastFoodImg from "../../../assets/fast-food.jpg";
import chefImg from "../../../assets/chef.jpg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <div id='menu' className="all-menu">
        <h2>Welcome</h2>
        <p className="top-paragraph">Italy Food Resturent</p>
        <div className="menu">
          <div className="single-menu">
            <img className="menu-img" src={previewImg} alt="preview-img" />
            <span>Preview</span>
            <span className="preview-after"></span>
            <p>
              The sliding menucard will surely impress your customers! Set up
              several pages and display them side by side, just as on a paper
              menucard!
            </p>
            <Link>
              <button>Detalis</button>
            </Link>
          </div>
          <div className="single-menu">
            <img className="menu-img" src={reservationImg} alt="preview-img" />
            <span>Reservation</span>
            <span className="preview-after"></span>
            <p>
              The sliding menucard will surely impress your customers! Set up
              several pages and display them side by side, just as on a paper
              menucard!
            </p>
            <Link>
              <button>Detalis</button>
            </Link>
          </div>
          <div className="single-menu">
            <img className="menu-img" src={menuImg} alt="preview-img" />
            <span>Menu Card</span>
            <span className="preview-after"></span>
            <p>
              The sliding menucard will surely impress your customers! Set up
              several pages and display them side by side, just as on a paper
              menucard!
            </p>
            <Link>
              <button>Detalis</button>
            </Link>
          </div>
          <div className="single-menu">
            <img className="menu-img" src={fastFoodImg} alt="preview-img" />
            <span>Fast Food</span>
            <span className="preview-after"></span>
            <p>
              The sliding menucard will surely impress your customers! Set up
              several pages and display them side by side, just as on a paper
              menucard!
            </p>
            <Link to='/fastFood'>
              <button>Detalis</button>
            </Link>
          </div>
          <div className="single-menu">
            <img className="menu-img" src={chefImg} alt="preview-img" />
            <span>Chef</span>
            <span className="preview-after"></span>
            <p>
              The sliding menucard will surely impress your customers! Set up
              several pages and display them side by side, just as on a paper
              menucard!
            </p>
            <Link>
              <button>Detalis</button>
            </Link>
          </div>
          <div className="single-menu">
            <img className="menu-img" src={reservationImg} alt="preview-img" />
            <span>Text Heading</span>
            <span className="preview-after"></span>
            <p>
              The sliding menucard will surely impress your customers! Set up
              several pages and display them side by side, just as on a paper
              menucard!
            </p>
            <Link>
              <button>Detalis</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
