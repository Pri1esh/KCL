import React, { useEffect, useState } from 'react'
import Banner from '../../shared/banner/banner';
import graybox from "../../assets/images/graybox.png"
import bannerImg from "../../assets/images/leadership.png";


const Leadership = () => {

    const [LeaderNo,setLeaderNo] = useState<any>();
    const leaders = [
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
        {src:graybox,name:"Karan Adani",designation:"CEO, Adani Ports & SEZ Ltd"},
    ];
    useEffect(()=>{
        window.innerWidth <= 768 ? setLeaderNo(4) : setLeaderNo(leaders.length);
          window.addEventListener('resize',function(){
            window.innerWidth <= 768 ? setLeaderNo(4) : setLeaderNo(leaders.length);
          });
    },[]);
  return (
    <div>
        <Banner bannerImg={bannerImg} heading={"Leadership & Management"} />
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
                            <button className="btn  btn-outline-dark px-5 py-2 rounded-pill" onClick={()=>{setLeaderNo((prev:any) => prev + leaders.length)}}><h6>View All</h6></button>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Leadership