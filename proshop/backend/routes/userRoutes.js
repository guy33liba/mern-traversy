import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js"
import express from "express"
import { protect } from "../middleware/authMiddleWare.js"
const router = express.Router()

router.route("/").post(registerUser).get(getUsers)
router.post("/logout", logoutUser)
router.post("/authuser", authUser)
router.route("/profile", protect, getUserProfile).put(protect, updateUserProfile)
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser)

export default router
