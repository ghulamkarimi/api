import express from 'express';
import { createUser, deletUser, getAllUsers, getUser, updateUser } from '../controller/userController.js';

const router = express.Router();


router.route("/").get(getAllUsers)
    .post(createUser)

router.route("/").get(getUser)
    .put(updateUser)
    .delete(deletUser)




export default router;