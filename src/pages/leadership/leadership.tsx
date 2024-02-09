import React, { useEffect, useState } from 'react'
import Banner from '../../shared/banner/banner';
import graybox from "../../assets/images/graybox.png"
import bannerImg from "../../assets/images/leadership.png";

import vinay from "../../assets/images/vinay.png"
import jeet from "../../assets/images/jeet.png"
import birva from "../../assets/images/birva.png"
import sunipa from "../../assets/images/sunipa.png"
import mohan from "../../assets/images/mohan.png"
import dinesh from "../../assets/images/dinesh.png"

import av from "../../assets/images/av.png"
import deepak from "../../assets/images/deepak.png"
import amitabh from "../../assets/images/amitabh.png"
import manish from "../../assets/images/manish.png"
import srinivas from "../../assets/images/srinivas.png"
import kaniya from "../../assets/images/kanaiya.png"
import satish from "../../assets/images/satish.png"

const Leadership = () => {

    const [LeaderNo,setLeaderNo] = useState<any>();
    const leaders = [
        {src:vinay,name:"Vinay Prakash",designation:"Managing Director"},
        {src:jeet,name:"Jeet Gautam Adani",designation:"Director"},
        {src:birva,name:"Birva Chiragbhai Patel",designation:"Director"},
        {src:sunipa,name:"Sunipa Roy",designation:"Business Head Copper"},
        {src:mohan,name:"Mohanasundaram Natarajan",designation:"Business Head Strategic & Precious Metals"},
        {src:dinesh,name:"Dinesh Kumar Jain",designation:"Finance Controller"},
        {src:av,name:"AV Krishnan",designation:"Head Raw Material Sourcing & Marketing "},
        {src:amitabh,name:"Amitabh Mishra",designation:"CHRO Natural Resources"},
        {src:manish,name:"Manish Saxena",designation:"CFO Metals & Mines"},
        {src:srinivas,name:"Srinivas V Gutta",designation:"Chief Digital Officer Natural Resources"},
        {src:kaniya,name:"Kanaiya Thakker",designation:"Head Legal Natural Resources "},
        {src:satish,name:"Satish Sinha",designation:"Head Sustainability & ESG "},
    ];
    useEffect(()=>{
        window.innerWidth <= 768 ? setLeaderNo(4) : setLeaderNo(leaders.length);
          window.addEventListener('resize',function(){
            window.innerWidth <= 768 ? setLeaderNo(4) : setLeaderNo(leaders.length);
          });
    },[]);
  return (
    <div>
        <Banner bannerImg={bannerImg} heading={"Leadership & Management"}  crumb={"Leadership & Management"}/>
        <section>
            <div className="container leadership-container">
                <h1>Leader at KCL</h1>
                <p className="mb-4">Our leadership plays a pivotal role in steering our long-term strategy, offering expert guidance to ensure consistent and progressive expansion. With a keen focus on safeguarding
                   the interests of our stakeholders and dedicated employees, our Board drives us towards sustainable growth.</p>
                <div className="row">
                    {leaders.slice(0,LeaderNo).map((leader:any,index:number)=>(
                        <div key={index} className="col-md-4 lead-profile">
                        <div className="card-box">
                            <img src={leader.src} className="rounded w-100" alt=""/>
                            <div className="mt-2">
                                <h5 className="mb-1">{leader.name}</h5>
                                <p>{leader.designation}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                    { LeaderNo <= leaders.length && 
                        <div className="col-md-4 d-md-none d-block">
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-dark home_btn rounded-pill" onClick={()=>{setLeaderNo((prev:any) => prev + leaders.length)}}>View All</button>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Leadership