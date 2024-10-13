import React, { useState } from 'react'
import axios from "axios"
import "./Add.css"
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'


const Add = ({ url }) => {

    const [data, setData] = useState({
        image: "",
        name: "",
        description: "",
        category: "Salad",
        price: ""
    })

    const onChangeHandler = (event) => {


        const name = event.target.name;
        const value = event.target.value

        setData(data => ({ ...data, [name]: value }))
    }

    const submitHandler = async (event) => {
        event.preventDefault()


        const dataObject = {
            name: data.name,
            description: data.description,
            price: Number(data.price),
            category: data.category,
            image: data.image
        }
        const response = await axios.post(`${url}/api/food/add`, dataObject)

        if (response.data.success) {
            setData({
                image: "",
                name: "",
                description: "",
                category: "Salad",
                price: ""
            })
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }

    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={submitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Image URL</p>
                    <input onChange={onChangeHandler} value={data.image} type='text' required name='image' placeholder='Enter url' />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' required name='name' placeholder='Type here' />
                </div>
                <div className='add-product-description'>
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} required value={data.description} name='description' rows="6" placeholder='Write content here'></textarea>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name='category'>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$20' />
                    </div>
                </div>
                <button type='submit' className='add-button'>ADD</button>
            </form>
        </div>
    )
}

export default Add
