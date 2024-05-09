import express from "express";
import { 
    loginUser, 
    createUser,
    logoutCurrentUser
} from "../controllers/userControllers.js";

import { authenticate} from "../middlewares/authMiddleware.js"

const router = express.Router()

//create user
router.route('/').post(createUser).get(authenticate);     
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser)


export default router;