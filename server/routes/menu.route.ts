import express from "express" 
import upload from "../middlewares/multer.js";
import {isAuthenticated} from "../middlewares/isAuthenticated.js";
import { addMenu, editMenu } from "../controller/menu.controller.js";

const router = express.Router();

router.route("/").post(isAuthenticated, upload.single("image"), addMenu);
router.route("/:id").put(isAuthenticated, upload.single("image"), editMenu);
 
export default router;



