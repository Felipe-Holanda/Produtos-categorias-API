import createProductService from '../../services/products/createProduct.service.js';

export default async function createProductController(req, res) {
    const { name, price, category } = req.validatedData;
    const { status, message } = await createProductService(name, price, category);
    return res.status(status).json(message);
}