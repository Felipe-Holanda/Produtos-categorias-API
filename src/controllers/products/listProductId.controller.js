import listProductIdService from "../../services/products/listProductId.service";

export default async function listProductIdController(req, res) {
    const { id } = req.validatedData;
    const { status, message } = await listProductIdService(id);
    return res.status(status).json(message);
}