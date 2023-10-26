import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"

export const createUser = async (req, res) => {
    const existUser = await userModel.findOne({ email: req.body.email })
    if (existUser) return res.status(400).json({ message: "user already exist" })
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        await userModel.create({
            ...req.body,
            password: hashedPassword,
        })
        res.status(200).json({ message: "user created" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllUsers = async (req,res) => {
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        user ? res.status(200).json(user) : res.status(404).json({ messege: "user with id not found" })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body)
        user ? res.status(200).json(user) : res.status(404).json({ messege: "user with id not found" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deletUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)
        user ? res.status(200).json(user) : res.status(404).json({ messege: "user with id not found" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

