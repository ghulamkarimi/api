import express from 'express';

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controller/userController.js';

const router = express.Router();
const baseUrl = "/api/user"

router.get(`${baseUrl}`, getAllUsers)
router.post(`${baseUrl}`, createUser)
router.get(`${baseUrl}/:id`, getUser)
router.put(`${baseUrl}/:id`, updateUser)
router.delete(`${baseUrl}/:id`, deleteUser)

export default router;