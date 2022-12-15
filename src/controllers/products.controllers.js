import createProductsService from "../services/products/createProducts.service";
import allProductsService from "../services/products/allProducts.service";
import getProductsByIdService from "../services/products/getProductsById.service";
import updateProductsService from "../services/products/updateProducts.service";
import deleteProductService from "../services/products/deleteProduct.service";
import getProductsCategoryService from "../services/products/getProductsCategory.service";

export async function createProductController(req, res) {
    const { name, price } = req.body;
    const { status, message } = await createProductsService(name, price);
    return res.status(status).json(message);
}

export async function allProductsController(req, res) {
    const { status, message } = await allProductsService();
    return res.status(status).json(message);
}

export async function getProductsByIdController(req, res) {
    const { id } = req.params;
    const { status, message } = await getProductsByIdService(id);
    return res.status(status).json(message);
}

export async function updateProductsController(req, res) {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const { status, message } = await updateProductsService(id, name, price, category);
    return res.status(status).json(message);
}

export async function deleteProductsController(req, res) {
    const { id } = req.params;
    const { status } = await deleteProductService(id);
    return res.status(status).json();
}

export async function getProductsCategoryController(req, res) {
    const { id } = req.params;
    const { status, message } = await getProductsCategoryService(id);
    return res.status(status).json(message);
}