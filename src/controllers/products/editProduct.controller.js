import editProductService from "../../services/products/editProduct.service";

export default async function editProductController(req, res) {
    const { id, name, price, category } = req.validatedData;
    const { message } = await editProductService(id, name, price, category);
    res.status(200).send(message);
}