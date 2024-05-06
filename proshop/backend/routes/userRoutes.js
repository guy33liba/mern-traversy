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
import { protect, admin } from "../middleware/authMiddleWare.js"
const router = express.Router()

router.route("/").post(registerUser).get(protect, admin, getUsers)
router.post("/logout", logoutUser)
router.post("/auth", authUser)
router.route("/profile", protect, getUserProfile).put(protect, updateUserProfile)
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(updateUser)

export default router
