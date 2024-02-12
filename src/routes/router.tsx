import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "../components/scrolltotop/scrolltotop";
import Home from "../pages/home/home";
import Operations from "../pages/operations/operations";
import Leadership from "../pages/leadership/leadership";
import Ceomessage from "../pages/ceomessage/ceomessage";
import Whoweare from "../pages/whoweare/whoweare";
import Products from "../pages/products/products";
import CopperRods from "../pages/products/copper-rods/copper-rods";
import CopperCathode from "../pages/products/copper-cathode/copper-cathode";
import Contactus from "../pages/contactUs/contactUs";
import Terms from "../pages/terms/terms";
import PrivacyPolicy from "../pages/privacyPolicy/privacyPolicy";
import Chairmanmessage from "../pages/chairmanmessage/chairmanmessage";
import Disclaimer from "../pages/disclaimer/disclaimer";
import CookiePolicy from "../pages/cookiePolicy/cookiePolicy";

const Routings = () => {
  const location = useLocation();
  const hideBanner = location.pathname === "/";
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="whoweare">
          <Route index element={<Whoweare />} />
          <Route path="aboutKcl" element={<Whoweare />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="ceomessage" element={<Ceomessage />} />
          <Route path="chairmanmessage" element={<Chairmanmessage />} />
        </Route>

        <Route path="whatwedo">
          <Route index element={<Operations />} />
          <Route path="operations" element={<Operations />} />
          <Route path="products" element={<Products />} />
        </Route>

        {/* <Route path="/operations" element={<Operations />} /> */}
        {/* <Route path="/leadership" element={<Leadership />} /> */}
        {/* <Route path="/whoweare" element={<Whoweare />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}

        <Route path="/copperRods" element={<CopperRods />} />
        <Route path="/copperCathode" element={<CopperCathode />} />

        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/termsAndConditions" element={<Terms />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookiePolicy" element={<CookiePolicy />} />
      </Routes>
    </div>
  );
};

export default Routings;
