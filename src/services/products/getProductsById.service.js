import database from "../../database";

export default async function getProductsByIdService(id) {
    const query = `SELECT * FROM products WHERE id = $1`;
    const { rows } = await database.query(query, [id]);
    return { status: 200, message: rows[0] }
}