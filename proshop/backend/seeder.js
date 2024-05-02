import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
<<<<<<< HEAD
import users from "./data/users.js"
=======
>>>>>>> 48f69d52e7283ae25c17755331149506d2a6b65a
import products from "./data/products.js"
import User from "./models/UserModel.js"
import Product from "./models/ProductModel.js"
import Order from "./models/orderModel.js"
import { connectDB } from "./config/db.js"
<<<<<<< HEAD

=======
import users from "./data/users.js"
>>>>>>> 48f69d52e7283ae25c17755331149506d2a6b65a
dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

<<<<<<< HEAD
    const createdUsers = await users.insertMany(users)
=======
    const createdUsers = await User.insertMany(users)
>>>>>>> 48f69d52e7283ae25c17755331149506d2a6b65a
    const adminUser = createdUsers[0]._id
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })
    await Product.insertMany(sampleProducts)
<<<<<<< HEAD
    console.log("Data Imported!".green.bgGreen)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}
=======
    console.log("Data Imported".green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit
  }
}

>>>>>>> 48f69d52e7283ae25c17755331149506d2a6b65a
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    console.log("Data Destroyed!".red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}
if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
