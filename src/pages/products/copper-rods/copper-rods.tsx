import React, { useEffect } from "react";
import Banner from "../../../shared/banner/banner";
import bannerImg from "../../../assets/images/cr-banner.png";
import mobileImg from "../../../assets/images/cr-mobile-banner.png";
import { Link, useNavigate } from "react-router-dom";

import copperCathod from "../../../assets/images/Copper Cathodes.png";
import copperRods from "../../../assets/images/Copper Rods.png";
import Silver from "../../../assets/images/Silver.png";
import Gold from "../../../assets/images/Gold.png";
import inArrow from "../../../assets/images/in-arrow.png";
import upArrow from "../../../assets/images/up-arrow.png";
import outArrow from "../../../assets/images/out-arrow.png";
import expandArrow from "../../../assets/images/expand-arrow.png";
import meterImg from "../../../assets/images/cr-meter.png";
import menu_arr from "../../../assets/images/crbmenu-arrow.svg";
import crCross from "../../../assets/images/cross.svg";
import BottomBar from "../../../shared/bottomBar/bottomBar";
import LeftMenu from "../../../shared/leftMenu/leftMenu";

const CopperRods = () => {
  const navigate = useNavigate();
  useEffect(() => {
    function sliceTextToWords(text: String, numWords: number) {
      var words = text.split(" ");
      var slicedWords = words.slice(0, numWords);
      return slicedWords.join(" ");
    }
    //to hide more text in mobile view
    if (window.innerWidth <= 767) {
      var readMore = $('<div class="text-start wwr-read-more text-decoration-underline my-4">Read More</div>');
      var slicedText = sliceTextToWords($(".readcr-text").text(), 20);
      var displayText = $(`<p>${slicedText}</p>`);
      $(".readcr-text").hide();
      readMore.on("click", function () {
        $(this).prev().toggle();
        $(this).prev().prev().toggle();
        $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
      });
      $(".readcr-text").after(readMore);
      $(readMore).before(displayText);

      var read_cr = $('<div class="text-start wwr-read-more text-decoration-underline mb-4">Read More</div>');
      $(".read_cr .tabs").slice(5, 9).hide();
      read_cr.on("click", function () {
        $(this).prev().find(".tabs").slice(5, 9).toggle();
        $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
      });
      $(".read_cr").after(read_cr);
    }

    $('.menu_arr').click(function(){
      $('.bottom-bar').addClass('active');
      $('#sidebar-fade').show();
    });
    $('.bottom-bar .cross-img').click(function(){
      $('.bottom-bar').removeClass('active');
      $('#sidebar-fade').hide();
    });
  }, []);

  return (
    <div>
      <img className="products-banner d-md-none d-block" src={mobileImg} alt="" />

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
          <div className="col-md-3 d-md-block d-none products-left">
            <LeftMenu product={"Copper Rods"}/>
          </div>
          <div className="col-md-9 products-right">
            <div className="productsr-head">
              <h2>Copper Rods</h2>
              <img className="menu_arr d-md-none d-inline" src={menu_arr} alt="" />
            </div>
            <div className="right-head">
              <p className="readcr-text">Copper rods serve various essential purposes due to their excellent electrical conductivity, malleability, and corrosion resistance. They are mainly used in drawing electrical wires, manufacturing of electrical components, </p>
              <button type="button" className="d-none btn btn-outline-dark rounded-pill">
                Buy Now
              </button>
            </div>
            <img className="rounded products-banner d-md-block d-none" src={bannerImg} alt="" />
            <div className="cr-section-1">
              <h3>Typical Specifications</h3>
              <div className="row read_cr">
                <div className="col-md-4 tabs">
                  <h5>Copper content</h5>
                  <p>99.9% and above</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Oxygen content</h5>
                  <p>175 - 450 ppm</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper grade</h5>
                  <p>ETP</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Copper rod</h5>
                  <p>8.00 ± 0.38</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Condition</h5>
                  <p>Soft</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Electrical conductivity</h5>
                  <p>100% minimum</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Tensile strength</h5>
                  <p>Minimum 210 N / mm</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Elongation at fracture <br/><small>( 250 mm gauge length)</small></h5>
                  <p>Minimum 35%</p>
                </div>
                <div className="col-md-4 tabs">
                  <h5>Surface condition</h5>
                  <p>Clean , smooth and free from scratches & crack</p>
                </div>
              </div>
            </div>
            <div className="cr-section-2">
              <h3>Technical / Physical Specifications</h3>
              <div className="technical-box">
                <div className="technical-div">
                  <img src={outArrow} alt="" style={{ height: "12px", width: "30px" }} />
                  <div>
                    <h4>Internal diameter</h4>
                    <h5>1100 ± 50 mm</h5>
                  </div>
                </div>
                <div className="technical-div">
                  <img src={expandArrow} alt="" style={{ height: "13.25px", width: "37.75px" }} />
                  <div>
                    <h4>Outer diameter</h4>
                    <h5>1650mm</h5>
                  </div>
                </div>
                <div className="technical-div">
                  <img src={meterImg} alt="" style={{ height: "25.76px", width: "25.76px" }} />
                  <div>
                    <h4>Coil weight</h4>
                    <h5>2 mt - 5 mt</h5>
                  </div>
                </div>
              </div>
              <h6>*These values are typical range for Cathode dimensions. This does not represent Actual values.</h6>
            </div>
            <div className="cr-section-3">
              <h3>Explore other Products</h3>
              <div className="row prod-box no-gutters">
                <div className="col-md-4 col-9 prod-cards">
                  <div onClick={()=>{navigate("/copperCathode")}}>
                    <img className="card-img prod-card-img" src={copperCathod} alt="" />
                    <div className="card-body prod-card-body">
                      <h5>Copper Cathodes</h5>
                      <p>Copper Cathodes are the pure metal form of copper which can be practically extracted from copper ore</p>
                      <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-9 prod-cards">
                  <div>
                    <img className="card-img prod-card-img" src={Gold} alt="" />
                    <div className="card-body prod-card-body">
                      <h5>Gold</h5>
                      <p>Gold bars are revered for their timeless value and myriad applications making them a cornerstone in various sectors</p>
                      <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-9 prod-cards">
                  <div>
                    <img className="card-img prod-card-img" src={Silver} alt="" />
                    <div className="card-body prod-card-body">
                      <h5>Silver</h5>
                      <p>Distinguished by their radiant white sheen, are valued not only for their beauty but also for their practical applications.</p>
                      <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bottom-bar">
        <div className="strip">
          <span></span>
        </div>
        <div className="cross-img">
          <img src={crCross} alt=""/>
        </div>
        <div className="menu-box">
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
      </div> */}
      <BottomBar product={'Copper Rods'}/>
    </div>
  );
};

export default CopperRods;
