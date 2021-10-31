import React from 'react';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    const { register, handleSubmit ,reset } = useForm();

    const onSubmit = data => {
      
        fetch('https://grisly-blood-12747.herokuapp.com/products',{
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
            <h3 className="text-danger my-4 title"><b>Add a new Package</b> </h3>
            <div className="my-4 all-inputs">
                <h6 className="mb-3">Please fill up all fields</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("name", { required: true})} placeholder="Name"  className="me-3" required/>
      
      <input  {...register("duration", {required: true})} placeholder="Duration"  required />
      <input  {...register("type", {required: true})} placeholder="Tour Type" className="me-3" required />
      <input  {...register("overview", {required: true})} placeholder="Details" required />
     
      
      <input type="number" {...register("price",{required: true})} placeholder="Price" className="mb-3  " required />
      <br />
      <button type="submit" className="custom-button me-3">Add Service</button>
    </form>
            </div>
        </div>
    );
};

export default AddNewService;