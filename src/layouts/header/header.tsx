import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/datacontext";
import $ from "jquery";
import logo1 from "../../assets/images/KCL Logo  1.png";
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
      });

      $(".close-btn").click(function () {
        $(".side-bar").removeClass("active");
        $(".mobile-trigger").css("visibility", "visible");
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <div className="leftdata">
            <div className="hamburger mobile-trigger">
              <a href="#">
                <img className="menu-hamb" src={hamb} alt="@HumbAlt" width="20" />
              </a>
            </div>
            <Link className="navbar-brand" to={"/"}>
              <img src={logo1} alt="" style={{ mixBlendMode: "darken" }} />
            </Link>
          </div>
          <div className="rightdata">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div className="nav-item px-1 dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Who we are
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                    <a className="dropdown-item" href="/leadership">
                      Leadership & Management
                    </a>
                  </div>
                </div>

                <div className="nav-item px-1 dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    What we do
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/operations">
                      Operations
                    </a>
                    <a className="dropdown-item" href="#">
                      Products
                    </a>
                    <a className="dropdown-item" href="#">
                      Project
                    </a>
                  </div>
                </div>

                <div className="nav-item px-1 dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sustainability
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Sub Menu 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Sub Menu 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Sub Menu 3
                    </a>
                  </div>
                </div>

                <div className="nav-item px-1 dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Media
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Sub Menu 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Sub Menu 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Sub Menu 3
                    </a>
                  </div>
                </div>

                <div className="nav-item px-1 dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Career
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Sub Menu 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Sub Menu 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Sub Menu 3
                    </a>
                  </div>
                </div>
                <div className="nav-item px-1">
                  <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="side-bar">
        <div className="sidebar-head">
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>
          <div className="w-100 text-center">
            <img className="my-2" src={logo1} alt="" />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <a className="sub-btn">
              <img className="icons" src={sidebar1} alt="" />
              Who we are<i className="fas fa-angle-right dropdown"></i>
            </a>
            <div className="sub-menu">
              <a href="#" className="sub-item">
                About Us
              </a>
              <a href="#" className="sub-item">
                Leadership & Management
              </a>
            </div>
          </div>
          <div className="item">
            <a className="sub-btn">
              <img className="icons" src={sidebar2} alt="" />
              What we do<i className="fas fa-angle-right dropdown"></i>
            </a>
            <div className="sub-menu">
              <Link to={"/operations"} className="sub-item">
                Operations
              </Link>
              <a href="#" className="sub-item">
                Products
              </a>
              <a href="#" className="sub-item">
                Project
              </a>
            </div>
          </div>
          <div className="item">
            <a href="#">
              <img className="icons" src={sidebar3} alt="" />
              Sustainability
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img className="icons" src={sidebar4} alt="" />
              Media
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img className="icons" src={sidebar5} alt="" />
              Careers
            </a>
          </div>
        </div>

        <div className="menu">
          <div className="item">
            <p>INFORMATION</p>
          </div>

          <div className="item">
            <a href="#">Contact Us</a>
          </div>
          <div className="item">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="item">
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
