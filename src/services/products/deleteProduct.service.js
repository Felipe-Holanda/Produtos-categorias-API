import database from "../../database";

export default async function deleteProductService(id) {
    await database.query(`DELETE FROM products WHERE id = $1`, [id]);
    return { status: 204 }
}