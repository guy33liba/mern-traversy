import {
  getOrders,
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
} from "../controllers/orderController.js"
import express from "express"
import { protect, admin } from "../middleware/authMiddleWare.js"
const router = express.Router()

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders)
router.route("mine").get(protect, getMyOrders)
router.route("/:id").get(protect, admin, getOrderById)
router.route("/:id/pay").get(protect, updateOrderToPaid)
router.route("/:id/deliver").get(protect, admin, updateOrderToDelivered)

export default router
