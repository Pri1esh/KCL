import React, { useEffect } from "react";
import Banner from "../../shared/banner/banner";

import bannerImg from "../../assets/images/operation_banner.png";
import operations from "../../assets/images/image 179.png";
import smelting1 from "../../assets/images/smelting1.png";
import smelting2 from "../../assets/images/smelting2.png";

const Operations = () => {
  useEffect(() => {
    function sliceTextToWords(text: String, numWords: number) {
      var words = text.split(" ");
      var slicedWords = words.slice(0, numWords);
      return slicedWords.join(" ");
    }
    if (window.innerWidth <= 768) {
      var readMore = $('<div class="text-start wwr-read-more text-decoration-underline">Read More</div>');
      var firstParagraphText = $(".readMore-para").find("p:first").text();
      var slicedText = sliceTextToWords(firstParagraphText, 20);
      var displayPara = $(`<p>${slicedText}</p>`);
      $(".readMore-para").hide();
      readMore.on("click", function () {
        $(this).prev().toggle();
        $(this).prev().prev().toggle();
        $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
      });
      $(".readMore-para").after(readMore);
      $(readMore).before(displayPara);
    }
    //to hide more text in mobile view
    if (window.innerWidth <= 768) {
      var readMore = $('<div class="text-start wwr-read-more text-decoration-underline mb-4">Read More</div>');
      var slicedText = sliceTextToWords($(".readMore-text").text(), 20);
      var displayText = $(`<p>${slicedText}</p>`);
      $(".readMore-text").hide();
      readMore.on("click", function () {
        $(this).prev().toggle();
        $(this).prev().prev().toggle();
        $(this).html() == "Read More" ? $(this).html("Read Less") : $(this).html("Read More");
      });
      $(".readMore-text").after(readMore);
      $(readMore).before(displayText);
    }
  }, []);
  return (
    <div>
        <Banner bannerImg={bannerImg} heading={"Operations"} subheading={"Advanced smelting technology, allowing us to reduce TAT and production losses"}/>
      <section>
        <div className="container  operations-container">
          <h3>
            <strong>Copper at a glance</strong>
          </h3>
          <p className="mb-4 readMore-text">Copper plays a significant role in sectors such as infrastructure development, power transmission, electrical equipment manufacturing, and renewable energy. As a leading |
            mining, metal, and trading company, our mission is to reduce India's dependence on copper imports and lead the nation toward an ‘Atmanirbhar Bharat’. Adani is committed to
            expanding domestic mining operations, enhancing refining capabilities, and promoting sustainable practices to build a stronger India.</p>

          <div className="row">
            <div className="col-md-8">
              <h3>
                <strong>Operations at KCL</strong>
              </h3>
              <p>Copper smelting is a metallurgical process that transforms copper concentrates into refined metal. KCLhas
                adopted flash smelting and pierce smith converting technology wherein the copper concentrates are
                converted into molten anodes. The molten copper is then tapped and cast into shapes like ingots or billets.</p>
              <p>Refining follows smelting to enhance copper purity. In electrolytic refining, copper is dissolved from impure ~~
                copper anodes and then electroplated onto pure cathodes. This process yields high-grade copper with |
                minimal impurities.</p>
              <a className="text-dark" href="">
                <h6>Read More</h6>
              </a>
            </div>
            <div className="col-md-4">
              <img className="rounded w-100" src={operations} alt="" />
            </div>
          </div>

          <h2>Smelting and Refining Process</h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-1">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1" aria-expanded="false" aria-controls="flush-collapse-1">
                  <div className="circle">
                    <h4>01</h4>
                  </div>
                  <h5>Flash Smelting Furnace</h5>
                </button>
              </h2>
              <div id="flush-collapse-1" className="accordion-collapse collapse" aria-labelledby="flush-heading-1" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-md-3 p-0 mb-3">
                      <img className="rounded w-100" src={smelting1} alt="" />
                    </div>
                    <div className="col-md-9 ps-md-5">
                      <div className="readMore-para">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eius laudantium accusantium illo sed. Repellendus, a nemo! Esse inventore deserunt ipsum deleniti quidem, earum quis neque molestias obcaecati aliquid dolore quaerat, culpa nihil consectetur aperiam eveniet ratione aliquam aspernatur ex!</p>
                        <p>Reaction in the flash smelting furnace</p>
                        <h6>Zn + H2SO4 -- ZnSO4 + H2</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizontal-line">
                <hr />
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2" aria-expanded="false" aria-controls="flush-collapse-2">
                  <div className="circle">
                    <h4>02</h4>
                  </div>
                  <h5>Flash Smelting Furnace</h5>
                </button>
              </h2>
              <div id="flush-collapse-2" className="accordion-collapse collapse" aria-labelledby="flush-heading-2" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-md-3 p-0 mb-3">
                      <img className="rounded w-100" src={smelting2} alt="" />
                    </div>
                    <div className="col-md-9 ps-md-5">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eius laudantium accusantium illo sed. Repellendus, a nemo! Esse inventore deserunt ipsum deleniti quidem, earum quis neque molestias obcaecati aliquid dolore quaerat, culpa nihil consectetur aperiam eveniet ratione aliquam aspernatur ex!</p>
                      <p>Reaction in the flash smelting furnace</p>
                      <h6>Zn + H2SO4 -- ZnSO4 + H2</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizontal-line">
                <hr />
              </div>
            </div>
            <div className="dotted-line"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;