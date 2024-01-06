import React from 'react'
import img4 from "../assets/Images/img4.png"

const Marketing = () => {
  return (
    <div className="flex justify-center card2 px-6 py-6 mx-auto my-20">
      
            <img className="w-[1000px] h-[400px] px-6 py-6 " src={img4} />
        
        <div className="py-6">
            <h1 className="text-6xl leading-2 px-6 py-6 font-bold">
                <span className="text-yellow-500">DIGITAL</span> <br/> MARKETING
            </h1>
            <p className="text-2xl px-6 ">Digital marketing refers to the use of digital channels, platforms, 
               and technologies to promote and advertise products, services, or brands to a target audience.
            </p>
        </div>
    </div>
  )
}

export default Marketing