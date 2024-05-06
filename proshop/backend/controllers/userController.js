import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/UserModel.js"
// Auth user & get Token
//route POST /api/users/login
// access public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth User")
})
// Auth user & get Token
//route POST /api/users/
// access public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register User")
})
// Logout user & clear cookie
//route POST /api/users/logout
// access Private
const logoutUser = asyncHandler(async (req, res) => {
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
const getAllUsers = asyncHandler(async (req, res) => {
  res.send("get All Users")
})
// delete  user  profile& clear cookie
//route DELETE /api/users/profile
// access Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("delete Users")
})
