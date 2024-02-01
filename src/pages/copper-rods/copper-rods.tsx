import React from "react";
import Banner from "../../shared/banner/banner";
import bannerImg from "../../assets/images/products_banner.png";
import { Link } from "react-router-dom";

import copperCathod from "../../assets/images/Copper Cathodes.png";
import copperRods from "../../assets/images/Copper Rods.png";
import Silver from "../../assets/images/Silver.png";
import Gold from "../../assets/images/Gold.png";

const CopperRods = () => {
  return (
    <div>
      <div className="container">
        <div className="products-crumb d-md-flex d-none">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <Link to={"/products"}>
            <p>Products</p>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <p>Copper Cathode</p>
        </div>

        <div className="row">
          <div className="col-md-3 products-left">
            <div className="left-menu">
              <h4>Products</h4>
              <div className="sub-head">Copper Cathods</div>
              <div className="sub-head">Copper Rods</div>
              <div className="sub-head">Silver</div>
              <div className="sub-head">Gold</div>
            </div>
            <div className="left-menu">
              <h4>By-Products</h4>
              <div className="sub-head">Industrial Gases</div>
              <div className="sub-head">Sulphuric Acid</div>
              <div className="sub-head">Copper Slag</div>
            </div>
            <div className="left-menu">
              <h4>Precious and Minor Metals</h4>
              <div className="sub-head">Selinium Powder</div>
              <div className="sub-head">Nickel Carbonate</div>
              <div className="sub-head">Copper Telluride</div>
            </div>
          </div>

          <div className="col-md-9 products-right">
            <h2>Copper Rods</h2>
            <div className="right-head">
              <p>Copper rods serve various essential purposes due to their excellent electrical conductivity, malleability, and corrosion resistance. They are mainly used in drawing electrical wires, manufacturing of electrical components, </p>
              <button type="button" className="btn btn-outline-dark rounded-pill">
                Buy Now
              </button>
            </div>
            <div className="read-more">Read More</div>
            <img className="rounded products-banner" src={bannerImg} alt="" />
            <div className="cr-section-1">
              <h3>Typical Specifications</h3>
              <div className="row">
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
              </div>
            </div>
            <div className="cr-section-2">
                <h3>Technical / Physical Specifications</h3>
                <h6>*These values are typical range for Cathode dimensions. This does not represent Actual values.</h6>
            </div>
            <div className="cr-section-3">
              <h3>Explore other Products</h3>
              <div className="row prod-box">
                <div className="col-md-4 prod-cards">
                  <div>
                    <img className="card-img prod-card-img" src={copperCathod} alt="" />
                    <div className="card-body prod-card-body">
                      <h5>Copper Cathodes</h5>
                      <p>Copper Cathodes are the pure metal form of copper which can be practically extracted from copper ore</p>
                      <button className="btn btn-outline-dark rounded-pill">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 prod-cards">
                  <div>
                    <img className="card-img prod-card-img" src={Silver} alt="" />
                    <div className="card-body prod-card-body">
                      <h5>Copper Cathodes</h5>
                      <p>Copper Cathodes are the pure metal form of copper which can be practically extracted from copper ore</p>
                      <button className="btn btn-outline-dark rounded-pill">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 prod-cards">
                  <div>
                    <img className="card-img prod-card-img" src={Gold} alt="" />
                    <div className="card-body prod-card-body">
                      <h5>Copper Cathodes</h5>
                      <p>Copper Cathodes are the pure metal form of copper which can be practically extracted from copper ore</p>
                      <button className="btn btn-outline-dark rounded-pill">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopperRods;
