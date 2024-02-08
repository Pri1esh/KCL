import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "../components/scrolltotop/scrolltotop";
import Home from "../pages/home/home";
import Operations from "../pages/operations/operations";
import Leadership from "../pages/leadership/leadership";
import Ceomessage from "../pages/ceomessage/ceomessage";
import Whoweare from "../pages/whoweare/whoweare";
import Products from "../pages/products/products";
import CopperRods from "../pages/copper-rods/copper-rods";
import CopperCathode from "../pages/copper-cathode/copper-cathode";
import Contactus from "../pages/contactUs/contactUs";
import Terms from "../pages/terms/terms";
import PrivacyPolicy from "../pages/privacyPolicy/privacyPolicy";

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
      </Routes>
    </div>
  );
};

export default Routings;
