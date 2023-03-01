import React, { useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  

  return (
    <>
      <section id="home">
        <p1>FASHION-UP</p1>
        <h2 data-aos="fade-up">Trendy wears at your stairs</h2>
        <Link to="#about" className="btn-1 ">
                KNOW ABOUT US
            </Link>
      </section>

      <div data-aos="fade-up" id="product">
        <p data-aos="fade-up-right">Find the right picks near you</p>

        <div data-aos="flip-up" className="cards">
          <div className="card mx-2 hight" style={{ width: "18rem" }}>
            <img
              src={require("./7923.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Winter Jackets</h5>
              <br />
              <h5 className="card-text">Shop:xyz Shop</h5>
              <br />
              <h5>Distance:2km</h5>
              <a href="#" className="btn ">
                BUY NOW
              </a>
            </div>
          </div>

          <div className="card mx-2" style={{ width: "18rem" }}>
            <img
              src={require("./1264.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Varsity Jackets</h5>
              <br />
              <h5 className="card-text">Shop:xyz Shop</h5>
              <br />
              <h5>Distance:2km</h5>
              <a href="#" className="btn ">
                BUY NOW
              </a>
            </div>
          </div>
          <div className="card mx-2" style={{ width: "18rem" }}>
            <img
              src={require("./1186.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hoodies</h5>
              <br />
              <h5 className="card-text">Shop:xyz Shop</h5>
              <br />
              <h5>Distance:2km</h5>
              <a href="#" className="btn ">
                BUY NOW
              </a>
            </div>
          </div>
          <div className="card mx-2" style={{ width: "18rem" }}>
            <img
              src={require("./9563.jpg")}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Shirts</h5>
              <br />
              <h5 className="card-text">Shop:xyz Shop</h5>
              <br />
              <h5>Distance:2km</h5>
              <a href="#" className="btn ">
                BUY NOW
              </a>
            </div>
          </div>
        </div>

        <Link to="/Signup">
          <button className="btn-1">FOR MORE Signup</button>
        </Link>
      </div>
      <section id="about">
        <div >
       <h3 data-aos="fade-up">About us<br/><h4>we as a company try to promote local stores that faced the lot of heat from online competion. we also want our users to feel that indian shopping experience like barganing selecting etc.</h4></h3>
        </div>

      </section>
    </>
  );
}
