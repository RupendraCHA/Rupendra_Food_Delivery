import foodModel from "../models/foodModel.js";
// import fs from "fs"


// addFood item

const addFood = async (req, res) => {
    // let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category
    })

    try {
        await food.save()
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

//all Food Items List

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

const removeFood = async (req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

const addFoodItems = async (req, res) => {
    const { data } = req.body
    try {
        const foodItems = await new foodModel({ data })
        await foodItems.save()
        res.json({ success: true, message: "Successfully Added all products" })
    } catch (error) {
        res.json({ success: false, message: "Error during inserting the products" })
    }
}

export { addFood, listFood, removeFood, addFoodItems }