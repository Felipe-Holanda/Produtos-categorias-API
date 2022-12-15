import database from "../../database";

export default async function listIdCategory(id) {
    const query = `SELECT * FROM categories WHERE id = $1`;
    const { rows } = await database.query(query, [id]);
    return { status: 200, message: rows[0] };
}