import express from "express";
import { roastRepo } from "../controllers/roastController.js";

const router = express.Router();

router.post("/", roastRepo);

export default router;