import { Router, query } from "express";
import "/Users/Facundo/Desktop/43350backend/src/models/carts.json" assert { type: "json" };
import {
  createCartController,
  getProductByIdController,
  addProductInCartController,
  deleteProductController,
  deleteProductsController,
  updateQtyController,
  updateAllCartController,
  getAllProductsInCartController,
} from "../controllers/cart.controller.js";
import { createTicketController } from "../controllers/ticket.controller.js";

const router = Router();

router.post("/", createCartController);
router.get("/:cid", getProductByIdController);
router.post("/:cid/products/:pid", addProductInCartController);
router.delete("/:cid/products/:pid", deleteProductController);
router.delete("/:cid", deleteProductsController);
router.post("/:cid", deleteProductsController);
router.put("/:cid/products/:pid", updateQtyController);
router.put("/:cid", updateAllCartController);
router.get("/carts/:cid", getAllProductsInCartController);
router.get("/:cid/purchase", createTicketController)


export default router;