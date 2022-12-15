import createCategory from '../services/categories/createCategory.service';
import listAllCategories from '../services/categories/listAllCategories.service';
import listIdCategory from '../services/categories/listIdCategory.service';
import updateCategoryService from '../services/categories/updateCategory.service';
import deleteCategoryService from '../services/categories/deleteCategory.service';

export async function createCategoryController(req, res) {
    const { name } = req.body;
    const { status, message } = await createCategory(name);
    return res.status(status).json(message);
}

export async function listCategoriesController(req, res) {
    const { status, message } = await listAllCategories();
    return res.status(status).json(message);
}

export async function getCategoryController(req, res) {
    const { id } = req.params;
    const { status, message } = await listIdCategory(id);
    return res.status(status).json(message);
}

export async function updateCategoryController(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const { status, message } = await updateCategoryService(id, name);
    return res.status(status).json(message);
}

export async function deleteCategoryController(req, res) {
    const { id } = req.params;
    const { status } = await deleteCategoryService(id);
    return res.status(status).json();
}