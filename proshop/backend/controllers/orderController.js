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

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update Order To Id")
})

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update Order To Delivered")
})

const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders")
})
export {
  getOrders,
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
}
