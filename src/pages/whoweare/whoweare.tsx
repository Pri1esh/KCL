import React, { useEffect } from "react";
import bannerImg from "../../assets/images/wwr-banner.png";
import Banner from "../../shared/banner/banner";
import { Link, useNavigate } from "react-router-dom";
import mission from "../../assets/images/Bitmap.png";
import vision from "../../assets/images/Mask group.png";
import values from "../../assets/images/Mask group-1.png";


const Whoweare = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if (window.innerWidth <= 768) {
      var readMore = $('<div class="ps-3 text-start wwr-read-more text-decoration-underline">Read More</div>')
      readMore.on('click',function(){
        var lists = $(this).prev().find('li');
        lists.slice(2).toggle();
        console.log($(this).html());
        $(this).html() == 'Read More'?  $(this).html('Read Less'):$(this).html('Read More');
        
      });
      $('.wwr-list').each(function(){$(this).children().slice(2).hide();});
      $('.wwr-list').after(readMore);
    }
  },[]);

  return (
    <div>
      <Banner bannerImg={bannerImg} heading={"Who we are"} subheading={"know about Kutch Copper"}/>
      <section>
        <div className="aboutKCL-section d-flex align-items-center justify-content-center mb-5">
          <div className="container ">
            <h2 className="all-headings">About KCL</h2>
            <p className="all-paragraphs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque a vero rerum error quia ullam, perspiciatis officiis. Qui tempore in magni quam deserunt voluptates vero sequi cum blanditiis at! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti facere aliquam dolore eius accusamus reprehenderit voluptatum labore exercitationem dicta consequuntur cum voluptas fuga temporibus, non soluta eligendi iusto aspernatur harum?</p>
            <a href="" className="show-more-button-sustainibility">
              Read More
            </a>
            <div className="row WhatWeDoImage align-items-stretch justify-content-between mt-4">
              <div className="col-md-4 card WhatWeDoImages">
                <h3 className="mt-3 mobileviewKCL d-md-none d-block">Vision</h3>
                <img src={vision} alt="Image 1" />
                <div className="inner-data">
                  <h3 className="mt-3 all-headings d-md-block d-none laptopviewKCL">Vision</h3>
                  <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae quibusdam.</p>
                </div>
              </div>
              <div className="col-md-4 card WhatWeDoImages">
                <h3 className="mt-3 all-headings d-md-none d-block mobileviewKCL">Mission</h3>
                <img src={mission} alt="Image 2" />
                <div className="inner-data mt-2">
                  <h3 className="mt-3 all-headings d-md-block d-none laptopviewKCL">Mission</h3>
                  <ul className="wwr-list">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio expedita labore provident ducimus fugit veritatis.</li>
                    <li>Lorem ipsumdsf dolor sit amet consectetur adipisicing elit. Ipsa optio expedita labore provident ducimus fugit veritatis.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio expedita labore provident ducimus fugit veritatis.</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 card WhatWeDoImages">
                <h3 className="mt-3 all-headings d-md-none d-block mobileviewKCL">Value</h3>
                <img src={values} alt="Image 3" />
                <div className="inner-data mt-2">
                  <h3 className="mt-3 all-headings d-md-block d-none laptopviewKCL">Value</h3>
                  <ul className="wwr-list">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio expedita labore provident ducimus fugit veritatis.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio expedita labore provident ducimus fugit veritatis.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio expedita labore provident ducimus fugit veritatis.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Chairman d-flex align-items-center justify-content-center">
        <div className="container ChairmanContainer py-5">
          <h1 className="d-md-none d-block mt-4 mb-4">Message From CEO</h1>
          <div className="row Chaimanrows">
            <div className="col-md-6 ChaimanContentSection">
              <div className="ChaimanTopContentData">
                <h2 className="laptopview mb-4">Message From CEO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus adipisci mollitia, eaque similique sint voluptatem? Enim, nisi consequatur sequi accusantium adipisci amet distinctio commodi est, expedita sapiente tempora accusamus. nisi consequatur sequi accusantium adipisci amet distinctio commodi est, expedita sapiente tempora accusamus.</p>
                <Link to={'/ceomessage'} className="show-more-button-sustainibility mb-4">
                  Read More
                </Link>
              </div>

              <div className="ChaimanBottomContentdata d-md-block d-none">
                <h4>Gautam Adani</h4>
                <span className="ChaimanAdaniGroup">Chairman, Adani Group</span>
              </div>
            </div>
            <div className="ChaimanBottomContentdata d-md-none d-block mt-4">
              <h4>Gautam Adani</h4>
              <span className="ChaimanAdaniGroup">Chairman, Adani Group</span>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="https://placehold.co/400" alt="" className="Chairman-img w-75 w-md-100 rounded" />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutKCL-section1 wwr-leadership d-flex align-items-center justify-content-center mt-5">
        <div className="">
          <div className="container">
            <h2 className="all-headings">Leadership & Management</h2>

            <div className="row WhatWeDoImage justify-content-between align-items-start mt-4">
              <div className="col-md-4 mt-4 card WhatWeDoImages">
                <img src="https://placehold.co/600x400" alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3 all-headings">Karan Adani</h5>
                  <span>CEO, Adani Ports & SEZ Ltd.</span>
                </div>
              </div>
              <div className="col-md-4 mt-4 card WhatWeDoImages">
                <img src="https://placehold.co/600x400" alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3 all-headings">Sudipta Bhattacharya</h5>
                  <span>CEO, Adani Group North America, and CTO, Adani Group</span>
                </div>
              </div>
              <div className="col-md-4 mt-4 card WhatWeDoImages">
                <img src="https://placehold.co/600x400" alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3 all-headings">Vinay Parkash</h5>
                  <span>Director, Adani Enterprises and CTO Natural Resouuces</span>
                </div>
              </div>
              <div className="col-md-4 mt-4 card WhatWeDoImages">
                <img src="https://placehold.co/600x400" alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3 all-headings">Sudipta Bhattacharya</h5>
                  <span>CEO, Adani Group North America, and CTO, Adani Group</span>
                </div>
              </div>
              <div className="col-md-4 mt-4 card WhatWeDoImages">
                <img src="https://placehold.co/600x400" alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3 all-headings">Vinay Parkash</h5>
                  <span>Director, Adani Enterprises and CTO Natural Resouuces</span>
                </div>
              </div>
              <div className="col-md-4 mt-4 card WhatWeDoImages">
                <img src="https://placehold.co/600x400" alt="Image 1" className="rounded img-fluid fixed-size-image" />
                <div className="inner-data">
                  <h5 className="mt-3 all-headings">BS Rao</h5>
                  <span>VP, Digital and Strategy, Adani Enterprises Ltd</span>
                </div>
              </div>
            </div>

            <div className="WhoWeAreButton d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-outline-dark rounded-pill home_btn" onClick={() => (navigate('/leadership'))}>
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
