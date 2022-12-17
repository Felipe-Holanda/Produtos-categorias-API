import listCategoryIdService from "../../services/categories/listCategoryId.service";

export default async function listCategoryIdController(req, res) {
    const { id } = req.params;
    const { status, message } = await listCategoryIdService(id);
    return res.status(status).send(message);
}