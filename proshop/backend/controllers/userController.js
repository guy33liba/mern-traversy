import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/UserModel.js"
import generateToken from "../utils/generateToken.js"

// Auth user & get Token
//route POST /api/users/login
// access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)

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
  const user = await User.findOne(req.user._id)
  if (user) {
    res.status(200).res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error("Invalid user data")
  }
})
// update  user  profile& clear cookie
//route PUT /api/users/profile
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findOneById(req.user._id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }
    const updateUser = await user.save()
    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error("User Not Found")
  }
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
