import img1 from "../assets/Images/img1.png"
import img2 from "../assets/Images/img2.png"
import img3 from "../assets/Images/img3.png"
import React, { useState } from 'react';


const Mainheading = () => {
  return (
    <div className=" ">
        <div className=" text-center my-4 text-9xl font-black">
        HATHOR
    </div>
    <div className=" text-center my-4 text-9xl font-black">
        SPOTLIGHT
    </div>


    <div className="flex justify-center text-center my-12">
    <div className="card m-6">
      <img className="card-image" src={img1} />
      <h2 className="card-heading">Influence Marketing</h2>
      <p className="card-para">Influence marketing, often referred to as influencer marketing, 
         is a type of marketing strategy that leverages individuals with a 
         significant online presence and following (influencers) to promote products, services, or brands.</p>
    </div>
    <div className="card m-6">
      <img className="card-image" src={img2} />
      <h2 className="card-heading">Influence Marketing</h2>
      <p className="card-para">Influence marketing, often referred to as influencer marketing, 
         is a type of marketing strategy that leverages individuals with a 
         significant online presence and following (influencers) to promote products, services, or brands.</p>
    </div>
    <div className="card m-6">
      <img className="card-image" src={img3} />
      <h2 className="card-heading">Influence Marketing</h2>
      <p className="card-para">Influence marketing, often referred to as influencer marketing, 
         is a type of marketing strategy that leverages individuals with a 
         significant online presence and following (influencers) to promote products, services, or brands.</p>
    </div>
    </div>
    </div>
  )
}

export default Mainheading