import React,  { useState } from 'react'
import { db } from '../firebase';
import "./Orders.css"
import { useStateValue } from "../Container/StateProvider";
import { useEffect } from "react"
import Order from "../components/Order"


export default function Orders() {

    const [{ basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db.collection("users")
            .doc(user?.uid).collection("orders")
            .orderBy("created", "desc")
            .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data()
            })))
            ))
        }else {
            setOrders([])
        }
    }, [user])

       

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__orders">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}
