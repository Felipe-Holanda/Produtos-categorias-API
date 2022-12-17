import getProductsByCategoryService from "../../services/products/getProductsByCategory.service.js";

export default async function getProductsByCategoryController(req, res) {
    const { id } = req.validatedData;
    const { status, data } = await getProductsByCategoryService(id);
    return res.status(status).json(data);
}