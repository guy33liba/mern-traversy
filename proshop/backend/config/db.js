import mongoose from "mongoose"
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO.URI)
  } catch (error) {
    console.log(error)
  }
}
