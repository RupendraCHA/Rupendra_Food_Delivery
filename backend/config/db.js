import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chandaluri210:R9912192624r@cluster0.rijkr.mongodb.net/RupendraFoodDelivery?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
            console.log("DB Connected!!")
        })
}