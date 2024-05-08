import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/ProductModel.js"
import order from "../models/orderModel.js"

////////////////////////////////

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("Add Order Items")
})

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get My Orders")
})

const getOrderById = asyncHandler(async (req, res) => {
  res.send("Get Order By Id")
})
