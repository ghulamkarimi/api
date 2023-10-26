import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controller/blogController.js"


const router = express.Router()


router.route("/").get(getAllBlogs)
    .post(createBlog)

router.route("/").get(getBlog)
    .put(updateBlog)
    .delete(deleteBlog);






export default router;