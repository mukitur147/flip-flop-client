import React, { useEffect, useState } from 'react';
import './AllOrders.css'

const AllOrders = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('https://grisly-blood-12747.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    const handleDelete=(key)=>{
        const url = `https://grisly-blood-12747.herokuapp.com/orders/${key}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.deletedCount){
               alert('deleted')
               const remaining = orders.filter(orders=>orders._id !== key);
               setOrders(remaining);
           }
        })
    }
    return (
    <div className="mb-5">
        <h2 className="text-danger my-4 title"><b>All Orders</b> </h2>

        <div className="list">
            <ul className="list-group list-group-horizontal ">
                 <li className="list-group-item"><b>Name</b></li>
                 <li className="list-group-item item1"><b>Email</b></li>
                 <li className="list-group-item item2"><b>Address</b></li>
                 <li className="list-group-item"><b>Ordered Item</b></li>
             </ul>
            </div>

        {
            orders.map(order=><div className="list">
            <ul className="list-group list-group-horizontal ">
                 <li className="list-group-item">{order.username}</li>
                 <li className="list-group-item item1">{order.email}</li>
                 <li className="list-group-item item2">{order.address}</li>
                 <li className="list-group-item">{order.order}</li>
                 <button onClick={()=> handleDelete(orders?._id)} className="btn btn-danger btn-height">X</button>
             </ul>
            </div>)
        }
    </div>
    );
};

export default AllOrders;