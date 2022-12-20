import deleteProductService from "../../services/products/deleteProduct.service";

export default async function deleteProductController(req, res) {
    const { id } = req.validatedData;
    const { status } = await deleteProductService(id);
    return res.status(status).send();

}
