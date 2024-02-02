import React from "react";

const LeftMenu = (props:any) => {
  return (
    <div className="products-left">
      <div className="left-menu">
          <h4>Products</h4>
          <div className={`sub-head ${props.product ===  'Copper Cathode'? 'selected' : ''}`}>Copper Cathode</div>
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
  );
};

export default LeftMenu;
