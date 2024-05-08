import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleWareHandler.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import cookieParser from "cookie-parser"
dotenv.config()
////
connectDB()
const app = express()
const port = process.env.PORT || 5000
////
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))
////
app.use(cookieParser())

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
