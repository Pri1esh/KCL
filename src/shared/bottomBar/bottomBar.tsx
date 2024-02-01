import React from "react";
import crCross from "../../assets/images/cross.svg";

const BottomBar = (props: any) => {
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
          <div className={`sub-head ${props.product ===  'Copper Cathods'? 'selected' : ''}`}>Copper Cathods</div>
          <div className={`sub-head ${props.product ===  'Copper Rods'? 'selected' : ''}`}>Copper Rods</div>
          <div className={`sub-head ${props.product ===  'Silver'? 'selected' : ''}`}>Silver</div>
          <div className={`sub-head ${props.product ===  'Gold'? 'selected' : ''}`}>Gold</div>
        </div>
        <div className="left-menu">
          <h4>By-Products</h4>
          <div className={`sub-head ${props.product ===  'Industrial Gases'? 'selected' : ''}`}>Industrial Gases</div>
          <div className={`sub-head ${props.product ===  'Sulphuric Acid'? 'selected' : ''}`}>Sulphuric Acid</div>
          <div className={`sub-head ${props.product ===  'Copper Slag'? 'selected' : ''}`}>Copper Slag</div>
        </div>
        <div className="left-menu">
          <h4>Precious and Minor Metals</h4>
          <div className={`sub-head ${props.product ===  ''? 'selected' : 'Selinium Powder'}`}>Selinium Powder</div>
          <div className={`sub-head ${props.product ===  ''? 'selected' : 'Nickel Carbonate'}`}>Nickel Carbonate</div>
          <div className={`sub-head ${props.product ===  ''? 'selected' : 'Copper Telluride'}`}>Copper Telluride</div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
