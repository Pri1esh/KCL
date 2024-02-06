import React, { useEffect } from "react";

const Cookie = () => {
  useEffect(() => {
    const cookieBox = document.querySelector(".wrapper") as HTMLElement | null;
    const buttons = document.querySelectorAll(".button");

    const executeCodes = () => {
      //if cookie contains codinglab it will be returned and below of this code will not run
      if (document.cookie.includes("kutch-cookie")) return;
      if (cookieBox) {
        cookieBox.classList.add("show");
      }

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          if (cookieBox) {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if (button.id === "acceptBtn") {
              //set cookies for 1 month. 60 = 1 min, 60 = 1 hour, 24 = 1 day, 30 = 30 days
              document.cookie = "cookieBy=kutch-cookie; max-age=" + 60 * 60 * 24 * 30;
            }
          }
        });
      });
    };

    //executeCodes function will be called on component mount
    executeCodes();
  }, []);
  return (
    <div className="cookie-box">
      <div className="wrapper">
        <header>
          <i className="bx bx-cookie"></i>
          <h2>Cookies Consent</h2>
        </header>

        <div className="data">
          <p>
            This website use cookies to help you have a superior and more relevant browsing experience on the website.
            {/* <a href="#"> Read more...</a>  */}
          </p>
        </div>

        <div className="buttons">
          <button className="button  rounded-pill" id="acceptBtn">
            Accept
          </button>
          <button className="button rounded-pill" id="declineBtn">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
