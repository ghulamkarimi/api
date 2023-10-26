import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controller/blogController.js"


const router = express.Router()

const baseUrl = "/api/blog"


router.get(`${baseUrl}`, getAllBlogs)
router.get(`${baseUrl}/:id`, getBlog)
router.post(`${baseUrl}`, createBlog)
router.put(`${baseUrl}/:id`, updateBlog)
router.delete(`${baseUrl}/:id `, deleteBlog)




export default router;