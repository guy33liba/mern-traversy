import express from "express"
import products from "./data/products.js"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
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
app.get("/api/products", (req, res) => {
  res.send(products)
})
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params
  const product = products.find((p) => p.id === id)
  res.send(product)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
