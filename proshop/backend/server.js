import express from "express"
import products from "./data/products.js"
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
app.get("/", (req, res) => {
  res.send("hello world")
})
app.use("/api/products", productRoutes)
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
