import React, { useEffect } from "react";
import crCross from "../../assets/images/cross.svg";
import { Link } from "react-router-dom";

const BottomBar = (props: any) => {
  useEffect(()=>{
    $('.bottom-bar .sub-head a').click(function(){
      $('.bottom-bar').removeClass('active');
      $('#sidebar-fade').hide();
    });
  },[]);
  return (
    <div className="bottom-bar">
      <div className="strip">
        <span></span>
      </div>
      <div className="cross-img">
        <img src={crCross} alt="" />
      </div>
      <div className="menu-box">
        <div className="left-menu">
          <h4>Products</h4>
          <div className={`sub-head ${props.product ===  'Copper Cathode'? 'selected' : ''}`}><Link to={"/copperCathode"}>Copper Cathode</Link></div>
          <div className={`sub-head ${props.product ===  'Copper Rods'? 'selected' : ''}`}><Link to={"/copperRods"}>Copper Rods</Link></div>
          <div className={`sub-head ${props.product ===  'Silver'? 'selected' : ''}`}><Link to={""}>Silver</Link></div>
          <div className={`sub-head ${props.product ===  'Gold'? 'selected' : ''}`}><Link to={""}>Gold</Link></div>
        </div>
        <div className="left-menu">
          <h4>By-Products</h4>
          <div className={`sub-head ${props.product ===  'Industrial Gases'? 'selected' : ''}`}><Link to={""}>Industrial Gases</Link></div>
          <div className={`sub-head ${props.product ===  'Sulphuric Acid'? 'selected' : ''}`}><Link to={""}>Sulphuric Acid</Link></div>
          <div className={`sub-head ${props.product ===  'Copper Slag'? 'selected' : ''}`}><Link to={""}>Copper Slag</Link></div>
        </div>
        <div className="left-menu">
          <h4>Precious and Minor Metals</h4>
          <div className={`sub-head ${props.product ===  'Selinium Powder'? 'selected' : ''}`}><Link to={""}>Selinium Powder</Link></div>
          <div className={`sub-head ${props.product ===  'Nickel Carbonate'? 'selected' : ''}`}><Link to={""}>Nickel Carbonate</Link></div>
          <div className={`sub-head ${props.product ===  'Copper Telluride'? 'selected' : ''}`}><Link to={""}>Copper Telluride</Link></div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
