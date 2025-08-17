import express from "express";
import { getInstitute, setInstitute } from "../controllers/instituteController";

const router = express.Router();

router.post("/", setInstitute);
router.get("/", getInstitute);

export default router;
