import React, { useState, useEffect } from 'react'
import "./Orders.css"
import axios from "axios"
import { toast } from "react-toastify"
import { assets } from "../../assets/assets.js"



const Orders = ({ url }) => {

    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        const response = await axios.get(url + "/api/order/list")
        if (response.data.success) {
            if (response.data.data.length > 0) {
                toast.success("All Orders Fetched Successfully!")
            } else {
                toast.success("No Orders yet.")
            }
            setOrders(response.data.data)
            // console.log(response.data.data)
        } else {
            toast.error("Error in Fetching")
        }
    }

    const statusHandler = async (event, orderId) => {
        const response = await axios.post(url + "/api/order/status", {
            orderId,
            status: event.target.value
        })
        if (response.data.success) {
            toast.success("Status Updated!")
            await fetchOrders()
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <div className='order add'>
            <h3>Orders Page: No.Of.Orders Received= {orders.length}</h3>
            <div className='order-list'>
                {orders.map((order, index) => (
                    <div key={index} className='order-item'>
                        <img src={assets.parcel_icon} alt='' />
                        <div>
                            <p className='order-item-food'>
                                {order.items.map((item, index) => {
                                    if (index === order.items.length) {
                                        return <>{item.name} x {item.quantity}</>
                                    }
                                    else {
                                        return <>{item.name} x {item.quantity}, </>
                                    }
                                })}
                            </p>

                            <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
                            <div className='order-item-address'>
                                <p>{order.address.street + ","}</p>
                                <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                            </div>
                            <p className='order-item-phone'>{order.address.phone}</p>
                        </div>
                        <p>Items: {order.items.length}</p>
                        <p>Amount: ₹ {order.amount * 83}</p>
                        <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                            <option value="Food Processing">Food Processing</option>
                            <option value="Order Prepared">Order Prepared</option>
                            <option value="Out For Delivery">Out For Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
