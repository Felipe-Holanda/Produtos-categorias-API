import database from "../../database";

export default async function deleteProductService(id) {
    const query = "DELETE FROM products WHERE id = $1";
    await database.query(query, [id]);
    return { status: 204 }
}