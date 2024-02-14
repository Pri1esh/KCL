import React, { useEffect } from "react";
import Banner from "../../shared/banner/banner";
import bannerImg from "../../assets/images/cc-banner.png";
import mobileImg from "../../assets/images/cr-mobile-banner.png";
import { Link, useNavigate } from "react-router-dom";

import copperCathod from "../../assets/images/Copper Cathodes.png";
import copperRods from "../../assets/images/Copper Rods.png";
import Silver from "../../assets/images/Silver.png";
import Gold from "../../assets/images/Gold.png";
import inArrow from "../../assets/images/in-arrow.png";
import upArrow from "../../assets/images/up-arrow.png";
import outArrow from "../../assets/images/out-arrow.png";
import expandArrow from "../../assets/images/expand-arrow.png";
import meterImg from "../../assets/images/cr-meter.png";
import menu_arr from "../../assets/images/crbmenu-arrow.svg";
import crCross from "../../assets/images/cross.svg";
import BottomBar from "../../shared/bottomBar/bottomBar";
import LeftMenu from "../../shared/leftMenu/leftMenu";


const CopperCathode = () => {
  const navigate = useNavigate();
  useEffect(() => {
    function sliceTextToWords(text: String, numWords: number) {
      var words = text.split(" ");
      var slicedWords = words.slice(0, numWords);
      return slicedWords.join(" ");
    }
    //to hide more text in mobile view
    if (window.innerWidth <= 767) {
      var readMore = $('<div class="text-start seeMore wwr-read-more text-decoration-underline my-4">Read More</div>');
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

      var read_cr = $('<div class="text-start seeMore wwr-read-more text-decoration-underline mt-2 mb-4">Read More</div>');
      $(".read_cr .tabs .lul .lli").slice(5, 13).hide();
      $(".read_cr .tabs .rul .rli").slice(5, 13).hide();
      read_cr.on("click", function () {
        $(this).prev().find(".tabs .lul .lli").slice(5, 13).toggle();
        $(this).prev().find(".tabs .rul .rli").slice(5, 13).toggle();
        $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
      });
      $(".read_cr").after(read_cr);
    }

    $(".menu_arr").click(function () {
      $(".bottom-bar").addClass("active");
      $("#sidebar-fade").show();
    });
    $(".bottom-bar .cross-img").click(function () {
      $(".bottom-bar").removeClass("active");
      $("#sidebar-fade").hide();
    });
  }, []);

  return (
    <div>
      <img className="rounded products-banner d-md-none d-block" src={mobileImg} alt="" />

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
          <div className="col-md-3 d-md-block d-none">
            <LeftMenu product={"Copper Cathode"} />
          </div>
          <div className="col-md-9 products-right">
            <div className="productsr-head">
              <h2>Copper Cathode</h2>
              <img className="menu_arr d-md-none d-inline" src={menu_arr} alt="" />
            </div>
            <div className="right-head">
              <p className="readcr-text">Copper Cathodes are the pure metal form of copper which can be practically extracted from copper ore with a minimum copper content of 99.95%. · In its Phase 1, (Adani /We) will be producing 5,00,000 Tons of Copper Cathodes.</p>
              <button type="button" className="d-none btn btn-outline-dark rounded-pill">
                Buy Now
              </button>
            </div>
            <img className="rounded products-banner d-md-block d-none" src={bannerImg} alt="" />
            <div className="cc-section-1">
              <h3>Typical Chemical Specifications</h3>
              <div className="row cc-box read_cr">
                <div className="col-md-4 tabs">
                  <div className="d-flex justify-content-between">
                    <ul className="lul">
                      <li>
                        <h5 className="hed">Element</h5>
                      </li>
                      <li>
                        <h5>Element</h5>
                      </li>
                      <li className="lli">1.Selinium</li>
                      <li className="lli">2.Tellurium</li>
                      <li className="lli">3.Bismuth</li>
                      <li className="lli">4.Group Total (Se+Te+Bi)</li>
                    </ul>
                    <ul className="rul">
                      <li>
                        <h5 className="hed">PPM</h5>
                      </li>
                      <li>
                        <h5>PPM</h5>
                      </li>
                      <li className="rli">&lt; 2</li>
                      <li className="rli">&lt; 2</li>
                      <li className="rli">&lt; 1</li>
                      <li className="rli">&lt; 3</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 tabs">
                  <div className="d-flex justify-content-between">
                    <ul className="lul">
                      <li>
                        <h5>Element</h5>
                      </li>
                      <li className="lli">5.Antimony</li>
                      <li className="lli">6.Arsenic</li>
                      <li className="lli">7.Tin</li>
                      <li className="lli">8.Lead</li>
                    </ul>
                    <ul className="rul">
                      <li>
                        <h5>PPM</h5>
                      </li>
                      <li className="rli">&lt; 4</li>
                      <li className="rli">&lt; 5</li>
                      <li className="rli">&lt; 5</li>
                      <li className="rli">&lt; 5</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 tabs">
                  <div className="d-flex justify-content-between">
                    <ul className="lul">
                      <li>
                        <h5>Element</h5>
                      </li>
                      <li className="lli">9.Iron</li>
                      <li className="lli">10.Nickel</li>
                      <li className="lli">11.Sulfur</li>
                      <li className="lli">12.Silver</li>
                    </ul>
                    <ul className="rul">
                      <li>
                        <h5>PPM</h5>
                      </li>
                      <li className="rli">&lt; 5</li>
                      <li className="rli">&lt; 10</li>
                      <li className="rli">&lt; 15</li>
                      <li className="rli">&lt; 25</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-md-8 left">
                  <h4>Copper grade A STM B115(Grade-1) / IS 191 (Cu-Cath-1)</h4>
                  <h5>*All the values are in PPM . This does not represent actual Content of any lot.</h5>
                </div>
                <div className="col-md-4 right">
                  <div className="d-flex justify-content-between">
                    <h4>Total (Excluding O2)</h4>
                    <h4>&gt; 65</h4>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Copper Content</h4>
                    <h4>&gt; 99.99 %</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="cr-section-2">
              <h3>Technical / Physical Specifications</h3>
              <div className="technical-box">
                <div className="technical-div">
                  <img src={upArrow} alt="" style={{ height: "30px", width: "12px" }} />
                  <div>
                    <h4>Length</h4>
                    <h5>Approx. 1050 mm</h5>
                  </div>
                </div>
                <div className="technical-div">
                  <img src={outArrow} alt="" style={{ height: "12px", width: "30px" }} />
                  <div>
                    <h4>Width</h4>
                    <h5>Approx. 1030 mm</h5>
                  </div>
                </div>
                <div className="technical-div">
                  <img src={inArrow} alt="" style={{ height: "25.76px", width: "25.76px" }} />
                  <div>
                    <h4>Thickness</h4>
                    <h5>Approx. 6-8 mm</h5>
                  </div>
                </div>
                <div className="technical-div">
                  <img src={meterImg} alt="" style={{ height: "25.76px", width: "25.76px" }} />
                  <div>
                    <h4>Weight</h4>
                    <h5>Approx. 60 Kg</h5>
                  </div>
                </div>
              </div>
              <h6>*These values are typical range for Cathode dimensions. This does not represent Actual values.</h6>
            </div>
            <div className="cr-section-3">
              <h3>Explore other Products</h3>
              <div className="row prod-box no-gutters">
                <div className="col-md-4 col-9 prod-cards">
                  <div>
                    <img className="card-img prod-card-img" src={copperRods} alt="" />
                    <div className="card-body prod-card-body">
                      <h5>Copper Rods</h5>
                      <p>Copper rods serve various essential purposes due to their excellent electrical conductivity, malleability</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar product={"Copper Cathode"} />
    </div>
  );
};

export default CopperCathode;
