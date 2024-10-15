import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./List.css"
import { toast } from 'react-toastify'
// import { StoreContext } from '../../../../frontend/src/context/StoreContext'


const List = ({ url }) => {
    // const url = "https://rupendra-food-delivery.onrender.com"

    const [list, setList] = useState([])
    // const { food_list } = useContext(StoreContext)

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`)
        console.log(response.data)
        if (response.data.success) {
            toast.success("All Available Foods in RUPENDRA's Foods.")
            setList(response.data.data)
        } else {
            toast.error("Error")
        }
    }


    const removeFood = async (foodId) => {
        // console.log(foodId)
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
        await fetchList()
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div className='list add flex-col'>
            <p>All Foods List <span className='author'>(in Rupendra's Food Website)</span></p>
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>S.No</b>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Description</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format'>
                            <p>{index + 1}.</p>
                            <img src={item.image} alt={`${item.name} + Image`} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List
