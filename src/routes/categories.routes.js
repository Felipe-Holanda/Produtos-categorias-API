import { Router } from 'express';
//Schemas
import { categorySchema, idCategorySchema, targetCategorySchema } from '../schemas/categories.schema';

//Middlewares
import { verifyShapedMiddleware, verifyOverShapedMiddleware } from '../middlewares/verifyShape.middleware';
import ensureExistenceMiddleware from '../middlewares/categories/ensureExistence.middleware';
import ensureUniqueMiddleware from '../middlewares/categories/ensureUnique.middleware';

//Controllers
import createCategoryController from '../controllers/categories/createCategory.controller';
import listCategoriesController from '../controllers/categories/listCategories.controller';
import listCategoryIdController from '../controllers/categories/listCategoryId.controller';
import editCategoryController from '../controllers/categories/editCategory.controller';
import deleteCategoryController from '../controllers/categories/deleteCategory.controller';

const categoriesRoutes = Router();


categoriesRoutes.post('', verifyShapedMiddleware(categorySchema), ensureUniqueMiddleware, createCategoryController);
categoriesRoutes.get('', listCategoriesController);
categoriesRoutes.get('/:id', verifyShapedMiddleware(idCategorySchema), ensureExistenceMiddleware, listCategoryIdController);
categoriesRoutes.patch('/:id', verifyShapedMiddleware(targetCategorySchema), ensureExistenceMiddleware, ensureUniqueMiddleware, editCategoryController);
categoriesRoutes.delete('/:id', verifyShapedMiddleware(idCategorySchema), ensureExistenceMiddleware, deleteCategoryController);


export default categoriesRoutes;