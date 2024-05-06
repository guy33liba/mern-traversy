import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/UserModel.js"
import jwt from "jsonwebtoken"
// Auth user & get Token
//route POST /api/users/login
// access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    })
    // Set jwt as http-only cookie

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    })

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
  res.send("auth User")
})
// Auth user & get Token
//route POST /api/users/
// access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }
  const user = await User.create({ name, email, password })
  if (user) {
    res
      .status(200)
      .json({ _id: user._id, name: user.name, email: user.email, admin: user.isAdmin })
  } else {
    res.status(401)
    throw new Error("Invalid user data")
  }
})
// Logout user & clear cookie
//route POST /api/users/logout
// access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) })
  res.status(200).json({ message: "logged out successfully" })
  res.send("logout User ")
})
// get  user  profile& clear cookie
//route GET /api/users/profile
// access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get User Profile User")
})
// update  user  profile& clear cookie
//route PUT /api/users/profile
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update User Profile")
})
// update  user  profile& clear cookie
//route GET /api/users/profile
// access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get All Users")
})
// delete  user  profile& clear cookie
//route DELETE /api/users/profile
// access Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("delete Users")
})
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete Users")
})
const getUserById = asyncHandler(async (req, res) => {
  res.send("delete Users")
})
const updateUser = asyncHandler(async (req, res) => {
  res.send("delete Users")
})
export {
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
}
