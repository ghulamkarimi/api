import Blog from '../models/blogModel.js';

export const createBlog = async (req, res) => {

    try {

        const blog = await Blog.create(req.body)
        res.status(201).json(blog)

    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
};
export const getAllBlogs = async (req, res) => {
    try {
        const blog = await Blog.find()
        res.json(blog)
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
};

export const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById({_id:req.params.id})
        blog ? res.status(200).json(blog) : res.status(404).json({ messege: "blog with id not found" })
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
};

export const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body)
        blog ? res.status(201).json(blog) : res.status(404).json({ messege: "blog with id not found" })

    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        blog ? res.status(200).json(blog) : res.status(404).json({ messege: "blog with id not found" })
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
};
