import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/ProductModel.js"
import Order from "../models/orderModel.js"

////////////////////////////////

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No Order Items")
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({ ...x, product: x._id, _id: undefined })),
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.status(200).res.json(orders)
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
