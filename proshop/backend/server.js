import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
dotenv.config()
//
connectDB()
const app = express()
const port = process.env.PORT || 5000
//
app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes)
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
