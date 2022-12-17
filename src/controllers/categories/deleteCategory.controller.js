import deleteCategoryService from '../../services/categories/deleteCategory.service.js'

export default async function deleteCategoryController(req, res) {
    const { id } = req.validatedData;
    const { status } = await deleteCategoryService(id);
    return res.status(status).json({});
}