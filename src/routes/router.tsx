import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from '../components/scrolltotop/scrolltotop';
import Home from '../pages/home/home';
import Operations from '../pages/operations/operations';
import Leadership from '../pages/leadership/leadership';
import Ceomessage from '../pages/ceomessage/ceomessage';
import Whoweare from '../pages/whoweare/whoweare';


const Routings = () => {
  const location = useLocation();
  const hideBanner = location.pathname === '/'; 
  return (
    <div>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/operations" element={<Operations/>} />
          <Route path="/leadership" element={<Leadership/>} />
          <Route path="/ceomessage" element={<Ceomessage/>} />
          <Route path="/whoweare" element={<Whoweare/>} />

        </Routes>
    </div>
  )
}

export default Routings