import React from "react";
import chairMan from "../../assets/images/chairman-image.jpg";
import { Link } from "react-router-dom";

const Chairmanmessage = () => {
  return (
    <div>
      <section>
        <div className="container ceoMessage-container">
          <div className=" d-md-flex d-none ceo-crumb small">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>&nbsp;/&nbsp;</p>
            <p>Chaiman Message</p>
          </div>
          <div className="row mt-3 mb-4">
            <div className="col-md-6 order-md-1 order-2 ceo-data">
            <h1>Chairman Message</h1>
            <p><strong>Goodness is imperative for growth</strong></p>
              <p>The Adani Group’s existence and emergence have been an integral part of India’s resurgence. Over the past three decades, we were fortunate to touch millions, who believed in our vision, inspired us to be ambitious, pushed us to achieve those ambitions and disciplined us in setting new benchmarks in everything we did.</p>
              <p>Today, as the world watches India move into its most defining phase of growth, the Adani Group’s responsibility towards the nation assumes greater importance. I believe that our responsibility to give back to the society which makes us what we are and our ability to contribute wherever we operate will define our future and hold us together as a global organization. </p>
              <p><strong>While we continue to work towards mitigating urban-rural divides and creating equal development opportunities across geographies, we will also explore new horizons catering to the changing aspirations of New India.</strong></p>
              <p>It is increasingly being recognized that growth is incomplete if it is bereft of any good for the nation and the society as a whole. For me, growth must infuse prosperity - it must infuse, harmony and most of all - it must infuse happiness!</p>
              <p>Over the past 30 years, we have created stellar and sustainable assets fundamental to nation-building. The vision for the future must be to scale up the goodness factor. It must be to tap into new opportunities - within India as well as across the world.</p>
              <p>When I say goodness, it is broadly split into three dimensions.</p>
            </div>
            <div className="col-md-6  px-md-5 order-md-2 order-1">
              <div>
                <img className="rounded w-100" src={chairMan} alt="" />
                <div className="my-3">
                  <h5>
                    <strong>Gautam Adani</strong>
                  </h5>
                  <p>Chairman, Adani Group</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>First, our presence in businesses critical to a nation must have a defining impact on the millions of lives touched by our projects. Whether it is delivering cooking gas to a fuel-starved rural kitchen or safe-keeping the country’s staple food produce, our acts must contribute to the country’s happiness index.</p>
              <p>Secondly, we must ensure that our immediate communities settled around our business sites are empowered by our presence and become self-reliant in the shadow of our expansion.</p>
              <p>Thirdly, we must continue to foray into sectors where the country needs to establish a foothold. We will look at these opportunities as part of our national duty.</p>
              <p>We, at the Adani Group, believe in enriching lives, through state-of-the-art infrastructure and our contributions to nation-building.</p>
              <p>We believe in Growth with Goodness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chairmanmessage;
