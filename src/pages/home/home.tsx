import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import lifeImg from "../../assets/images/Ecommerce Card V9.png";
import lifeImg2 from "../../assets/images/dave-hoefler-m5oOq4iyaeQ-unsplash.jpg";
import wwd1 from "../../assets/images/smelting-home.png";
import wwd2 from "../../assets/images/rods-home.png";
import wwd3 from "../../assets/images/image 156.png";
import wwr1 from "../../assets/images/Group 1000006542.svg";
import wwr2 from "../../assets/images/Group 1000006552.svg";
import wwr3 from "../../assets/images/Group 1000006553.svg";
import life1 from "../../assets/images/adani kcl.png";
import life2 from "../../assets/images/team.png";
import life3 from "../../assets/images/player.png";
import banner from "../../assets/images/Mask group 1.png";
import sustainability from "../../assets/images/Content Section V20.png";
import sustainabilityMobile from "../../assets/images/sustainabilityMobile.png";
import { Link, useNavigate } from "react-router-dom";
import graybox from "../../assets/images/graybox.png";
import chairmanImage from "../../assets/images/chairman-white.png";

import slide1 from "../../assets/images/banner-slide.png";
import slide2 from "../../assets/images/slide-3.png";
import slide3 from "../../assets/images/banner-slide2.png";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    var owl: any = $("#home-carousel");
    owl.owlCarousel();
    $(".banner-left-button").click(function () {
      owl.trigger("prev.owl.carousel");
    });
    // Go to the previous item
    $(".banner-right-button").click(function () {
      owl.trigger("next.owl.carousel");
    });
  }, []);
  return (
    <div>
      <section className="banner home-banner mb-5 h-100">
        <div className="home-banner-box">
          <div className="banner-btn d-md-flex align-items-center justify-content-center d-none banner-left-button p-2">
            <ChevronLeftIcon className="h-100 w-100" />
          </div>
          <div className="banner-btn d-md-flex align-items-center justify-content-center d-none banner-right-button p-2">
            <ChevronRightIcon className="h-100 w-100" />
          </div>
          <OwlCarousel items={1} className="owl-theme" loop nav={false} smartSpeed={1000} id="home-carousel">
            <div>
              <div className="banner-img-div">
                <img className="card-img" src={slide1} alt="Placeholder Image" />
              </div>
              <div className="card-img-overlay d-flex justify-content-center align-items-center row px-md-0 px-4">
                <h1 className="text-white bann-txt col-md-10">Empowering Industries, Building a Self-Reliant Nation</h1>
              </div>
            </div>
            <div>
              <div className="banner-img-div">
                <img className="card-img" src={slide2} alt="Placeholder Image" />
              </div>
              <div className="card-img-overlay d-flex justify-content-center align-items-center row px-md-0 px-4">
                <h1 className="text-white bann-txt col-md-10">India’s Largest Single Location Custom Smelter</h1>
              </div>
            </div>

            <div>
              <div className="banner-img-div">
                <img className="card-img" src={slide3} alt="Placeholder Image" />
              </div>
              <div className="card-img-overlay d-flex justify-content-center align-items-center row px-md-0 px-4">
                <h1 className="text-white bann-txt col-md-10">Committed to Environment, Safety and Governance</h1>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="WhoWeAre">
        <div className="container WhoWeAreContainer">
          <div className="row WhoWeAreData justify-content-center">
            <div className="contentsection col-md-10">
              <h1 className="mb-4 section-heading">Adani Metals at a Glance</h1>
              <p>Adani Group is forging into metals business with Copper, Aluminium and Precious Metals with cutting-edge and sustainable technologies. Kutch Copper Ltd.(KCL) a subsidiary of Adani Enterprises Ltd., is a greenfield copper custom smelting and refining complex, poised to be a pivotal player in advancing green energy infrastructure. This state-of-the-art facility in Mundra, will produce copper cathodes and rods along with other valuable products such as gold, silver and selenium.</p>
            </div>
            <div className="WhoWeAreImage d-flex align-items-start mt-4">
              <div className="col-md-4 col-8 px-3">
                <div className="d-md-flex justify-content-center px-md-5">
                  <img src={wwr2} className="rounded w-50" alt="Image 3" />
                </div>
                <h3>Our Purpose</h3>
                <p>To be a world class leader in metal business with a commitment to nation building and delivering sustainable value to all stakeholders</p>
              </div>
              <div className="col-md-4 col-8 px-3">
                <div className="d-md-flex justify-content-center px-md-5">
                  <img src={wwr3} className="rounded w-50" alt="Image 3" />
                </div>
                <h3>Mission</h3>
                <p>To achieve sustainable growth by responsible use of resources with superior environmental standards</p>
              </div>
              <div className="col-md-4 col-8 px-3">
                <div className="d-md-flex justify-content-center px-md-5">
                  <img src={wwr1} className="rounded w-50" alt="Image 3" />
                </div>
                <h3>Value</h3>
                <p>Courage, Trust and Commitment</p>
              </div>
            </div>
          </div>
          <div className="WhoWeAreButton d-flex align-items-center justify-content-center">
            <button type="button" className="WhoWeAreKnowMoreButton btn btn-dark rounded-pill home_btn" onClick={() => navigate("/whoweare/aboutKcl")}>
              Know more
            </button>
          </div>
        </div>
      </section>

      <section className="Chairman  d-flex align-items-center justify-content-center">
        <div className="container ChairmanContainer">
          <h2 className="d-md-none d-block mt-4" style={{ marginBottom: "40px" }}>
            Chairman Message
          </h2>
          <div className="row Chaimanrows">
            <div className="col-md-6 px-md-5 ChaimanContentSection justify-content-around">
              <div className="ChaimanTopContentData  CMD">
                <h2 className="d-md-block d-none" style={{ marginBottom: "40px" }}>
                  Chairman Message
                </h2>
                <p>"It is my promise that we will continue to invest and do our part to help the people wherever we operate"</p>
                <Link to={"/whoweare/chairmanmessage"} className="seeMore show-more-button-sustainibility">
                  Read More
                </Link>
              </div>

              <div className="ChaimanBottomContentdata d-md-block d-none ">
                <h4>Gautam Adani</h4>
                <span className="ChaimanAdaniGroup">Chairman, Adani Group</span>
              </div>
            </div>
            <div className="ChaimanBottomContentdata d-md-none d-block mt-4">
              <h4>Gautam Adani</h4>
              <span className="ChaimanAdaniGroup">Chairman, Adani Group</span>
            </div>
            <div className="col-md-6 px-md-5 d-flex justify-content-end align-items-center">
              <img src={chairmanImage} alt="" className="Chairman-img rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="WhatWeDo">
        <div className="container WhatWeDoContainer">
          <div className="row WhatWeDoData justify-content-center">
            <div className="contentsection col-md-8 mb-3">
              <h1 className="mb-3 section-heading">Our Business</h1>
              <p>With a vision to make India self-reliant, Kutch Copper is strategically positioned to meet the nation’s copper demand.</p>
            </div>
            <div className="row px-0 WhatWeDoImage no-gutters">
              <div className="col-md-6 WhatWeDoImages mb-4">
                <div className="card" onClick={() => navigate("whatwedo/operations")}>
                  <img src={wwd1} className="card-img w-100" alt="Image 1" />
                  <div className="px-2">
                    <h3 className="mt-3">Operations</h3>
                    <p>Technology thats's a league apart</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 WhatWeDoImages mb-4">
                <div className="card" onClick={() => navigate("whatwedo/products")}>
                  <img src={wwd2} className="card-img w-100" alt="Image 2" />
                  <div className="px-2">
                    <h3 className="mt-3">Products</h3>
                    <p>Delivering quality, building trust</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 WhatWeDoImages mb-4">
                <div className="card" onClick={() => navigate("")}>
                  <img src={wwd3} className="card-img w-100" alt="Image 3" />
                  <div className="text-center">
                    <h3 className="mt-3">Project</h3>
                    <p>Backed by the best infrastructural capability</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="SustainibilitySection">
        <div className="container position-relative">
          <img src={sustainability} alt="Placeholder Image" className="rounded d-none d-md-block" />
          <img src={sustainabilityMobile} alt="Placeholder Image" className="rounded d-block d-md-none" />
          <div className="Sustainibility-box">
            <h1>Sustainability</h1>
            <p>Fostering Goodness through Sustainability</p>
            {/* <button type="button" className="btn btn-light rounded-pill">Know More</button> */}
          </div>
        </div>
      </section>

      <section className="LifeAtKCL d-flex align-items-center justify-content-center">
        <div className="container LifeAtKCLContainer grid-custom">
          <h1 className="mb-4 mt-4 d-md-none d-block section-heading">Life at KCL</h1>
          <div className="row LifeAtKCLRows">
            <div className="col-lg-6 col-12 LifeAtKCL-1 pe-md-3">
              <div className="row LifeAtKCL-row1">
                <div className="col-md-7">
                  <img
                    className="LifeAtKCLImg-1 rounded mb-md-0 mb-2 h-100"
                    src={life1}
                    alt="Image 1"
                    style={{
                      marginBottom: "20px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-md-5 two-img">
                  <div className="row h-100 justify-content-around">
                    <div className="col-md-12 col-6 pb-md-2 px-md-0 pe-1">
                      <img className="LifeAtKCLImg-2 rounded mb-0 h-100 w-100" src={life2} alt="Image 2" />
                    </div>
                    <div className="col-md-12 col-6 pt-md-2 px-md-0 ps-1">
                      <img className="LifeAtKCLImg-3 rounded mb-0 h-100 w-100" src={life3} alt="Image 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 LifeAtKCL-2 ps-md-5">
              <div className="LifeAtKCLContentData">
                <h1 className="mb-4 d-md-block d-none section-heading">Life at KCL</h1>
                <p>At KCL, we believe our workforce is our most vital resource. With a robust and diverse team, we benefit from a range of perspectives and ideas. Our hiring strategy focuses on attracting top talent from both campuses and the market, ensuring we have the right individuals to meet our evolving needs. This approach not only enhances our capabilities but also fosters a dynamic and innovative workplace culture</p>
                <div className="WhoWeAreButton mt-4">
                  <button type="button" className="life-kcl-button btn btn-dark rounded-pill home_btn">
                    Current Openings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
