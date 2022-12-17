import database from "../../database";

export default async function listCategoryIdService(id) {
    const query = `SELECT * FROM categories WHERE id = $1`;
    const values = [id];
    const { rows } = await database.query(query, values);
    return { status: 200, message: rows[0] }
}