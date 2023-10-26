import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.set("strictQuery", false)
         mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlparser: true,
        })
        console.log("DB connected successfully")

    } catch (error) {
        console.log(error)
    }
}
export default connectDB