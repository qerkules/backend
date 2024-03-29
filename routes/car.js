import express from "express";
import { getCarByClass, getCarById, getCars } from "../controllers/cars.js";

const router = express.Router();

router.get("/", getCars);
router.get("/:number", getCarById);
router.get("/filter/:class", getCarByClass);

export default router;
