import express from "express"
import {isAuthenticated} from "../middlewares/isAuthenticated.js";
import { createCheckoutSession, getOrders, stripeWebhook } from "../controller/order.controller.js";
const router = express.Router();

router.route("/").get(isAuthenticated, getOrders);
router.route("/checkout/create-checkout-session").post(isAuthenticated, createCheckoutSession);
router.route("/webhook").post(express.raw({type: 'application/json'}), stripeWebhook);

export default router;