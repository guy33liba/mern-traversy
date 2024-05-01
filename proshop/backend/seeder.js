import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import users from "/data/users.js"
import products from "./data/products"
import User from "./models/UserModel"
import Product from "./models/ProductModel"
import Order from "./models/orderModel"
import { connectDB } from "./config/db"
dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await users.insterMany(users)
    const adminUser = createdUsers[0]._id
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })
  } catch (error) {}
}
