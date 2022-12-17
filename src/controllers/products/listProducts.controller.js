import listProductsService from "../../services/products/listProducts.service";

export default async function listProductsController(req, res) {
    const { status, message } = await listProductsService();
    return res.status(status).json(message);
}