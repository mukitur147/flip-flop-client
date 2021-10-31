import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [orders,setOrders]=useState([]);
    const {user}=useAuth()
    const [matchedOrder,setMatchedOrder]=useState([])
    useEffect(()=>{
        fetch('https://grisly-blood-12747.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    useEffect(()=>{
        const matchUser = orders.filter(order=>order.username == user.displayName )
        setMatchedOrder(matchUser)
    },[orders])

    const handleDelete=(key)=>{
        const url = `https://grisly-blood-12747.herokuapp.com/orders/${key}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.deletedCount){
               alert('deleted')
               const remaining = matchedOrder.filter(matchedOrder=>matchedOrder._id !== key);
               setMatchedOrder(remaining);
           }
        })
    }


    return (
        <div className="mb-5">
           <h2 className="text-danger title my-4"><b>MY ORDERS</b></h2>
           <div className="list">
               <ul className="list-group list-group-horizontal ">
                    <li className="list-group-item item2"><b>Name</b></li>
                    <li className="list-group-item item1"><b>Address</b></li>
                    <li className="list-group-item "><b>Ordered Item</b></li>
                    <li className="list-group-item"><b>Price</b></li>
                </ul>
               </div>

           {
               matchedOrder.map(matchedOrder=><div className="list">
               <ul className="list-group list-group-horizontal ">
                    <li className="list-group-item item2">{user.displayName}</li>
                    <li className="list-group-item item1">{matchedOrder?.address}</li>
                    <li className="list-group-item ">{matchedOrder?.order}</li>
                    <li className="list-group-item">${matchedOrder?.price}</li>
                    <button onClick={()=> handleDelete(matchedOrder?._id)} className="btn btn-danger btn-height">X</button>
                </ul>
               </div>)
           }
        </div>
    );
};

export default MyOrders;