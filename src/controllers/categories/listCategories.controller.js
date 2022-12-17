import listCategoriesService from "../../services/categories/listCategories.service";

export default async function listCategoriesController(req, res) {
    const { status, message } = await listCategoriesService();
    return res.status(status).json(message);
}