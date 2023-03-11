import React from "react";
import "./Footer.css";
import footerImg from "../../../src/assets/a-1.jpg";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="footer-section">
        <div className="container">
          <div className="footer">
            <div className="flex-column">
              <h1>Customer Testimonials</h1>
              <div className="footer-img-section">
                <img src={footerImg} alt="" />
                <div className="footer-content">
                  <h2>Nick Roach</h2>
                  <p>
                    Pellentesque elementum leo et justo dapibus convalli. In
                    justo nibh, congue nec dapibus ac, placerat eget sem. Nunc
                    consequat felis non elit ultricies in varius massa laoreet.
                    Aenean lectus nisl, ellentesque in fermentum sit amet,
                    convallis a lorem condimentum mollis. Aenean lectus nisl,
                    ellentesque in fermentum sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-column2">
              <h1>Location</h1>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289259162295!2d-120.7989351!3d37.5246781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091042b3386acd7%3A0x3b4a4cedc60363dd!2sMain+St%2C+Denair%2C+CA+95316%2C+Hoa+K%E1%BB%B3!5e0!3m2!1svi!2s!4v1434016649434"
                frameBorder="0"
              ></iframe>
            </div>

            <div className="flex-column3">
              <h1>Open Daily</h1>
              <p>
                <span>mon.</span> 17:00 - 21:00
              </p>
              <p>
                <span>tue.-wed.</span> 16:30 - 21:00
              </p>
              <p>
                <span>thu.-sat.</span> 16:30 - 21:00
              </p>
              <p>
                <span>sun.</span> 11:00 - 21:00
              </p>
              <h2>Need help getting home.</h2>
              <h3>We will call a cab for you!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
