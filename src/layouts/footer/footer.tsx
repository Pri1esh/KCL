

import React , { useEffect,useContext, useState }  from 'react';
import { Link } from 'react-router-dom';
import {DataContext} from '../../contexts/datacontext'
import social1 from "../../assets/images/Bitmap-1.svg";
import social2 from "../../assets/images/Bitmap-2.svg";
import social3 from "../../assets/images/Bitmap.svg";
import social4 from "../../assets/images/Shape.svg";
import social5 from "../../assets/images/Vector.svg";

const Footer = () => {

  return (
    <footer>
        <div className="container py-4">
            <div className="row mb-2">
                <img className="footer-logo" src="/assests/images/KCL Logo  1.png" alt=""/>
            </div>
            <div className="row">
                <div className="col-md-8 d-md-block d-none">
                    <div className="row site_map">
                        <div className="col-3">
                            <h5>Business</h5>
                            <ul>
                                <li><a href="">Operations</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">Project</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Company</h5>
                            <ul>
                                <li><a href="">Who we are</a></li>
                                <li><a href="">Media</a></li>
                                <li><a href="">Careersv</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Sustainability</h5>
                            <ul>
                                <li><a href="">Our Goal</a></li>
                                <li><a href="">Strategy</a></li>
                                <li><a href="">Environment</a></li>
                                <li><a href="">Reports</a></li>
                                <li><a href="">Policies</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>Help Center</h5>
                            <ul>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
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
                                    <li><a href="">Operations</a></li>
                                    <li><a href="">Products</a></li>
                                    <li><a href="">Project</a></li>
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
                                    <li><a href="">Who we are</a></li>
                                    <li><a href="">Media</a></li>
                                    <li><a href="">Careersv</a></li>
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
                                <li><a href="">Our Goal</a></li>
                                <li><a href="">Strategy</a></li>
                                <li><a href="">Environment</a></li>
                                <li><a href="">Reports</a></li>
                                <li><a href="">Policies</a></li>
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
                                    <li><a href="">Contact Us</a></li>
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
            <div className="d-md-block d-none">
                <h5>Kutch Copper Limited</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem provident hic commodi tempore nemo, optio inventore ipsum quos maiores temporibus dolore perferendis fugit minima aut eum quis tenetur cupiditate vero ab ullam aspernatur autem fuga mollitia! Voluptas labore porro praesentium, quod itaque molestiae nam pariatur dolorem laudantium, obcaecati suscipit?</p>
            </div>
        </div>
        <div className="bottom-banner">
            <div className="container mt-3">
                <p>&#x24B8; 2023 Kutch Copper Limited</p>
                <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                </ul>

            </div>
        </div>
    </footer>
  )
}

export default Footer