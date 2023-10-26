import mongoose from "mongoose";

const blogSchema = mongoose.Schema({

    userId: { type: String },
    title: { type: String },
    content: { String },
    image: { type: String },
    date: { type: Date, default: Date.now() },
});

export default mongoose.model("Blog", blogSchema)