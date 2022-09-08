import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/user/signin", signin);
router.post("/user/signup", signup);

export default router;