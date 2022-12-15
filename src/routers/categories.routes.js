import { Router } from "express";
//Middlewares
import verifyCategory from "../middlewares/categories/verifyCategorie.middleware";
import verifyIdMiddleware from "../middlewares/categories/verifyId.middleware";
//Controllers
import {
    createCategoryController, listCategoriesController,
    getCategoryController, updateCategoryController, deleteCategoryController
} from "../controllers/categories.controllers";

const categoryRoutes = Router();

categoryRoutes.post("/categories", verifyCategory, createCategoryController);
categoryRoutes.get("/categories", listCategoriesController);
categoryRoutes.get("/categories/:id", verifyIdMiddleware, getCategoryController);
categoryRoutes.patch("/categories/:id", verifyIdMiddleware, updateCategoryController);
categoryRoutes.delete("/categories/:id", verifyIdMiddleware, deleteCategoryController);


export default categoryRoutes;