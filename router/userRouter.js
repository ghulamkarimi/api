import express from 'express';

import { createUser, deletUser, getAllUsers, getUser, updateUser } from '../controller/userController.js';

const router = express.Router();
const baseUrl = "/api/user"

router.get(`${baseUrl}`, getAllUsers)
router.get(`${baseUrl}/:id`, getUser)
router.post(`${baseUrl}`, createUser)
router.put(`${baseUrl}/:id`, updateUser)
router.delete(`${baseUrl}/:id `, deletUser)

export default router;