import React from "react";
import { Link, useNavigate } from "react-router-dom";


const LeftMenu = (props:any) => {
  const navigate = useNavigate();
  return (
    <div className="products-left">
      <div className="left-menu">
          <h4>Products</h4>
          <div onClick={()=>{navigate("/copperCathode")}} className={`sub-head ${props.product ===  'Copper Cathode'? 'selected' : ''}`}><a>Copper Cathode</a></div>
          <div onClick={()=>{navigate("/copperRods")}} className={`sub-head ${props.product ===  'Copper Rods'? 'selected' : ''}`}><a>Copper Rods</a></div>
          <div className={`sub-head ${props.product ===  'Silver'? 'selected' : ''}`}><a>Silver</a></div>
          <div className={`sub-head ${props.product ===  'Gold'? 'selected' : ''}`}><a>Gold</a></div>
        </div>
        <div className="left-menu">
          <h4>By-Products</h4>
          <div className={`sub-head ${props.product ===  'Industrial Gases'? 'selected' : ''}`}><a>Industrial Gases</a></div>
          <div className={`sub-head ${props.product ===  'Sulphuric Acid'? 'selected' : ''}`}><a>Sulphuric Acid</a></div>
          <div className={`sub-head ${props.product ===  'Copper Slag'? 'selected' : ''}`}><a>Copper Slag</a></div>
        </div>
        <div className="left-menu">
          <h4>Precious and Minor Metals</h4>
          <div className={`sub-head ${props.product ===  'Selinium Powder'? 'selected' : ''}`}><a>Selinium Powder</a></div>
          <div className={`sub-head ${props.product ===  'Nickel Carbonate'? 'selected' : ''}`}><a>Nickel Carbonate</a></div>
          <div className={`sub-head ${props.product ===  'Copper Telluride'? 'selected' : ''}`}><a>Copper Telluride</a></div>
        </div>
    </div>
  );
};

export default LeftMenu;
