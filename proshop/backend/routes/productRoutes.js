import express from "express"
import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/ProductModel.js"
const router = express.Router()

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
  })
)
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.send(product)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: "Product not found" })
      console.log("error")
    }
  })
)
export default router
