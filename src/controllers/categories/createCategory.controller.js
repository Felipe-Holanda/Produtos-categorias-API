import createCategoryService from "../../services/categories/createCategory.service";

export default async function createCategoryController(req, res) {
    const { name } = req.validatedData;
    const { status, message } = await createCategoryService(name);
    return res.status(status).json(message);
}