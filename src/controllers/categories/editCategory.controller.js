import editCategoryService from "../../services/categories/editCategory.service";

export default async function editCategoryController(req, res) {
    const { id, name } = req.validatedData;
    const { status, message } = await editCategoryService(id, name);
    return res.status(status).json(message);
}