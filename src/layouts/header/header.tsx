import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/datacontext";
import $ from "jquery";
import logo1 from "../../assets/images/KCL Logo  1.svg";
import logo2 from "../../assets/images/Image 5.png";
import hamb from "../../assets/images/menu-hamb.png";
import cloud from "../../assets/images/cloud-sun-alt-svgrepo-com.svg";

import sidebar1 from "../../assets/images/sidebar1.svg";
import sidebar2 from "../../assets/images/sidebar2.svg";
import sidebar3 from "../../assets/images/sidebar3.svg";
import sidebar4 from "../../assets/images/sidebar4.svg";
import sidebar5 from "../../assets/images/sidebar5.svg";

const Header = () => {
  useEffect(() => {
    $(document).ready(function () {
      //jquery for toggle sub menus
      $(".sub-btn").click(function () {
        $(this).next(".sub-menu").slideToggle();
        $(this).find(".dropdown").toggleClass("rotate");
      });

      //jquery for expand and collapse the sidebar
      $(".mobile-trigger").click(function () {
        $(".side-bar").addClass("active");
        $(".mobile-trigger").css("visibility", "hidden");
        $('#sidebar-fade').show();
      });

      $(".close-btn").click(function () {
        $(".side-bar").removeClass("active");
        $(".mobile-trigger").css("visibility", "visible");
        $('#sidebar-fade').hide();
      });
      $(".nav_links").click(function () {
        $(".side-bar").removeClass("active");
        $(".mobile-trigger").css("visibility", "visible");
        $('#sidebar-fade').hide();
      });
      $("#sidebar-fade").click(function () {
        $(".side-bar").removeClass("active");
        $(".mobile-trigger").css("visibility", "visible");
        $('#sidebar-fade').hide();
      });
    });

    if (window.innerWidth > 992) {
      $('.navbar .nav-item').each(function() {
        $(this).on('mouseover', function(e) {
          let nav_link = $(this).find('a[data-toggle]');
  
          if (nav_link.length !== 0) {
            let nextnav = nav_link.next();
            nav_link.parent().addClass('show');
            nextnav.addClass('show');
          }
        });
  
        $(this).on('mouseleave', function(e) {
          let nav_link = $(this).find('a[data-toggle]');
  
          if (nav_link.length !== 0) {
            let nextnav = nav_link.next();
            nav_link.parent().removeClass('show');
            nextnav.removeClass('show');
          }
        });
      });
    }
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <div className="leftdata">
            <div className="hamburger mobile-trigger">
                <img className="menu-hamb" src={hamb} alt="@HumbAlt" width="20" />
            </div>
            <Link className="navbar-brand" to={"/"}>
              <img className="kcl_logo" src={logo1} alt="" style={{ mixBlendMode: "darken" }} />
            </Link>
          </div>
          <div className="rightdata">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div className="nav-item px-1 dropdown">
                  <Link className="nav-link active dropdown-toggle"to={"/whoweare"} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Who we are
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to={"#"}>
                      About Us
                    </Link>
                    <Link className="dropdown-item" to={"/leadership"}>
                      Leadership & Management
                    </Link>
                  </div>
                </div>

                <div className="nav-item px-1 dropdown">
                  <Link className="nav-link dropdown-toggle" to={"operations"} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    What we do
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to={"/operations"}>
                      Operations
                    </Link>
                    <Link className="dropdown-item" to={"products"}>
                      Products
                    </Link>
                    <Link className="dropdown-item" to={"#"}>
                      Project
                    </Link>
                  </div>
                </div>

                <div className="nav-item px-1 dropdown">
                  <Link className="nav-link dropdown-toggle" to={""} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sustainability
                  </Link>
                  {/* <div className="dropdown-menu">
                    <Link className="dropdown-item" >
                      Sub Menu 1
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Sub Menu 2
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Sub Menu 3
                    </Link>
                  </div> */}
                </div>

                <div className="nav-item px-1 dropdown">
                  <Link className="nav-link dropdown-toggle" to={"#"} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Media
                  </Link>
                  {/* <div className="dropdown-menu">
                    <Link className="dropdown-item" href="#">
                      Sub Menu 1
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Sub Menu 2
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Sub Menu 3
                    </Link>
                  </div> */}
                </div>

                <div className="nav-item px-1 dropdown">
                  <Link className="nav-link dropdown-toggle" to={"#"} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Career
                  </Link>
                  {/* <div className="dropdown-menu">
                    <Link className="dropdown-item" href="#">
                      Sub Menu 1
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Sub Menu 2
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Sub Menu 3
                    </Link>
                  </div> */}
                </div>
                <div className="nav-item px-1">
                  <Link className="nav-link" to={"/contactUs"} tabIndex={-1} aria-disabled="true">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="side-bar">
        <div className="sidebar-head">
          <div className="close-btn d-none">
            <i className="fas fa-times"></i>
          </div>
          <div className="w-100" style={{paddingLeft: "30px"}}>
            <img className="my-2  kcl_logo" src={logo1} alt="" />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <a  className="sub-btn">
              <img className="icons" src={sidebar1} alt="" />
              <Link to={"/whoweare"} className="sub-head nav_links">Who we are</Link><i className="fas fa-angle-right dropdown"></i>
            </a>
            <div className="sub-menu">
              <Link to={"/whoweare"} className="sub-item nav_links">
                About Us
              </Link>
              <Link to={"/leadership"} className="sub-item nav_links">
                Leadership & Management
              </Link>
            </div>
          </div>
          <div className="item">
            <a  className="sub-btn">
              <img className="icons" src={sidebar2} alt="" />
              <Link to={"/operations"} className="sub-head nav_links">What we do</Link><i className="fas fa-angle-right dropdown"></i>
            </a>
            <div className="sub-menu">
              <Link to={"/operations"} className="sub-item nav_links">
                Operations
              </Link>
              <Link to={"/products"} className="sub-item nav_links">
                Products
              </Link>
              <Link to={"/"} className="sub-item">
                Project
              </Link>
            </div>
          </div>
          {/* <div className="item">
            <Link to={"#"}>
              <img className="icons" src={sidebar3} alt="" />
              Sustainability
            </Link>
          </div>
          <div className="item">
            <Link to={"media"}>
              <img className="icons" src={sidebar4} alt="" />
              Media
            </Link>
          </div>
          <div className="item">
            <Link to={"#"}>
              <img className="icons" src={sidebar5} alt="" />
              Careers
            </Link>
          </div>
        </div> */}
        <div className="item">
            <a  className="sub-btn">
            <img className="icons" src={sidebar3} alt="" />
              <Link to={""} className="sub-head nav_links">Sustainability</Link>
            </a>
          </div><div className="item">
            <a  className="sub-btn">
            <img className="icons" src={sidebar4} alt="" />
              <Link to={""} className="sub-head nav_links">Media</Link>
            </a>
          </div><div className="item">
            <a  className="sub-btn">
            <img className="icons" src={sidebar5} alt="" />
              <Link to={""} className="sub-head nav_links">Careers</Link>
            </a>
          </div>
        </div>

        <div className="menu">
          <div className="item">
            <p>INFORMATION</p>
          </div>

          <div className="item">
            <Link className="info-menu nav_links" to={"contactUs"}>Contact Us</Link>
          </div>
          <div className="item">
            <Link className="info-menu nav_links" to={"/privacyPolicy"}>Privacy Policy</Link>
          </div>
          <div className="item">
            <Link className="info-menu nav_links" to={"/terms"}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
      {<div id="sidebar-fade" className="modal-backdrop fade show" style={{display:"none"}}></div>}
    </header>
  );
};

export default Header;
