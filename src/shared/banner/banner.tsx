import React from "react";
import { Link } from "react-router-dom";

const Banner = (props: any) => {
  return (
    <section className="banner mb-5 banner-others d-flex justify-content-center">
      <div className="position-relative banner-box">
        <div className="banner-crumb d-md-flex d-none">
          <Link to={"/"}><p>Home</p></Link>
          <p>&nbsp;/&nbsp;</p>
          <p>{props.heading}</p>
        </div>
        <img className="card-img banner-image h-100" src={props.bannerImg} alt="Placeholder Image" />
        <div className="card-img-overlay w-100 row align-items-center justify-content-center">
          <div className="text-white col-md-8 px-5">
            <h1 className="headers">{props.heading}</h1>
            {props.subheading && <h5 className="header-para">{props.subheading}</h5>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
