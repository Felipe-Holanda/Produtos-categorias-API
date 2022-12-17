import { Router } from 'express';

//Schemas
import { productSchema, idProductSchema, targetProductSchema } from '../schemas/products.schemas';
import { idCategorySchema } from '../schemas/categories.schema'

//Middlewares
import { verifyShapedMiddleware, verifyOverShapedMiddleware } from '../middlewares/verifyShape.middleware';
import ensureExistenceProducts from '../middlewares/products/ensureExistence.middleware';
import ensureCategoryOnCreation from '../middlewares/products/ensureExistenceCategory.middleware';

//Controllers
import createProductController from '../controllers/products/createProduct.controller.js';
import listProductsController from '../controllers/products/listProducts.controller';
import listProductIdController from '../controllers/products/listProductId.controller';
import editProductController from '../controllers/products/editProduct.controller';
import deleteProductController from '../controllers/products/deleteProduct.controller';
import getProductsByCategoryController from '../controllers/products/getProductsByCategory.controller';

const productsRoutes = Router();

productsRoutes.post('', verifyOverShapedMiddleware(productSchema), ensureCategoryOnCreation, createProductController)
productsRoutes.get('', listProductsController)
productsRoutes.get('/:id', verifyShapedMiddleware(idProductSchema), ensureExistenceProducts, listProductIdController)
productsRoutes.patch('/:id', verifyShapedMiddleware(targetProductSchema), ensureExistenceProducts, editProductController)
productsRoutes.delete('/:id', verifyShapedMiddleware(idProductSchema), ensureExistenceProducts, deleteProductController)
productsRoutes.get('/category/:id', verifyShapedMiddleware(idCategorySchema), getProductsByCategoryController)


export default productsRoutes;