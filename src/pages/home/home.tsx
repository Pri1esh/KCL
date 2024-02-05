import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import lifeImg from "../../assets/images/Ecommerce Card V9.png";
import lifeImg2 from "../../assets/images/dave-hoefler-m5oOq4iyaeQ-unsplash.jpg";
import wwd1 from "../../assets/images/image 154.png";
import wwd2 from "../../assets/images/image 155.png";
import wwd3 from "../../assets/images/image 156.png";
import wwr1 from "../../assets/images/Group 1000006542.svg";
import wwr2 from "../../assets/images/Group 1000006552.svg";
import wwr3 from "../../assets/images/Group 1000006553.svg";
import banner from "../../assets/images/Mask group 1.png";
import sustainability from "../../assets/images/Content Section V20.png";
import sustainabilityMobile from "../../assets/images/sustainabilityMobile.png";
import { Link, useNavigate } from "react-router-dom";
import graybox from "../../assets/images/graybox.png"


import slide1 from "../../assets/images/slide-1.png";
import slide2 from "../../assets/images/slide-2.png";
import slide3 from "../../assets/images/slide-3.png";

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
                <h1 className="text-white bann-txt col-md-8">India's Largest Single Location Custom Smelter 500 ktpa production capacity</h1>
              </div>
            </div>

            <div>
              <div className="banner-img-div">
                <img className="card-img" src={slide2} alt="Placeholder Image" />
              </div>
              <div className="card-img-overlay d-flex justify-content-center align-items-center row px-md-0 px-4">
                <h1 className="text-white bann-txt col-md-8">Nation Building At Our Core Catering to more than half of Nation’s Copper Demand</h1>
              </div>
            </div>

            <div>
              <div className="banner-img-div">
                <img className="card-img" src={slide3} alt="Placeholder Image" />
              </div>
              <div className="card-img-overlay d-flex justify-content-center align-items-center row px-md-0 px-4">
                <h1 className="text-white bann-txt col-md-8">Keeping ESG goals as our top priority Zero Liquid Discharge Plant</h1>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="WhoWeAre">
        <div className="container WhoWeAreContainer">
          <div className="row WhoWeAreData justify-content-center">
            <div className="contentsection col-md-10">
              <h1 className="mb-3 section-heading">Who We are</h1>
              <p>Copper plays a significant role in sectors such as infrastructure development, power transmission, electrical equipment manufacturing, and renewable energy. As a leading mining, metal, and trading company, our mission is to reduce India's dependence on copper imports and lead the nation toward an ‘Atmanirbhar Bharat’</p>
            </div>
            <div className="WhoWeAreImage d-flex align-items-start mt-4">
              <div className="col-md-4 col-8 px-3">
                <div className="d-md-flex justify-content-center px-md-5">
                  <img src={wwr2} className="rounded w-50" alt="Image 3" />
                </div>
                <h3>Vision</h3>
                <p>To be the globally admired leader in copper business with a commitment to nation building and delivering sustainable value for stakeholders.</p>
              </div>
              <div className="col-md-4 col-8 px-3">
                <div className="d-md-flex justify-content-center px-md-5">
                  <img src={wwr3} className="rounded w-50" alt="Image 3" />
                </div>
                <h3>Mission</h3>
                <p>To be the world's largest copper smelting complex by 2030. Responsible and sustainable copper extraction with superior environmental standards</p>
              </div>
              <div className="col-md-4 col-8 px-3">
                <div className="d-md-flex justify-content-center px-md-5">
                  <img src={wwr1} className="rounded w-50" alt="Image 3" />
                </div>
                <h3>Value</h3>
                <p>We shall believe in our employees and other stakeholders also embrace new ideas and businesses</p>
              </div>
            </div>
          </div>
          <div className="WhoWeAreButton d-flex align-items-center justify-content-center">
            <button type="button" className="WhoWeAreKnowMoreButton btn btn-dark rounded-pill home_btn" onClick={() => navigate("/whoweare")}>
              Know more
            </button>
          </div>
        </div>
      </section>

      <section className="WhatWeDo py-5">
        <div className="container WhatWeDoContainer">
          <div className="row WhatWeDoData justify-content-center">
            <div className="contentsection col-md-8 mb-3">
              <h1 className="mb-3 section-heading">What we do</h1>
              <p className="text-center font-500">
                Adani's manufacturing acumen is unmatched. We adhere to the highest standards,
                <br /> ensuring quality, compliance, and sustainability across our operations.
              </p>
            </div>
            <div className="row WhatWeDoImage no-gutters">
              <div className="col-md-4 WhatWeDoImages mb-4">
                <div className="card">
                  <img src={wwd1} className="card-img w-100" alt="Image 1" />
                  <div className="text-center">
                    <h3 className="mt-3">Operations</h3>
                    <p>Technology thats's a league apart</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 WhatWeDoImages mb-4">
                <div className="card">
                  <img src={wwd2} className="card-img w-100" alt="Image 2" />
                  <div className="text-center">
                    <h3 className="mt-3">Products</h3>
                    <p>Delivering quality,building trust</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 WhatWeDoImages mb-4">
                <div className="card">
                  <img src={wwd3} className="card-img w-100" alt="Image 3" />
                  <div className="text-center">
                    <h3 className="mt-3">Project</h3>
                    <p>Backed by the best infrastructural capability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="SustainibilitySection">
        <div className="container position-relative">
          <img
            src={sustainability}
            alt="Placeholder Image"
            className="rounded d-none d-md-block"
          />
          <img
            src={sustainabilityMobile}
            alt="Placeholder Image"
            className="rounded d-block d-md-none"
          />
          <div className="Sustainibility-box">
            <h1>Sustainability</h1>
            <p>Adani Kutch Copper prioritizes sustainability. We strive for responsible copper extraction, low carbon footprint, and circular economy practices.</p>
            <button type="button" className="btn btn-light rounded-pill">Know More</button>
          </div>
        </div>
      </section>

      <section className="Chairman py-5 d-flex align-items-center justify-content-center">
        <div className="container ChairmanContainer">
          <h2 className="d-md-none d-block mt-4" style={{marginBottom:"40px"}}>Chairman Message</h2>
          <div className="row Chaimanrows">
            <div className="col-md-6 ChaimanContentSection">
              <div className="ChaimanTopContentData">
                <h2 className="d-md-block d-none" style={{marginBottom:"40px"}}>Chairman Message</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus adipisci mollitia, eaque similique sint voluptatem? Enim, nisi consequatur sequi accusantium adipisci amet distinctio commodi est, expedita sapiente tempora accusamus. nisi consequatur sequi accusantium adipisci amet distinctio commodi est, expedita sapiente tempora accusamus.</p>
                <Link to={"ceomessage"} className="show-more-button-sustainibility">
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
            <div className="col-md-6 px-lg-5 align-items-center">
              <img src={graybox} alt="" className="Chairman-img rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="LifeAtKCL d-flex align-items-center justify-content-center pt-5">
        <div className="container LifeAtKCLContainer grid-custom">
          <h1 className="mb-4 mt-4 mobileview2 section-heading">Life at KCL</h1>
          <div className="row LifeAtKCLRows">
            <div className="col-lg-6 col-12 LifeAtKCL-1 pe-md-3 mb-4">
              <div className="row LifeAtKCL-row1">
                <div className="col-md-7">
                  <img
                    className="LifeAtKCLImg-1 rounded mb-md-0 mb-2 h-100"
                    src="https://placehold.co/400"
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
                      <img className="LifeAtKCLImg-2 rounded mb-0 h-100 w-100" src={sustainability} alt="Image 2" />
                    </div>
                    <div className="col-md-12 col-6 pt-md-2 px-md-0 ps-1">
                      <img className="LifeAtKCLImg-3 rounded mb-0 h-100 w-100" src={sustainability} alt="Image 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 LifeAtKCL-2 ps-md-5">
              <div className="LifeAtKCLContentData">
                <h1 className="mb-4 laptopview2 section-heading">Life at KCL</h1>
                <p>Experience the vibrant life at Kutch Copper Limited (KCL), where innovation meets tradition in the world of metals. Our commitment to responsible and sustainable copper extraction, coupled with cutting-edge technology and digitalisation, sets the stage for a dynamic workplace. Discover a culture built on values of Courage, Trust, and unwavering Commitment and join us in this transformative journey at KCL, where every individual plays a crucial role in building a stronger, Atmanirbhar Bharat. </p>
                <div className="WhoWeAreButton mt-4">
                  <button type="button" className="btn btn-dark rounded-pill home_btn">
                    Job Openings
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
