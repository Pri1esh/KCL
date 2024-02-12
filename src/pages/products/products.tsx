import React, { useEffect } from "react";
import Banner from "../../shared/banner/banner";
import graybox from "../../assets/images/graybox.png";
import bannerImg from "../../assets/images/products_banner.png";

import copperCathod from "../../assets/images/Copper Cathodes.png";
import copperRods from "../../assets/images/Copper Rods.png";
import Silver  from "../../assets/images/Silver.png";
import Gold from "../../assets/images/Gold.png";
import SulphuricAcid from "../../assets/images/Sulphuric Acid.png";
import copperSlag from "../../assets/images/Copper slag.png";
import industrialGases from "../../assets/images/Industrial Gases.png";
import seleniumPowder from "../../assets/images/Selenium Powder.png";
import nickelCarbonate  from "../../assets/images/Nickel Carbonate.png";
import copperTelluride from "../../assets/images/Copper Telluride.png";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        $('.tab-heads').on("click", function (){
            $('.tab-heads').removeClass('active');
            $(this).addClass('active');
          });
        if(window.innerWidth < 786){
            $('#product-tab').addClass('active');
            $('.tab-content #all').removeClass('active');
            $('.tab-content #product').addClass('active');
            $("#all-tab").attr("area-selected", 'false');
            $("#product-tab").attr("area-selected", 'true');
        }
    },[])
  return (
    <div>
      <Banner bannerImg={bannerImg} heading={"Our Products"} crumb={"products"} subheading={"Multifaceted products for a rapidly growing nation."} />
      <section>
        <div className="container product-container">
            <h3 className="d-md-none d-block">Our Products</h3>
          <div className="nav-tabs product-tab-head" id="myTab" role="tablist">
            { (window.innerWidth > 786) && <div id="all-tab" className="tab-heads active d-md-block d-none" data-bs-toggle="tab" data-bs-target="#all" role="tab" aria-controls="all" aria-selected="true">All</div>}
            <div id="product-tab" className="tab-heads"  data-bs-toggle="tab" data-bs-target="#product" role="tab" aria-controls="product" aria-selected="false">Products</div>
            <div id="byProduc-tab" className="tab-heads"  data-bs-toggle="tab" data-bs-target="#byProduct" role="tab" aria-controls="byProduct" aria-selected="false">By products</div>
            <div id="metals-tab" className="tab-heads"  data-bs-toggle="tab" data-bs-target="#metals" role="tab" aria-controls="metals" aria-selected="false">Minor Metals</div>
          </div>

          <div className="tab-content">
            <div className="tab-pane active " id="all" role="tabpanel">
                <div className="prod-heading">Products</div>
                <div className="row prod-box">
                <div className="col-md-3 prod-cards">
                    <div onClick={()=>{navigate('/copperCathode')}}>
                    <img className="card-img prod-card-img" src={copperCathod} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper Cathodes</h5>
                        <p>Copper Cathodes are the pure metal form of copper which can be practically extracted from copper ore</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div onClick={()=>{navigate('/copperRods')}}>
                    <img className="card-img prod-card-img" src={copperRods} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper Rods</h5>
                        <p>Copper rods serve various essential purposes due to their excellent electrical conductivity, malleability</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={Gold} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Gold</h5>
                        <p>Gold bars are revered for their timeless value and a applications making them a cornerstone in various sectors</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={Silver} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Silver</h5>
                        <p>Distinguished by their radiant white sheen, are valued not only for their beauty but also for their practical applications</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>                
                </div>
                <div className="prod-heading">By Products</div>
                <div className="row prod-box" >
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={SulphuricAcid} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Sulphuric Acid</h5>
                        <p>Copper Concentrate has roughly 33% Sulphur which during the smelting</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={copperSlag} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper slag</h5>
                        <p>Copper slag is a by-product of copper extraction by smelting process</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={industrialGases} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Industrial Gases</h5>
                        <p>We will produce liquid cryogenic gases for different industries </p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                </div>

                <div className="prod-heading">Minor Metals</div>
                <div className="row prod-box">
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={seleniumPowder} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Selenium Powder</h5>
                        <p>It is used in various applications such as electronics, glassmaking, and more</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={nickelCarbonate} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Nickel Carbonate</h5>
                        <p>A versatile compound with a wide range of applications in various industries</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={copperTelluride} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper Telluride</h5>
                        <p>Discover the exceptional conductivity and versatility of our Copper Telluride</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="tab-pane" id="product" role="tabpanel">
            <div className="prod-heading">Products</div>
                <div className="row prod-box">
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={copperCathod} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper Cathodes</h5>
                        <p>Copper Cathodes are the pure metal form of copper which can be practically extracted from copper ore</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={copperRods} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper Rods</h5>
                        <p>Copper rods serve various essential purposes due to their excellent electrical conductivity, malleability</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={Silver} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Silver</h5>
                        <p>Distinguished by their radiant white sheen, are valued not only for their beauty but also for their practical applications</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={Gold} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Gold</h5>
                        <p>Gold bars are revered for their timeless value and a applications making them a cornerstone in various sectors</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="tab-pane" id="byProduct" role="tabpanel">
            <div className="prod-heading">By Products</div>
                <div className="row prod-box" >
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={SulphuricAcid} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Sulphuric Acid</h5>
                        <p>Copper Concentrate has roughly 33% Sulphur which during the smelting</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={copperSlag} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper slag</h5>
                        <p>Copper slag is a by-product of copper extraction by smelting process</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={industrialGases} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Industrial Gases</h5>
                        <p>We will produce liquid cryogenic gases for different industries </p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="tab-pane" id="metals" role="tabpanel">
            <div className="prod-heading">Minor Metals</div>
                <div className="row prod-box">
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={seleniumPowder} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Selenium Powder</h5>
                        <p>It is used in various applications such as electronics, glassmaking and more</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={nickelCarbonate} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Nickel Carbonate</h5>
                        <p>A versatile compound with a wide range of applications in various industries</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 prod-cards">
                    <div>
                    <img className="card-img prod-card-img" src={copperTelluride} alt="" />
                    <div className="card-body prod-card-body">
                        <h5>Copper Telluride</h5>
                        <p>Discover the exceptional conductivity and versatility of our Copper Telluride</p>
                        <button className="btn btn-outline-dark rounded-pill d-none">Buy Now</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
