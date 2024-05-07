import jwt from "jsonwebtoken"
import asyncHandler from "./asyncHandler.js"
import User from "../models/UserModel.js"

//Protect Routes
const protect = asyncHandler(async (req, res, next) => {
  let token

  // Read the JWT from the cookie
  token = req.cookies.jwt

  if (!token) {
    // If token is missing, respond with 401 Unauthorized
    res.status(401)
    throw new Error("Not authorized, no token")
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Find the user associated with the decoded token
    req.user = await User.findById(decoded.UserId).select("-password")

    if (!req.user) {
      // If user doesn't exist, respond with 401 Unauthorized
      res.status(401)
      throw new Error("Not authorized, user not found")
    }

    // If everything is valid, proceed to the next middleware
    next()
  } catch (error) {
    // Handle any errors during token verification
    console.error(error)
    res.status(401)
    throw new Error("Not authorized, token verification failed")
  }
})
//Admin MiddleWare

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error("not authorized as admin")
  }
}
export { protect, admin }
