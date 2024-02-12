

import React , { useEffect,useContext, useState }  from 'react';
import { Link } from 'react-router-dom';
import {DataContext} from '../../contexts/datacontext'
import social1 from "../../assets/images/Bitmap-1.svg";
import social2 from "../../assets/images/Bitmap-2.svg";
import social3 from "../../assets/images/Bitmap.svg";
import social4 from "../../assets/images/Shape.svg";
import social5 from "../../assets/images/Vector.svg";
import logo1 from "../../assets/images/KCL Logo  1.png";

const Footer = () => {

  return (
    <footer>
        <div className="container py-4">
            <div className="row mb-3">
            <Link className="navbar-brand" to={"/"}>
              <img src={logo1} alt="" style={{ mixBlendMode: "darken" }} />
            </Link>
            </div>
            <div className="row">
                <div className="col-md-8 d-md-block d-none">
                    <div className="row site_map">
                        <div className="col-3">
                            <h5>Business</h5>
                            <ul>
                                <li><Link to={"/operations"}>Operations</Link></li>
                                <li><Link to={"/products"}>Products</Link></li>
                                <li><Link to={""}>Project</Link></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Company</h5>
                            <ul>
                                <li><Link to={"whoweare"}>Who we are</Link></li>
                                <li><Link to={""}>Media</Link></li>
                                <li><Link to={""}>Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Sustainability</h5>
                            <ul>
                                <li><Link to={""}>Our Goal</Link></li>
                                <li><Link to={""}>Strategy</Link></li>
                                <li><Link to={""}>Environment</Link></li>
                                <li><Link to={""}>Reports</Link></li>
                                <li><Link to={""}>Policies</Link></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Help Center</h5>
                            <ul>
                                <li><Link to={""}>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 subscribe_div">
                    <h5>Subscribe for Project updates</h5>
                    <form>
                        <div className="form-group">
                          <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Enter your email ID"/>
                          <button>SIGN UP</button>
                        </div>
                    </form>
                    <div className="accordion accordion-flush d-md-none d-block mt-3" id="accordionFlushExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              <h5>Business</h5>
                            </button>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <ul>
                                    <li><Link to={""}>Operations</Link></li>
                                    <li><Link to={""}>Products</Link></li>
                                    <li><Link to={""}>Project</Link></li>
                                </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              <h5>Company</h5>
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <ul>
                                    <li><Link to={"/whoweare"}>Who we are</Link></li>
                                    <li><Link to={"#"}>Media</Link></li>
                                    <li><Link to={"#"}>Careersv</Link></li>
                                </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              <h5>Sustainability</h5>
                            </button>
                          </h2>
                          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><ul>
                                <li><Link to={""}>Our Goal</Link></li>
                                <li><Link to={""}>Strategy</Link></li>
                                <li><Link to={""}>Environment</Link></li>
                                <li><Link to={""}>Reports</Link></li>
                                <li><Link to={""}>Policies</Link></li>
                            </ul></div>
                          </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h5>Help center</h5>
                              </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <ul>
                                    <li><Link to={"contactUs"}>Contact Us</Link></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                      </div>
                    <ul className="social-container">
                        <li className="social-logo"><a href=""><img className="" src={social1} alt=""/></a></li>
                        <li className="social-logo"><a href=""><img className="" src={social2} alt=""/></a></li>
                        <li className="social-logo"><a href=""><img className="" src={social3} alt=""/></a></li>
                        <li className="social-logo"><a href=""><img className="" src={social4} alt=""/></a></li>
                        <li className="social-logo"><a href=""><img className="" src={social5} alt=""/></a></li>
                    </ul>
                </div>

            </div>
            <div className="d-md-block d-none footer-bottom">
                <h5>Kutch Copper Limited</h5>
                <p className="mb-0">Kutch Copper Limited, a 100% subsidiary of Adani Enterprises Limited, is incorporated on March 24, 2021, with the object to undertake copper business - related activities such as the manufacture of copper cathodes and copper rods and associated products. KCL is setting up a greenfield copper refinery project for production of refined copper with 1 MTPA (million tons per annum) in two phases.</p>
            </div>
        </div>
        <div className="bottom-banner">
            <div className="container py-3">
                <p>&#x24B8; 2023 Kutch Copper Limited</p>
                <ul>
                    <li><Link to={"/privacyPolicy"}>Privacy Policy</Link></li>
                    <li><Link to={"/termsAndConditions"}>Terms & Conditions</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer