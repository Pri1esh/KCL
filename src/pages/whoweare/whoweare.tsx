import React, { useEffect } from "react";
import bannerImg from "../../assets/images/wwr-banner.png";
import Banner from "../../shared/banner/banner";
import { Link, useNavigate } from "react-router-dom";
import mission from "../../assets/images/Bitmap.png";
import vision from "../../assets/images/Mask group.png";
import values from "../../assets/images/Mask group-1.png";
import graybox from "../../assets/images/ceoImage.png";
import ceoImage from "../../assets/images/ceo-white.png";

import vinay from "../../assets/images/vinay.png";
import jeet from "../../assets/images/jeet.png";
import birva from "../../assets/images/birva.png";
import sunipa from "../../assets/images/sunipa.png";
import mohan from "../../assets/images/mohan.png";
import dinesh from "../../assets/images/dinesh.png";

const Whoweare = () => {
  const navigate = useNavigate();
  useEffect(() => {
    function sliceTextToWords(text: String, numWords: number) {
      var words = text.split(" ");
      var slicedWords = words.slice(0, numWords);
      return slicedWords.join(" ");
    }

    if (window.innerWidth <= 768) {
      var readMore = $('<div class="ps-3 text-start wwr-read-more text-decoration-underline">Read More</div>');
      readMore.on("click", function () {
        var lists = $(this).prev().find("li");
        lists.slice(2).toggle();
        console.log($(this).html());
        $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
      });
      $(".wwr-list").each(function () {
        $(this).children().slice(2).hide();
      });
      $(".wwr-list").after(readMore);
    }

    if (window.innerWidth <= 786) {
      $(".readMore-para")
        .find("p:first")
        .each(function (index, element) {
          var readMore = $('<div class="seeMore text-start wwr-read-more text-decoration-underline">Read More</div>');
          readMore.on("click", function () {
            $(this).prev().toggle();
            $(this).prev().prev().toggle();
            $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
          });
          var displayPara = $(`<p>${sliceTextToWords($(element).text(), 20)}</p>`);
          $(element).parent().after(readMore);
          $(element).parent().after(displayPara);
        });
      $(".readMore-para").hide();
    }
    var hideMore = $('<div class="text-start seeMore mb-4">Read More</div>');
    $(".hide-text").children().nextAll("p").hide();
    hideMore.click(function () {
      $(this).prev().children().nextAll("p").toggle();
      $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
    });
    $(".hide-text").after(hideMore);
  }, []);

  return (
    <div>
      <Banner bannerImg={bannerImg} crumb={"Who we are"} heading={"Who we are"} subheading={"know about Kutch Copper"} />
      <section>
        <div className="aboutKCL-section d-flex align-items-center justify-content-center">
          <div className="container ">
            <h2 className="all-headings">About KCL</h2>
            <div className="hide-text">
            <p className="all-paragraphs">As a part of the diversified Adani Group, Kutch Copper Ltd. (KCL), is a greenfield copper custom smelting and refining complex with an annual capacity of 0.5 million tonne in Phase-1 and planned additional capacity of 0.5 million tonne in Phase-2, totaling to an annual capacity of 1 million tonne making it the largest custom smelter at a single location in the world.</p>
            <p>With a vision to make India self-reliant, KCL is strategically positioned to meet the nation's copper demand. Mundra, located on the northern shores of the Gulf of Kutch, Gujarat has proven to be a strategic location for Adani Group. With impeccable connectivity via sea, roads and railways, Mundra stands as an ideal hub for diverse business operations ensuring seamless movement of goods and an efficient supply chain. The power required forKCL will be sourced through MPSEZ Utilities, Adani Power, Mundra and the operational water requirement will be fulfilled through sea water de-salination of APSEZ, Mundra. The synergy between Adani's diverse businesses transforms Mundra into a pivotal location that aligns with the group’s multifaceted business needs, making it a cornerstone for the company's strategic endeavours.</p>
            </div>
            {/* <a href="" className="show-more-button-sustainibility">
              Read More
            </a> */}
            <div className="row WhatWeDoImage align-items-stretch justify-content-between mt-4">
              <div className="col-md-4 card about-divs WhatWeDoImages">
                <h3 className="my-4 mobileviewKCL d-md-none d-block all-headings text-start">Our Purpose</h3>
                <img src={vision} alt="Image 1" />
                <div className="inner-data">
                  <h3 className="my-4 all-headings d-md-block d-none laptopviewKCL text-start">Our Purpose</h3>
                  <p className="text-start">To be a world class leader in metal business with a commitment to nation building and delivering sustainable value to all stakeholders</p>
                </div>
              </div>
              <div className="col-md-4 card about-divs WhatWeDoImages">
                <h3 className="my-4 all-headings d-md-none d-block mobileviewKCL all-headings text-start">Mission</h3>
                <img src={mission} alt="Image 2" />
                <div className="inner-data">
                  <h3 className="my-4 all-headings d-md-block d-none laptopviewKCL text-start">Mission</h3>
                  <p className="text-start">To achieve sustainable growth by responsible use of resources with superior environmental standards</p>
                </div>
              </div>
              <div className="col-md-4 card about-divs WhatWeDoImages">
                <h3 className="my-4 all-headings d-md-none d-block mobileviewKCL all-headings text-start">Value</h3>
                <img src={values} alt="Image 3" />
                <div className="inner-data">
                  <h3 className="my-4 all-headings d-md-block d-none laptopviewKCL text-start">Value</h3>
                  <p className="text-start">Courage, Trust and Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CeoMessage d-flex align-items-center justify-content-center">
        <div className="container ceoMessage-container py-5">
          <h1 className="d-md-none d-block mt-4 mb-4">Message From MD</h1>
          <div className="row Chaimanrows">
            <div className="col-md-6 pe-md-5 ChaimanContentSection justify-content-around">
              <div className="ChaimanTopContentData">
                <h2 className="d-md-block d-none mb-4">Message From MD</h2>
                <p>Our entry in the metal business with Kutch Copper, is on the lines of the Government of India's vision of resource security of critical minerals and the drive for Make in India to reduce import dependency on copper. India’s percapita copper consumption of approximately 0.6 Kg, significantly lower than the global average of 3.2 Kg per capita. However, due to India's focus on clean energy systems, the increasing usage of electric vehicles, and a range of related applications, the demand for copper is expected to double by 2030</p>
                <Link to={"/whoweare/ceomessage"} className="seeMore show-more-button-sustainibility mb-4">
                  Read More
                </Link>
              </div>

              <div className="ChaimanBottomContentdata d-md-block d-none">
                <h4>Vinay Prakash</h4>
                <span className="ChaimanAdaniGroup">MDKCL & CEO Natural Resources, AEL</span>
              </div>
            </div>
            <div className="ChaimanBottomContentdata d-md-none d-block">
              <h4>Vinay Prakash</h4>
              <span className="ChaimanAdaniGroup">MDKCL & CEO Natural Resources, AEL</span>
            </div>
            <div className="col-md-6 ps-md-5 mb-2 d-md-flex justify-content-end">
              <img src={ceoImage} alt="" className="Chairman-img w-75 rounded" />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutKCL-section1 wwr-leadership d-flex align-items-center justify-content-center">
        <div className="">
          <div className="container">
            <h2 className="all-headings" style={{ marginBottom: "20px" }}>
              Leadership & Management
            </h2>

            <div className="row leadership_Profiles WhatWeDoImage justify-content-between align-items-start">
              <div className="col-md-4 col-8 card WhatWeDoImages ">
                <img src={vinay} alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3">Vinay Prakash</h5>
                  <span>Managing Director</span>
                </div>
              </div>
              <div className="col-md-4 col-8 card WhatWeDoImages ">
                <img src={jeet} alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3">Jeet Gautam Adani</h5>
                  <span>Director</span>
                </div>
              </div>
              <div className="col-md-4 col-8 card WhatWeDoImages ">
                <img src={birva} alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3">Birva Chiragbhai Patel</h5>
                  <span>Director</span>
                </div>
              </div>
              <div className="col-md-4 col-8 card WhatWeDoImages ">
                <img src={sunipa} alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3">Sunipa Roy</h5>
                  <span>Business Head Copper</span>
                </div>
              </div>
              <div className="col-md-4 col-8 card WhatWeDoImages ">
                <img src={mohan} alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3">Mohanasundaram Natarajan</h5>
                  <span>Business Head Strategic & Precious Metals</span>
                </div>
              </div>
              <div className="col-md-4 col-8 card WhatWeDoImages ">
                <img src={dinesh} alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3">Dinesh Kumar Jain</h5>
                  <span>Finance Controller</span>
                </div>
              </div>
            </div>

            <div className="WhoWeAreButton d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-outline-dark rounded-pill home_btn" onClick={() => navigate("/whoweare/leadership")}>
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whoweare;
