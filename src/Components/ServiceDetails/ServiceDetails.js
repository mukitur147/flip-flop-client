import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const ServiceDetails = () => {

   
    const {user}=useAuth()
    let {key}=useParams()
   const [serviceDetails,setServiceDetails]= useState([])
   const [singleService,setSingleService]= useState({}) 

   useEffect(()=>{
       fetch('https://grisly-blood-12747.herokuapp.com/products')
       .then(res=>res.json())
       .then(data =>setServiceDetails(data))
   },[])

   useEffect(()=>{
       const foundService = serviceDetails.find(service=>service.key == key)
       setSingleService(foundService)
   },[serviceDetails])

//    orders 
   const { register, handleSubmit ,reset } = useForm();
   
   const onSubmit = data => {
     data.order = singleService?.name 
     data.price =singleService?.price
     data.username = user?.displayName
   
     fetch('https://grisly-blood-12747.herokuapp.com/orders',{
         method : 'POST',
         headers:{
             'content-type':'application/json'
         },
         body : JSON.stringify(data)
     })
     .then(res=>res.json())
     .then(result=>{
        if(result.insertedId){
            
            alert('Order processed Successfully')
            reset()
        }
     })
    
     
};



    return (
        <div>
            <h2 className="text-danger mt-4 title"><b>CONFIRM YOUR BOOKING </b></h2>

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
           <h6> Package Price : <span>${singleService?.price}</span> (per head)</h6>
           <br />



            <div className="my-4 all-inputs">
                <h6 className="mb-3">Please fill up all fields</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input value={user.displayName} {...register("name", { required: true})} placeholder="Name"  className="me-3" required/>
      
      <input type="email" value={user.email} {...register("email", {required: true})} placeholder="Email"  required />
      <input type="number" {...register("phone_number", {required: true})} placeholder="Phone Number" className="me-3" required />
      <input  {...register("city", {required: true})} placeholder="City" required />
      
      <input {...register("address",{required: true})} placeholder="Address" className="mb-3 w-100 " required />
      <br />
      <button type="submit" className="custom-button me-3">Confirm Booking</button>
    </form>
            </div>




          
        
       


       </div>
      </div>
        </div>
    );
};

export default ServiceDetails;