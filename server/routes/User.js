import express from "express";
import { getUser, loginUser, signupUser } from "../controller/User.js";
const router = express.Router();

router.get('/', getUser);
router.post('/signup', signupUser);
router.post('/login', loginUser);

export default router;
