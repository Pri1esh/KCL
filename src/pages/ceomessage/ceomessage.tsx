import React from "react";
import Banner from "../../shared/banner/banner";
import vinay from "../../assets/images/vinay.png";
import { Link } from "react-router-dom";

const Ceomessage = () => {
  return (
    <div>
      <section>
        <div className="container ceoMessage-container">
          <div className=" d-md-flex d-none ceo-crumb small">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>&nbsp;/&nbsp;</p>
            <Link to="/whoweare">
              <p>Who we are</p>
            </Link>
            <p>&nbsp;/&nbsp;</p>
            <p>Message From MD</p>
          </div>
          <div className="row mt-3 mb-4">
            <div className="col-md-6 order-md-1 order-2 ceo-data">
            <h1>Message From MD</h1>
              <p>Copper, is on the lines of the Government of India's vision of resource security of critical minerals and the drive for Make in India to reduce import dependency on copper. India’s per capita copper consumption of approximately 0.6 Kg, significantly lower than the global average of 3.2 Kg per capita. However, due to India's focus on clean energy systems, the increasing usage of electric vehicles, and a range of related applications, the demand for copper is expected to double by 2030.</p>
              <p>Our aim is to become the global leader in copper production by leveraging Adani Group's strengths in resource trading, logistics, and infrastructure. Our vision is to establish the world's largest copper smelting complex by 2030 at Mundra, near our flagship Mundra Port in the Kutch district on the West Coast. </p>
              <p>Meanwhile, Adani Group is also investing heavily in energy transition, in which copper will play a vital role. We are expanding into adjacent areas of our current capabilities, which makes the copper business a strategic fit.</p>
              <p>Kutch Copper is India's one of the most efficient copper smelters with lesser greenhouse gas emissions. We are also striving to increase the share of renewables in the overall energy mix in our quest to be the proponents of 'Green Copper'.  </p>
            </div>
            <div className="col-md-6  px-md-5 order-md-2 order-1">
              <div>
                <img className="rounded w-100" src={vinay} alt="" />
                <div className="my-3">
                  <h5>
                    <strong>Vinay Prakash</strong>
                  </h5>
                  <p>MD, KCL & CEO, Natural Resources</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut fugiat sed nostrum voluptatem, exercitationem iusto nobis dignissimos molestiae qui itaque obcaecati a ducimus, ad, nemo et quos corrupti labore repudiandae aliquam excepturi provident est natus. Labore, mollitia quis? Quas omnis labore assumenda iure eligendi reprehenderit earum autem, laborum blanditiis.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut fugiat sed nostrum voluptatem, exercitationem iusto nobis dignissimos molestiae qui itaque obcaecati a ducimus, ad, nemo et quos corrupti labore repudiandae aliquam excepturi provident est natus. Labore, mollitia quis? Quas omnis labore assumenda iure eligendi reprehenderit earum autem, laborum blanditiis.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad earum quisquam cumque, nemo ipsa porro itaque sint facere est iste.</p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Ceomessage;
