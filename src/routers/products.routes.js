import { Router } from "express";
//Middlewares
import verifyCreationMiddleware from "../middlewares/products/verifyCreation.middleware";
import verifyIdRequestedMiddleware from "../middlewares/products/verifyIdRequired.middleware";
import verifyIdMiddleware from "../middlewares/categories/verifyId.middleware";
////Controllers
import {
    createProductController, allProductsController,
    getProductsByIdController, updateProductsController,
    deleteProductsController, getProductsCategoryController
} from "../controllers/products.controllers";

const productRoutes = Router();

productRoutes.post("/products", verifyCreationMiddleware, createProductController);
productRoutes.get("/products", allProductsController);
productRoutes.get("/products/:id", verifyIdRequestedMiddleware, getProductsByIdController);
productRoutes.patch("/products/:id", verifyIdRequestedMiddleware, updateProductsController);
productRoutes.delete("/products/:id", verifyIdRequestedMiddleware, deleteProductsController);
productRoutes.get("/products/category/:id", verifyIdMiddleware, getProductsCategoryController)


export default productRoutes;