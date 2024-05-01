import express from "express"
import products from "./data/products.js"
import cors from "cors"
//

const mongoUrl =
  "mongodb+srv://guy33liba:g33g33g33@cluster0.chsfoti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express()
const port = 5000
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
