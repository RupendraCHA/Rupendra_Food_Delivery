import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js"


//app config
const app = express()
const port = 4000

//middlewares
app.use(express.json())
app.use(cors())

//DB Connection
connectDB()

// api end points

//Food Router
app.use("/api/food", foodRouter)

//User Router
app.use("/api/user", userRouter)

//Cart Router
app.use("/api/cart", cartRouter)

app.get("/", (req, res) => {
    res.send("API is Working!")
})

app.listen(port, () => {
    console.log(`Server is started on http://localhost:${port}`)
})

