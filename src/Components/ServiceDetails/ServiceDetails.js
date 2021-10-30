import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {

    let {key}=useParams()
   const [serviceDetails,setServiceDetails]= useState([])
   const [singleService,setSingleService]= useState({}) 

   useEffect(()=>{
       fetch('/services.json')
       .then(res=>res.json())
       .then(data =>setServiceDetails(data.service))
   },[])

   useEffect(()=>{
       const foundService = serviceDetails.find(service=>service.key == key)
       setSingleService(foundService)
   },[serviceDetails])





    return (
        <div>

      <div className="service-details my-5 mx-5">


      <div className="carousel-img">
      <img src={singleService?.img1} className="img-fluid mb-3" alt="" />
      <img src={singleService?.img2} className="img-fluid mb-3" alt="" />
      <img src={singleService?.img3} className="img-fluid" alt="" />
       </div>

       <div className="left-align">
           <h3><b>{singleService?.name}</b></h3>
           <br />
           <h6>Duration: {singleService?.duration}</h6>
           <h6>Tour Type : {singleService?.type}</h6>
           <br />
           <p>{singleService?.overview}</p>
           <h4><b><u>Includes/Excludes</u></b></h4>
           <br />
           <div className="includes">
             <div className="me-5">
               <h5>Includes:</h5>
               <ul>
                   <li>Pick and Drop Services</li>
                   <li>2 meal Per day</li>
                   <li>Hotel night Stay</li>
                   <li>Visit Tourist Places</li>
               </ul>
             </div>
             <div>
                 <h5>Excludes:</h5>
                 <ul>
                     <li>Additional Services</li>
                     <li>Insurance</li>
                     <li>Unwanted Cost</li>
                     <li>Personal Costs</li>
                 </ul>
             </div>
           </div>
           <br />
           <h6> Package Price : <span>${singleService?.price}</span> per head</h6>
           <br />
          
        <button className="custom-button me-3">Confirm Booking</button>
        <button className="custom-button">Back to Home</button>


       </div>
      </div>
        </div>
    );
};

export default ServiceDetails;